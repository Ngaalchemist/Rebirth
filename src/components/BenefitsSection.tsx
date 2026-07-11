import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

const abilities = [
  {
    num: "01",
    title: "Gọi tên trigger ngay khi nó xảy ra",
    desc: "Biết chính xác điều gì vừa kích hoạt phản ứng bất an trong mình — không phải \"cảm thấy hoang mang chung chung\", mà xác định được đúng khoảnh khắc, đúng nguyên nhân. Thiếu năng lực này, bạn sẽ mãi phản ứng theo bản năng và tự trách sau khi mọi chuyện đã xảy ra.",
    accent: "#A78BFA",
  },
  {
    num: "02",
    title: "Điều hòa hệ thần kinh trong vài phút",
    desc: "Có công cụ cụ thể (hơi thở, grounding, orienting) để đưa cơ thể ra khỏi trạng thái báo động, thay vì để cảm xúc cuốn đi hàng giờ hoặc hàng ngày. Thiếu kỹ năng này, mọi kiến thức tâm lý học chỉ nằm trên giấy — không giúp được gì lúc 11 giờ đêm khi tin nhắn chưa được trả lời.",
    accent: "#818CF8",
  },
  {
    num: "03",
    title: "Phân biệt niềm tin lõi và sự thật",
    desc: "Nhận ra khi nào mình đang phản ứng với câu chuyện nội tâm cũ (\"mình không đủ tốt\") thay vì với thực tế trước mắt. Thiếu khả năng này, bạn sẽ tiếp tục hạ thấp tiêu chuẩn của mình để \"xứng đáng\" được yêu.",
    accent: "#C4B5FD",
  },
  {
    num: "04",
    title: "Ranh giới được neo bằng giá trị, không phải nỗi sợ",
    desc: "Biết rõ điều gì mình không còn chấp nhận, và có thể giữ ranh giới đó ngay cả khi đối phương không vui. Thiếu điều này, mọi ranh giới đặt ra chỉ tồn tại tới lần dỗi hờn tiếp theo của đối phương.",
    accent: "#F0ABFC",
  },
];

export function BenefitsSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#1a0a2e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-violet-900/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-4">
            4 NĂNG LỰC QUYẾT ĐỊNH BẠN CÓ THOÁT ĐƯỢC VÒNG LẶP HAY KHÔNG
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            4 điều mà phụ nữ thoát được vòng lặp bị bỏ rơi đều có — mà việc "chỉ đọc thêm sách" không bao giờ cho bạn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mt-10 mb-12">
          {abilities.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-white/25 hover:-translate-y-1 transition-all group overflow-hidden"
            >
              <div className="absolute top-4 right-5 text-5xl font-bold opacity-10 font-serif" style={{ color: b.accent }}>
                {b.num}
              </div>
              <div className="relative z-10">
                <div className="w-10 h-1 rounded-full mb-4" style={{ backgroundColor: b.accent }} />
                <h3 className="font-bold font-serif text-lg md:text-xl text-white mb-2.5 group-hover:text-[#F5D78E] transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A84C] text-[#1a0a2e] hover:bg-[#E8C96A] rounded-xl px-10 py-5" data-testid="button-cta-benefits">
            TÔI MUỐN CÓ ĐỦ 4 NĂNG LỰC NÀY — CHỈ 1.990.000Đ
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
