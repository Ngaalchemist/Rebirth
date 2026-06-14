import { motion } from "framer-motion";
import { Check, ShieldCheck, Gift, ChevronRight } from "lucide-react";

const includes = [
  "7 bài học theo từng ngày (lộ trình GỐC → NGỌN)",
  "Workbook / bài tập chiêm nghiệm sau mỗi bài",
  "Câu hỏi journaling giúp bạn hiểu pattern của mình",
  "Thư viện audio thực hành làm dịu cảm xúc khi lo sợ bị bỏ rơi",
  "Checklist nhận diện tình yêu lành mạnh và tình yêu gây tổn thương",
  "Kế hoạch 7 ngày quay về với bản thân",
  "Livestream giải đáp thắc mắc hàng tuần",
  "Quyền tham gia cộng đồng Pattern Breakers",
  "Truy cập trọn đời",
  "Kế hoạch duy trì sau khóa",
];

const bonuses = [
  { num: "01", title: "Audio thôi miên khẩn cấp 5 phút", desc: "khi bị ghost / bị im lặng / panic attachment" },
  { num: "02", title: "Sleep hypnosis", desc: "ngủ tái lập trình self-worth" },
  { num: "03", title: "Hypnotic journaling workbook", desc: "viết để hóa giải tầng sâu" },
  { num: "04", title: "Bộ subconscious affirmations", desc: "nghe khi ngủ" },
  { num: "05", title: 'Ritual "Return to Self"', desc: "mỗi sáng 7 phút" },
];

export function PricingSection() {
  const scrollToReg = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-violet-900/20 blur-[130px]" />
      </div>

      {/* SINGLE COLUMN */}
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-serif text-[#F5D78E] mb-4">ƯU ĐÃI ĐẶC BIỆT HÔM NAY</h2>
          <p className="text-gray-300 text-lg md:text-xl">Dành riêng cho 100 học viên đăng ký đầu tiên</p>
        </motion.div>

        {/* MAIN OFFER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#1e0d3e] via-[#1a0a2e] to-[#C9A84C]/5 border-2 border-[#C9A84C]/50 rounded-2xl p-8 md:p-10 shadow-[0_0_70px_rgba(201,168,76,0.18)] mb-8"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="bg-[#C9A84C] text-[#140728] text-xs font-bold px-5 py-1.5 rounded-lg tracking-widest uppercase">
              GIÁ RA MẮT
            </span>
          </div>

          {/* Price */}
          <div className="text-center mb-8 mt-3">
            <p className="text-gray-400 text-base md:text-lg mb-2">Giá gốc khi mở chính thức</p>
            <div className="text-gray-500/60 line-through text-3xl md:text-4xl mb-1">2.000.000đ</div>
            <div className="text-7xl md:text-8xl font-bold text-[#C9A84C] font-serif leading-none">444.000đ</div>
            <p className="text-gray-300 text-sm md:text-base mt-3">Một lần duy nhất · Truy cập trọn đời</p>
          </div>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-7 text-center max-w-md mx-auto">
            Bạn đang nhận giá ra mắt vì đây là giai đoạn đầu mở khóa cho nhóm học viên nền tảng đầu tiên — để tối ưu trải nghiệm học và xây những case study đầu tiên.
          </p>

          {/* Includes */}
          <div className="space-y-2.5">
            {includes.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-lg bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#C9A84C]" />
                </div>
                <span className="text-base md:text-lg text-gray-200 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BONUS / GIFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#C9A84C]/15 to-[#C9A84C]/5 border-2 border-[#C9A84C]/40 rounded-2xl p-8 mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <Gift className="w-10 h-10 text-[#C9A84C] flex-shrink-0" />
            <div>
              <h3 className="font-bold font-serif text-[#F5D78E] text-2xl md:text-3xl mb-0.5">🎁 Quà tặng đặc biệt</h3>
              <p className="text-sm text-gray-300 uppercase tracking-wider">Cho 100 học viên đăng ký đầu tiên</p>
            </div>
          </div>

          <div className="space-y-3">
            {bonuses.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 text-[#C9A84C] text-sm font-bold">
                  {b.num}
                </div>
                <div>
                  <p className="text-base md:text-lg text-gray-100 font-semibold leading-snug">{b.title}</p>
                  {b.desc && <p className="text-sm text-gray-400 mt-0.5">{b.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA — after the gift card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <button
            onClick={scrollToReg}
            data-testid="button-cta-pricing"
            className="group w-full flex items-center justify-center gap-3 py-6 rounded-none font-bold text-lg md:text-2xl text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.4)]"
          >
            <span className="tracking-wide">ĐĂNG KÝ NGAY — CHỈ 444.000Đ</span>
            <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <p className="text-center text-sm md:text-base text-gray-400 mt-4">
            Học online • Truy cập ngay sau thanh toán • Hoàn tiền 7 ngày
          </p>
        </motion.div>

        {/* RISK REVERSAL — refund box below CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border-2 border-[#C9A84C]/30 rounded-2xl p-8 md:p-10 text-center"
        >
          <ShieldCheck className="w-14 h-14 text-[#C9A84C] mx-auto mb-5" />
          <h3 className="font-bold font-serif text-white text-3xl md:text-4xl mb-2">CAM KẾT HOÀN TIỀN 7 NGÀY</h3>
          <p className="text-[#C9A84C] font-semibold text-lg md:text-xl mb-6">Rủi ro gần như bằng 0</p>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              { label: "Thời hạn", val: "Trong vòng 7 ngày kể từ thanh toán thành công." },
              { label: "Điều kiện", val: "Áp dụng cho mọi lý do — không cần giải thích chi tiết." },
              { label: "Cách thực hiện", val: "Gửi email kèm tên và email đăng ký. Xử lý 3–5 ngày làm việc." },
            ].map((row, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5">
                <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-wider mb-2">{row.label}</p>
                <p className="text-gray-300 text-base leading-relaxed">{row.val}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
