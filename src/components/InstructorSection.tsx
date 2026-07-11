import { motion } from "framer-motion";
import { ChevronRight, Monitor, Zap, Users, Infinity } from "lucide-react";
import instructorImg from "@/assets/images/instructor-beach.jpg";

const pillars = [
  {
    icon: "🔓",
    title: "Giải mã kịch bản vô thức",
    desc: "Nhìn thấu vì sao nỗi sợ vô giá trị đang âm thầm điều khiển cách bạn yêu, cách bạn lựa chọn và cách bạn cho phép người khác đối xử với mình.",
  },
  {
    icon: "🛡️",
    title: "Thu hồi quyền lực cá nhân",
    desc: "Ngừng phản ứng từ những vết thương cũ, cắt đứt sự phụ thuộc cảm xúc và xây dựng cảm giác an toàn từ bên trong.",
  },
  {
    icon: "🦋",
    title: "Tái lập mối quan hệ với chính mình",
    desc: "Để bạn không còn phải tìm kiếm giá trị bản thân thông qua sự công nhận, sự chú ý hay tình yêu từ người khác.",
  },
];

const ctaBadges = [
  { icon: Monitor, label: "Học online" },
  { icon: Zap, label: "Bắt đầu ngay" },
  { icon: Users, label: "Cộng đồng riêng" },
  { icon: Infinity, label: "Truy cập trọn đời" },
];

export function InstructorSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-[#B0893A] mb-3">
            Cycle Breaker
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-gray-900 tracking-wide">
            Chào bạn, mình là Nga Alchemist
          </h2>
          <p className="mt-4 text-violet-700/90 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Người đồng hành giúp phụ nữ phá vỡ những mô thức vô thức đang lặp lại trong tình yêu, các
            mối quan hệ và cách họ nhìn nhận chính mình.
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl border border-violet-100 mb-12 max-w-md mx-auto"
        >
          <img src={instructorImg} alt="Nga Alchemist" className="w-full object-cover" />
        </motion.div>

        {/* Story — rút gọn, giữ đúng mạch cảm xúc thật nhưng đi thẳng vào trọng tâm */}
        <div className="space-y-5 text-gray-700 leading-[1.9] text-base md:text-lg">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Mình từng là người luôn cố gắng, luôn nhịn, luôn hiểu chuyện — và luôn là người bị bỏ lại.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Năm 2022, sau một cuộc hôn nhân đổ vỡ, mình nhận ra: tất cả những mối quan hệ tan vỡ trong
            đời mình đều có chung một kịch bản. Không phải vì mình gặp sai người liên tục — mà vì mình
            chưa từng chữa lành phần bên trong khiến mình chấp nhận bị đối xử như vậy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif font-semibold text-violet-900 text-xl md:text-2xl leading-snug"
          >
            "Đây không phải là một biến cố ngẫu nhiên. Đây là một vòng lặp."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sau hành trình chữa lành cho chính mình bằng thôi miên trị liệu và làm việc với tiềm thức,
            mình đã đồng hành cùng hơn 500 phụ nữ để phá vỡ mô thức này.{" "}
            <span className="font-semibold text-violet-900">
              "Thoát Vòng Lặp Bị Bỏ Rơi" là chính hệ thống đó — rút gọn còn 7 ngày, để bạn tự học theo tốc độ của mình.
            </span>
          </motion.p>
        </div>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl p-7 md:p-9 bg-gradient-to-br from-[#1a0a2e] to-[#140728] border border-[#C9A84C]/30 shadow-xl"
        >
          <ul className="space-y-7">
            {pillars.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <span className="text-3xl leading-none mt-0.5">{p.icon}</span>
                <div>
                  <h4 className="font-serif font-bold text-[#F5D78E] text-lg md:text-xl mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-gray-100 leading-[1.9] text-base md:text-lg">{p.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-violet-900 font-serif font-bold text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-2">
            Bạn chưa từng thiếu giá trị.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Bạn chỉ đang mang những vết thương khiến mình quên mất giá trị vốn có của bản thân. Nếu bạn
            đã sẵn sàng ngừng tự bỏ rơi chính mình, mình sẽ đồng hành cùng bạn trên hành trình trở về ấy.
          </p>
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-guide"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-none font-bold text-base md:text-lg text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.6)] mx-auto"
          >
            <span className="tracking-wide whitespace-nowrap">TÔI CHỌN NGỪNG TỰ BỎ RƠI CHÍNH MÌNH</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {ctaBadges.map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-sm md:text-base text-violet-700/80 font-medium"
              >
                <b.icon className="w-4 h-4 text-[#B0893A]" />
                {b.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
