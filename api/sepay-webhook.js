import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Mã đơn hàng của mình luôn bắt đầu bằng "NGA" + 6 ký tự chữ/số
const ORDER_CODE_REGEX = /NGA[A-Z2-9]{6}/i;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Xác thực request đến từ SePay bằng API Key (header: Authorization: Apikey <key>)
    const expectedKey = process.env.SEPAY_WEBHOOK_API_KEY;
    if (expectedKey) {
      const authHeader = req.headers["authorization"] || "";
      const valid = authHeader === `Apikey ${expectedKey}`;
      if (!valid) {
        console.warn("sepay-webhook: invalid API key");
        return res.status(401).json({ error: "Unauthorized" });
      }
    }

    const payload = req.body || {};
    const content = String(payload.content || payload.description || "");
    const transferType = payload.transferType;
    const transferAmount = Number(payload.transferAmount || 0);

    // Chỉ xử lý tiền vào (in), bỏ qua tiền ra (out)
    if (transferType !== "in") {
      return res.status(200).json({ success: true, ignored: "not an inbound transfer" });
    }

    const match = content.toUpperCase().match(ORDER_CODE_REGEX);
    if (!match) {
      console.warn("sepay-webhook: no order code found in content:", content);
      // Vẫn trả 200 để SePay không retry liên tục — đây không phải lỗi của hệ thống
      return res.status(200).json({ success: true, ignored: "no order code found" });
    }

    const code = match[0].toUpperCase();
    const orderRaw = await redis.get(`order:${code}`);

    if (!orderRaw) {
      console.warn("sepay-webhook: order not found for code:", code);
      return res.status(200).json({ success: true, ignored: "order not found" });
    }

    const order = typeof orderRaw === "string" ? JSON.parse(orderRaw) : orderRaw;

    if (order.status === "paid") {
      // Đã xử lý trước đó (SePay có thể gửi lại do retry) — không xử lý lại
      return res.status(200).json({ success: true, already_paid: true });
    }

    // Đối chiếu số tiền — chấp nhận nếu khách trả đủ hoặc nhiều hơn
    if (transferAmount < order.amount) {
      console.warn("sepay-webhook: amount mismatch", { code, expected: order.amount, got: transferAmount });
      return res.status(200).json({ success: true, ignored: "amount mismatch" });
    }

    order.status = "paid";
    order.paidAt = new Date().toISOString();
    order.transferAmount = transferAmount;
    order.referenceCode = payload.referenceCode || "";

    await redis.set(`order:${code}`, JSON.stringify(order), { ex: 60 * 60 * 24 * 30 });

    // Cập nhật cột "Đã thanh toán" trong Google Sheet — phải await để Vercel không
    // tắt function trước khi request kịp gửi đi.
    await updateGoogleSheetPayment(code);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("sepay-webhook error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}

// Báo cho Google Sheet biết đơn hàng này đã thanh toán.
// Lỗi ở đây không ảnh hưởng tới việc xác nhận thanh toán chính (đã lưu ở Redis rồi).
async function updateGoogleSheetPayment(orderCode) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) return;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "update_payment", orderCode }),
    });
  } catch (err) {
    console.error("updateGoogleSheetPayment error:", err);
  }
}
