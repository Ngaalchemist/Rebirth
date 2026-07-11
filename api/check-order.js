import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ACCOUNT_NO = "96886693015092"; // VA MSB nhận tiền, phải khớp với create-order.js
const SEPAY_CHECK_COOLDOWN_SECONDS = 8; // Sepay giới hạn 2 request/giây toàn tài khoản

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { code } = req.query;
    if (!code) return res.status(400).json({ error: "Thiếu mã đơn hàng" });

    const orderKey = `order:${String(code).toUpperCase()}`;
    const orderRaw = await redis.get(orderKey);
    if (!orderRaw) return res.status(404).json({ error: "Không tìm thấy đơn hàng" });

    const order = typeof orderRaw === "string" ? JSON.parse(orderRaw) : orderRaw;

    // Webhook đã xác nhận chắc chắn thanh toán xong
    if (order.status === "paid") {
      return res.status(200).json({ code: order.code, status: "paid", amount: order.amount });
    }

    // Chưa "paid" theo webhook — chủ động dò qua Sepay API xem đã có tiền vào khớp số tiền chưa
    // (bắt được trường hợp khách chuyển khoản nhưng nội dung bị sai/thiếu mã đơn)
    let status = order.status === "processing" ? "processing" : "pending";

    const cooldownKey = `sepay-check-cooldown:${order.code}`;
    const onCooldown = await redis.get(cooldownKey);

    if (!onCooldown && process.env.SEPAY_API_TOKEN) {
      await redis.set(cooldownKey, "1", { ex: SEPAY_CHECK_COOLDOWN_SECONDS });
      const found = await checkSepayForIncomingTransfer(order);
      if (found && status !== "processing") {
        status = "processing";
        order.status = "processing";
        await redis.set(orderKey, JSON.stringify(order), { ex: 60 * 60 * 24 });
      }
    }

    return res.status(200).json({ code: order.code, status, amount: order.amount });
  } catch (err) {
    console.error("check-order error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}

async function checkSepayForIncomingTransfer(order) {
  try {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const url = `https://my.sepay.vn/userapi/transactions/list?account_number=${ACCOUNT_NO}&amount_in=${order.amount}&transaction_date_min=${today}&limit=20`;

    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SEPAY_API_TOKEN}`,
      },
    });
    if (!resp.ok) return false;

    const data = await resp.json();
    const transactions = data.transactions || [];
    const orderCreatedAt = new Date(order.createdAt).getTime();

    // Chỉ tính giao dịch phát sinh SAU khi đơn hàng được tạo (tránh nhận nhầm giao dịch cũ)
    return transactions.some((t) => {
      const txTime = new Date(String(t.transaction_date).replace(" ", "T") + "+07:00").getTime();
      return txTime >= orderCreatedAt;
    });
  } catch (err) {
    console.error("checkSepayForIncomingTransfer error:", err);
    return false;
  }
}
