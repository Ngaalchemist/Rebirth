import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { code } = req.query;
    if (!code) {
      return res.status(400).json({ error: "Thiếu mã đơn hàng" });
    }

    const orderRaw = await redis.get(`order:${String(code).toUpperCase()}`);
    if (!orderRaw) {
      return res.status(404).json({ error: "Không tìm thấy đơn hàng" });
    }

    const order = typeof orderRaw === "string" ? JSON.parse(orderRaw) : orderRaw;

    return res.status(200).json({
      code: order.code,
      status: order.status,
      amount: order.amount,
    });
  } catch (err) {
    console.error("check-order error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}
