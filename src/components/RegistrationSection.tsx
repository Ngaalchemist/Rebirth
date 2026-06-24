import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, RefreshCw, Loader2, CheckCircle2, Copy, Check } from "lucide-react";

type Step = "form" | "loading" | "qr" | "paid" | "error";

interface OrderInfo {
  code: string;
  amount: number;
  qrUrl: string;
  bankName: string;
  accountNo: string;
  accountName: string;
}

export function RegistrationSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [step, setStep] = useState<Step>("form");
  const [order, setOrder] = useState<OrderInfo | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Không tạo được đơn hàng");
      }

      const data: OrderInfo = await res.json();
      setOrder(data);
      setStep("qr");

      pollRef.current = setInterval(async () => {
        try {
          const checkRes = await fetch(`/api/check-order?code=${data.code}`);
          if (!checkRes.ok) return;
          const checkData = await checkRes.json();
          if (checkData.status === "paid") {
            if (pollRef.current) clearInterval(pollRef.current);
            setStep("paid");
          }
        } catch {
          // bỏ qua lỗi tạm thời của 1 lần poll, sẽ thử lại ở lần kế tiếp
        }
      }, 3000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Có lỗi xảy ra, vui lòng thử lại");
      setStep("error");
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="registration" className="py-20 bg-card/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Giữ chỗ ngay hôm nay
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Điền thông tin để bắt đầu hành trình 7 ngày của bạn
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(201,168,76,0.1)]"
          >
            <AnimatePresence mode="wait">
              {step === "paid" && (
                <motion.div
                  key="paid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-10 space-y-4"
                  data-testid="status-paid"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold font-serif text-foreground">Thanh toán thành công! 🎉</h3>
                  <p className="text-muted-foreground">
                    Cảm ơn bạn đã đăng ký. Nga Alchemist sẽ gửi tài khoản học và bộ quà tặng đến số điện thoại / email của bạn trong vòng 24 giờ.
                  </p>
                  <p className="text-sm text-muted-foreground">Mã đơn hàng: <span className="font-mono text-foreground">{order?.code}</span></p>
                </motion.div>
              )}

              {step === "qr" && order && (
                <motion.div
                  key="qr"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-5"
                  data-testid="status-qr"
                >
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mb-1">Quét mã QR để thanh toán</h3>
                    <p className="text-sm text-muted-foreground">Hệ thống sẽ tự động xác nhận ngay khi nhận được chuyển khoản</p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 mx-auto max-w-xs">
                    <img src={order.qrUrl} alt="QR thanh toán" className="w-full h-auto rounded-lg" />
                  </div>

                  <div className="space-y-2.5 text-sm md:text-base bg-background/50 rounded-xl p-4 border border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Ngân hàng</span>
                      <span className="font-bold text-foreground text-right">{order.bankName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Chủ tài khoản</span>
                      <span className="font-bold text-foreground">{order.accountName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Số tài khoản</span>
                      <span className="font-mono font-bold text-foreground">{order.accountNo}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Số tiền</span>
                      <span className="font-bold text-primary text-lg">{order.amount.toLocaleString("vi-VN")}đ</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-muted-foreground shrink-0">Nội dung CK</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(order.code)}
                        data-testid="button-copy-code"
                        className="font-mono font-bold text-foreground bg-primary/10 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-primary/20 transition-colors"
                      >
                        {order.code}
                        {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    ⚠️ Vui lòng giữ đúng nội dung chuyển khoản <span className="font-mono font-semibold">{order.code}</span> để hệ thống tự động ghi nhận
                  </p>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang chờ thanh toán...</span>
                  </div>
                </motion.div>
              )}

              {(step === "form" || step === "loading" || step === "error") && (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-base font-medium text-foreground mb-2">Họ và tên</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Nhập họ và tên của bạn"
                        data-testid="input-name"
                        className="w-full px-4 py-3.5 text-base md:text-lg rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="email@example.com"
                        data-testid="input-email"
                        className="w-full px-4 py-3.5 text-base md:text-lg rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium text-foreground mb-2">Số điện thoại</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="0901 234 567"
                        data-testid="input-phone"
                        className="w-full px-4 py-3.5 text-base md:text-lg rounded-xl border border-border bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                      />
                    </div>

                    {step === "error" && (
                      <p className="text-sm text-red-400 text-center" data-testid="text-error">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={step === "loading"}
                      data-testid="button-submit"
                      className="w-full py-4 rounded-none text-lg md:text-xl font-bold bg-[#C9A84C] text-[#140728] shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:bg-[#E8C96A] hover:shadow-[0_0_35px_rgba(201,168,76,0.6)] transition-all tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {step === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          ĐANG TẠO ĐƠN HÀNG...
                        </>
                      ) : (
                        "ĐĂNG KÝ NGAY"
                      )}
                    </button>

                    <div className="relative py-1">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border/40" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-card px-4 text-xs text-muted-foreground uppercase tracking-wider">hoặc</span>
                      </div>
                    </div>

                    <a
                      href="https://m.me/ngaalchemist"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-facebook-dm"
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-none text-base font-bold bg-[#1877F2] text-white hover:bg-[#0f63d6] transition-all"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.145 2 11.26c0 2.913 1.454 5.512 3.726 7.215V22l3.404-1.869c.908.252 1.871.388 2.87.388 5.523 0 10-4.145 10-9.259C22 6.145 17.523 2 12 2zm1.008 12.461l-2.546-2.717-4.97 2.717 5.467-5.803 2.608 2.717 4.907-2.717-5.466 5.803z" />
                      </svg>
                      NHẮN TIN CHO NGA QUA FACEBOOK
                    </a>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border/30">
              {[
                { icon: ShieldCheck, label: "Thanh toán bảo mật" },
                { icon: Zap, label: "Truy cập ngay" },
                { icon: HeartHandshake, label: "Hỗ trợ khi cần" },
                { icon: RefreshCw, label: "Hoàn tiền 7 ngày" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1 text-center">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
