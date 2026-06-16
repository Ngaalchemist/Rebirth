import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, RefreshCw } from "lucide-react";

export function RegistrationSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://thanhtoan.ngaalchemist.com', '_blank');
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
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <ShieldCheck className="w-16 h-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold font-serif text-foreground">Đã nhận thông tin!</h3>
                <p className="text-muted-foreground">Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để hướng dẫn thanh toán và truy cập khóa học.</p>
              </div>
            ) : (
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
                <button
                  type="submit"
                  data-testid="button-submit"
                  className="w-full py-4 rounded-none text-lg md:text-xl font-bold bg-[#C9A84C] text-[#140728] shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:bg-[#E8C96A] hover:shadow-[0_0_35px_rgba(201,168,76,0.6)] transition-all tracking-wide"
                >
                  ĐĂNG KÝ NGAY
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
            )}

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
