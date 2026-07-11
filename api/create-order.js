import { Redis } from "@upstash/redis";
import { sendConversionEvent } from "./_fb-conversions.js";

// Vercel Marketplace (Upstash) bơm biến môi trường dưới tên KV_REST_API_URL / KV_REST_API_TOKEN.
// Tài khoản Upstash gốc dùng tên UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.
// Hỗ trợ cả hai để không phụ thuộc vào cách bạn cài đặt.
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Thông tin nhận tiền — Maritime Bank (MSB)
// QUAN TRỌNG: MSB yêu cầu nhận tiền qua Tài khoản ảo (VA) để SePay theo dõi được giao dịch,
// không nhận trực tiếp vào số tài khoản gốc. Tiền vẫn về thẳng tài khoản chính như thường,
// VA chỉ là "đường" để SePay nhìn thấy giao dịch.
const BANK_BIN = "970426"; // Mã BIN VietQR của MSB
const ACCOUNT_NO = "96886693015092"; // Số VA cố định do MSB cấp qua SePay
const ACCOUNT_NAME = "NGUYEN THANH NGA";
const AMOUNT = 1990000;
const ORDER_TTL_SECONDS = 60 * 60 * 24; // giữ đơn hàng 24h rồi tự xoá

function generateOrderCode() {
  // Mã ngắn, chỉ chữ + số, dễ đọc trong nội dung chuyển khoản
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "NGA";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, email } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ error: "Thiếu họ tên hoặc số điện thoại" });
    }

    // Tạo mã đơn hàng duy nhất, kiểm tra tránh trùng (rất hiếm nhưng vẫn nên kiểm tra)
    let code = generateOrderCode();
    let attempts = 0;
    while ((await redis.get(`order:${code}`)) && attempts < 5) {
      code = generateOrderCode();
      attempts++;
    }

    const order = {
      code,
      name,
      phone,
      email: email || "",
      amount: AMOUNT,
      status: "pending", // pending | paid
      createdAt: new Date().toISOString(),
    };

    await redis.set(`order:${code}`, JSON.stringify(order), { ex: ORDER_TTL_SECONDS });

    // Ghi dữ liệu khách hàng vào Google Sheet ngay khi điền form xong (chưa cần đợi thanh toán)
    // QUAN TRỌNG: phải "await" — Vercel tắt function ngay sau khi response được trả về,
    // nên nếu không đợi, request gửi sang Google Sheet sẽ bị hủy giữa đường.
    // Lỗi ở bước này không làm hỏng việc tạo đơn hàng (đã try/catch riêng bên trong).
    await logToGoogleSheet({
      name,
      phone,
      email: email || "",
      orderCode: code,
      paid: false,
    });

    // Theo hướng dẫn: ghi nhận Purchase ngay khi khách điền form xong (chưa đợi
    // xác nhận chuyển khoản), để Facebook có đủ dữ liệu Purchase sớm hơn.
    // eventId trùng với sự kiện Pixel cùng tên gửi từ trình duyệt
    // (RegistrationSection.tsx) để Meta khớp, không đếm trùng.
    await sendConversionEvent({
      eventName: "Purchase",
      eventId: `purchase_${code}`,
      customer: { email, phone },
      customData: {
        value: AMOUNT,
        currency: "VND",
        content_name: "Thoát Vòng Lặp Bị Bỏ Rơi - 7 Ngày Chữa Lành",
      },
      req,
    });

    const qrUrl = `https://qr.sepay.vn/img?acc=${ACCOUNT_NO}&bank=MSB&amount=${AMOUNT}&des=${encodeURIComponent(code)}`;

    return res.status(200).json({
      code,
      amount: AMOUNT,
      qrUrl,
      bankName: "MSB - Ngân hàng TMCP Hàng Hải Việt Nam",
      accountNo: ACCOUNT_NO,
      accountName: ACCOUNT_NAME,
    });
  } catch (err) {
    console.error("create-order error:", err);
    return res.status(500).json({ error: "Có lỗi xảy ra, vui lòng thử lại" });
  }
}

// Gửi dữ liệu sang Google Sheet (Apps Script Web App).
// Có await ở nơi gọi để đảm bảo request hoàn tất trước khi function bị Vercel đóng băng.
// Lỗi ở đây được bắt riêng, không làm hỏng việc tạo đơn hàng chính.
async function logToGoogleSheet(data) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) return;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error("logToGoogleSheet error:", err);
  }
}
