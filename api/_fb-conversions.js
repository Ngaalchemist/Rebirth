// api/_fb-conversions.js
// Gửi sự kiện Conversion (server-side) sang Facebook/Meta Conversions API (CAPI).
// Được gọi từ create-order.js với eventName, eventId, customer, customData, req.
//
// CẦN THIẾT LẬP 2 biến môi trường trên Vercel (Settings -> Environment Variables):
//   FB_PIXEL_ID              -> ID Pixel của bạn (ví dụ: 2013568562862791)
//   FB_CONVERSIONS_API_TOKEN -> Access Token lấy trong Meta Events Manager
//                               (Data Sources -> Pixel -> Settings -> Conversions API
//                                -> "Generate access token")
//
// Nếu thiếu 1 trong 2 biến này, hàm sẽ tự bỏ qua (không throw lỗi), để không làm
// crash toàn bộ create-order.js chỉ vì thiếu cấu hình Facebook.

import crypto from "crypto";

const FB_API_VERSION = "v21.0";

function sha256(value) {
  if (!value) return undefined;
  return crypto
    .createHash("sha256")
    .update(String(value).trim().toLowerCase())
    .digest("hex");
}

// Chuẩn hoá số điện thoại VN về dạng quốc tế trước khi hash (Meta yêu cầu
// định dạng E.164 không có dấu "+", ví dụ 0901234567 -> 84901234567)
function normalizePhone(phone) {
  if (!phone) return undefined;
  const digits = String(phone).replace(/\D/g, "");
  if (digits.startsWith("0")) return "84" + digits.slice(1);
  if (digits.startsWith("84")) return digits;
  return digits;
}

export async function sendConversionEvent({
  eventName,
  eventId,
  customer = {},
  customData = {},
  req,
}) {
  const pixelId = process.env.FB_PIXEL_ID;
  const accessToken = process.env.FB_CONVERSIONS_API_TOKEN;

  if (!pixelId || !accessToken) {
    console.warn(
      "sendConversionEvent: thiếu FB_PIXEL_ID hoặc FB_CONVERSIONS_API_TOKEN, bỏ qua gửi sự kiện"
    );
    return;
  }

  try {
    const clientIp =
      (req?.headers?.["x-forwarded-for"] || "").split(",")[0].trim() ||
      req?.socket?.remoteAddress ||
      undefined;
    const userAgent = req?.headers?.["user-agent"];
    const eventSourceUrl = req?.headers?.["referer"] || req?.headers?.["origin"];

    const userData = {
      em: customer.email ? [sha256(customer.email)] : undefined,
      ph: customer.phone ? [sha256(normalizePhone(customer.phone))] : undefined,
      client_ip_address: clientIp,
      client_user_agent: userAgent,
    };

    // Loại bỏ field undefined để payload gọn
    Object.keys(userData).forEach((k) => userData[k] === undefined && delete userData[k]);

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",
          event_source_url: eventSourceUrl,
          user_data: userData,
          custom_data: customData,
        },
      ],
    };

    const url = `https://graph.facebook.com/${FB_API_VERSION}/${pixelId}/events?access_token=${accessToken}`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("sendConversionEvent: Facebook API trả lỗi", res.status, errText);
    }
  } catch (err) {
    // Không throw ra ngoài — lỗi gửi Facebook không được phép làm hỏng việc tạo đơn hàng
    console.error("sendConversionEvent error:", err);
  }
}
