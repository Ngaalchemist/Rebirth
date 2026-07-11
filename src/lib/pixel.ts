// src/lib/pixel.ts
// Wrapper gọi Meta (Facebook) Pixel phía trình duyệt (client-side).
// Base code fbq đã được nhúng trong index.html (Meta Pixel Code).
// File này chỉ export hàm tiện ích để gọi fbq('track', ...) an toàn,
// kèm eventID để khớp (dedupe) với sự kiện Conversions API gửi từ server
// (xem create-order.js -> sendConversionEvent, dùng cùng eventId dạng `purchase_${code}`).

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Gửi một sự kiện Pixel (client-side) tới Facebook.
 *
 * @param eventName  Tên sự kiện chuẩn của Meta, ví dụ: "Purchase", "Lead", "PageView"...
 * @param customData Dữ liệu kèm theo sự kiện, ví dụ: { value, currency, content_name }
 * @param eventId    ID trùng với eventId gửi qua Conversions API phía server để Meta
 *                   khớp 2 sự kiện (browser + server), tránh đếm trùng (deduplication).
 */
export function trackPixelEvent(
  eventName: string,
  customData?: Record<string, unknown>,
  eventId?: string
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    // Pixel chưa load (adblock, SSR, hoặc base code chưa chạy xong) -> bỏ qua an toàn
    console.warn(`[pixel] fbq chưa sẵn sàng, bỏ qua sự kiện: ${eventName}`);
    return;
  }

  try {
    if (eventId) {
      // Truyền eventID để Meta dedupe với sự kiện Conversions API cùng eventId
      window.fbq("track", eventName, customData || {}, { eventID: eventId });
    } else {
      window.fbq("track", eventName, customData || {});
    }
  } catch (err) {
    console.error("[pixel] trackPixelEvent error:", err);
  }
}
