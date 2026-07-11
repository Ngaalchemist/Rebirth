# Hướng dẫn kích hoạt thanh toán tự động trên Landing Page

Code đã được sửa xong. Để chạy được thật, bạn cần làm **4 bước tay** dưới đây (không cần code gì thêm, chỉ click trên dashboard).

---

## Bước 1 — Cài Upstash Redis vào project Vercel (lưu trạng thái đơn hàng)

1. Vào [vercel.com/dashboard](https://vercel.com/dashboard) → chọn project `rebirth` (hoặc tên project bạn đã deploy)
2. Vào tab **Storage** → **Create Database** → chọn **Upstash** → **Redis**
3. Đặt tên (vd: `nga-orders`) → **Create**
4. Khi được hỏi "Connect to project", chọn project `rebirth` → **Connect**
5. Vercel sẽ tự động thêm 2 biến môi trường `KV_REST_API_URL` và `KV_REST_API_TOKEN` vào project — bạn không cần làm gì thêm ở bước này.

---

## Bước 2 — Lấy SePay API Key và tạo Webhook

1. Đăng nhập [my.sepay.vn](https://my.sepay.vn)
2. Vào **Tích hợp Webhooks** → **Thêm Webhooks**
3. Điền:
   - **Khi tài khoản ngân hàng là**: chọn tài khoản Maritime Bank (MSB) `03101010918637`
   - **Gọi đến URL**: `https://rebirth.ngaalchemist.com/api/sepay-webhook`
     *(thay đúng domain thật của bạn nếu khác)*
   - **Kiểu chứng thực**: chọn **API Key**
   - SePay sẽ tự sinh ra 1 API Key — **copy lại key này**
4. **Là WebHooks xác thực thanh toán?** → chọn **Có/Yes**
5. Nhấn **Thêm** để hoàn tất

---

## Bước 3 — Dán API Key vào Vercel

1. Vào project Vercel → **Settings** → **Environment Variables**
2. Thêm biến mới:
   - **Name**: `SEPAY_WEBHOOK_API_KEY`
   - **Value**: dán API Key bạn vừa copy ở Bước 2
   - Áp dụng cho: **Production** (và Preview nếu muốn test trước)
3. **Save**

---

## Bước 4 — Deploy lại

Sau khi thêm xong 2 việc trên (storage + API key), Vercel cần **deploy lại** để áp dụng biến môi trường mới:

- Cách đơn giản nhất: vào tab **Deployments** → chọn bản deploy gần nhất → **Redeploy**
- Hoặc: chỉ cần đẩy code này lên GitHub (`git push`), Vercel sẽ tự deploy lại

---

## Cách kiểm tra hoạt động thật

1. Mở `rebirth.ngaalchemist.com`, cuộn xuống phần đăng ký, điền tên/SĐT/email demo
2. Bấm "Đăng ký ngay" → sẽ hiện mã QR + mã đơn hàng (ví dụ `NGAQE6XQJ`)
3. Vào **SePay → Giao dịch → Giả lập giao dịch** (nếu bạn dùng tài khoản Demo) hoặc tự chuyển khoản thật một số tiền nhỏ với đúng nội dung là mã đơn hàng đó
4. Trong vài giây, trang web sẽ tự chuyển sang "Thanh toán thành công 🎉" mà không cần bạn làm gì

---

## Lưu ý quan trọng

- **Nội dung chuyển khoản phải giữ đúng mã đơn hàng liền nhau** (ví dụ `NGAQE6XQJ`). QR đã tự điền sẵn nội dung này — nếu khách dùng app ngân hàng quét QR và chuyển khoản ngay (không sửa nội dung) thì luôn đúng. Nếu khách tự gõ tay và lỡ thêm khoảng trắng vào giữa mã, hệ thống sẽ không nhận diện được — khi đó bạn vẫn cần xử lý tay như trước (kiểm tra SePay dashboard).
- Đơn hàng tự hết hạn sau **24 giờ** nếu không thanh toán (để tránh tích đầy dữ liệu thừa).
- Ảnh QR dùng "Quick Link" công khai của VietQR.io — chạy tốt cho nhu cầu hiện tại. Nếu sau này số lượng đơn lớn, có thể nên đăng ký tài khoản riêng tại `my.vietqr.io` để có QR ổn định hơn (không bắt buộc ngay).
- Trang checkout cũ (`thanhtoan.ngaalchemist.com` / repo `checkout`) **không còn được link tới** từ landing page chính nữa. Bạn có thể giữ nguyên hoặc tắt nó, tuỳ ý — không ảnh hưởng gì đến luồng mới.
