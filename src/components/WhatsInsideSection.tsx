import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { TrustBar } from "./CtaButton";

const core = [
  {
    num: "01",
    title: "7 Bài học chuyên sâu theo từng ngày",
    desc: "Lộ trình video bài giảng đi thẳng vào tầng tiềm thức để bẻ gãy kịch bản tổn thương cũ.",
  },
  {
    num: "02",
    title: "Workbook / Bài tập chiêm nghiệm sau mỗi ngày",
    desc: "Công cụ rèn luyện giúp bạn tự đối thoại với chính mình để thấu suốt vấn đề ngay sau khi học.",
  },
  {
    num: "03",
    title: "Bộ câu hỏi Journaling (Viết lách chữa lành)",
    desc: 'Chỉ dẫn từng bước giúp bạn tự nhìn rõ và bóc tách "pattern" (mô thức) bỏ rơi đang âm thầm điều khiển mình.',
  },
  {
    num: "04",
    title: "Kế hoạch 7 ngày quay về với bản thân",
    desc: "Bản thiết kế hành động rõ ràng cho từng giờ, từng ngày để bạn neo giữ sự bình an tự thân.",
  },
  {
    num: "05",
    title: "Kế hoạch duy trì sau khóa học",
    desc: "Lộ trình dài hạn giúp bạn vững vàng tự đi trên đôi chân của mình, không bị lung lay hay ngã gục trước các cơn bão cảm xúc sau này.",
  },
];

export function WhatsInsideSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-900/20 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-5 leading-tight">
            BẠN SẼ NHẬN ĐƯỢC GÌ KHI ĐỒNG HÀNH CÙNG NGA ALCHEMIST?
          </h2>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Đây không phải là khóa học lý thuyết suông. Đây là một hệ thống chuyển hóa thực chiến được thiết kế để bạn hành động và thay đổi ngay lập tức.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-lg md:text-xl font-bold tracking-wide mb-6 text-center"
        >
          📦 HÀNH TRÌNH CHUYỂN HÓA CỐT LÕI:
        </motion.p>

        <div className="space-y-4 mb-10">
          {core.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-5 bg-white/5 border border-[#C9A84C]/25 rounded-2xl p-6 hover:border-[#C9A84C]/55 hover:bg-white/[0.07] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center flex-shrink-0 text-[#C9A84C] font-bold font-serif text-lg">
                {c.num}
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#F5D78E] text-xl md:text-2xl mb-1.5">{c.title}</h3>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-whatsinside"
            className="group inline-flex items-center justify-center gap-2 sm:gap-4 px-5 sm:px-8 py-4 md:py-5 rounded-none font-bold text-[13px] sm:text-base md:text-lg text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.4)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.65)] w-full sm:w-auto mx-auto"
          >
            <span className="tracking-normal sm:tracking-wide whitespace-nowrap">TÔI MUỐN BẮT ĐẦU KHÓA HỌC NÀY</span>
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
