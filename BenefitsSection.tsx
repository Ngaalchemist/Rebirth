import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

const benefits = [
  {
    num: "01",
    title: "Nhìn rõ vòng lặp",
    desc: "Nhìn rõ vòng lặp cảm xúc mà mình từng gọi nhầm là 'do mình yêu sâu'",
    color: "from-violet-900/60 to-purple-900/40",
    accent: "#A78BFA",
  },
  {
    num: "02",
    title: "Hiểu vì sao dễ bất an",
    desc: "Hiểu vì sao mình dễ bất an, bám víu hoặc overthinking trong tình yêu",
    color: "from-indigo-900/60 to-violet-900/40",
    accent: "#818CF8",
  },
  {
    num: "03",
    title: "Biết cách quay về cơ thể",
    desc: "Biết cách quay về với cơ thể, cảm xúc và sự hiện diện của chính mình",
    color: "from-purple-900/60 to-indigo-900/40",
    accent: "#C4B5FD",
  },
  {
    num: "04",
    title: "Xây lại nền giá trị bản thân",
    desc: "Bắt đầu xây lại một nền giá trị bản thân không còn dựa vào việc ai chọn mình",
    color: "from-fuchsia-900/50 to-purple-900/50",
    accent: "#F0ABFC",
  },
  {
    num: "05",
    title: "Cảm giác an toàn từ bên trong",
    desc: "Bắt đầu xây lại cảm giác an toàn từ bên trong thay vì từ người khác",
    color: "from-violet-900/60 to-fuchsia-900/40",
    accent: "#DDD6FE",
  },
  {
    num: "06",
    title: "Phân biệt tình yêu và nỗi sợ",
    desc: "Cảm nhận rõ hơn đâu là tình yêu, đâu là nỗi sợ không được chọn",
    color: "from-purple-900/60 to-violet-900/40",
    accent: "#C9A84C",
  },
];

export function BenefitsSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#1a0a2e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-violet-900/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E]">
            SAU 7 NGÀY, BẠN SẼ…
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative bg-gradient-to-br ${b.color} border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:scale-[1.02] transition-all group overflow-hidden`}
            >
              {/* Number */}
              <div className="absolute top-4 right-4 text-4xl font-bold opacity-10 font-serif" style={{ color: b.accent }}>
                {b.num}
              </div>
              <div className="relative z-10">
                <div className="w-10 h-1 rounded-full mb-4" style={{ backgroundColor: b.accent }} />
                <h3 className="font-bold font-serif text-lg text-white mb-2 group-hover:text-[#F5D78E] transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <p className="text-gray-400 text-sm italic max-w-2xl mx-auto">
            Không phải để bạn hết đau ngay lập tức. Mà để bạn không còn lạc trong nỗi đau như trước.
          </p>
          <CtaButton
            onClick={() => window.open('https://thanhtoan.ngaalchemist.com', '_blank')}
            className="bg-[#C9A84C] text-[#1a0a2e] hover:bg-[#E8C96A] rounded-xl px-10 py-5"
            data-testid="button-cta-benefits"
          >
            TÔI MUỐN BẮT ĐẦU HÀNH TRÌNH 7 NGÀY
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
