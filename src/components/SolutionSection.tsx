import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { TrustBar } from "./CtaButton";

const steps = [
  {
    range: "Ngày 1 – 2",
    title: "Nhận Diện Vô Thức",
    desc: "Giải mã kịch bản bỏ rơi và niềm tin cốt lõi sai lệch.",
  },
  {
    range: "Ngày 3 – 4",
    title: "Ôm Đứa Trẻ Bên Trong",
    desc: "Hóa giải tự trách, đưa tiềm thức về vùng an toàn.",
  },
  {
    range: "Ngày 5 – 6",
    title: "Thiết Lập Ranh Giới",
    desc: 'Xóa bỏ "Tôi không đủ tốt", tái kiến tạo tự tôn.',
  },
  {
    range: "Ngày 7",
    title: "Ngắt Vòng Lặp",
    desc: "Tái lập bản sắc mới, tự làm bến đỗ vững chãi nhất.",
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="w-full bg-white border border-[#C9A84C]/45 rounded-2xl shadow-[0_8px_28px_rgba(20,7,40,0.10)] p-5 text-center">
      <p className="text-[#B8902F] font-bold text-sm md:text-base tracking-wide mb-1">{step.range}</p>
      <h3 className="font-serif font-extrabold text-gray-900 text-lg md:text-xl mb-2 leading-tight">{step.title}</h3>
      <p className="text-gray-700 text-sm md:text-base font-medium leading-snug">{step.desc}</p>
    </div>
  );
}

export function SolutionSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="solution" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-extrabold text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
            Lộ Trình 7 Ngày Chuyển Hóa
          </h2>
        </motion.div>

        {/* ── DESKTOP horizontal timeline (alternating above / below) ── */}
        <div className="hidden md:grid grid-cols-4 relative mb-6">
          {/* connector line through the nodes */}
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-[#C9A84C]/30 via-[#C9A84C] to-[#C9A84C]/30" />

          {steps.map((step, i) => {
            const above = i % 2 === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: above ? -25 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative flex flex-col items-center h-[380px] px-3"
              >
                <div className="flex-1 flex items-end pb-5 w-full">
                  {above && <StepCard step={step} />}
                </div>

                <div className="relative z-10 w-7 h-7 rounded-full bg-[#C9A84C] border-4 border-white ring-2 ring-[#C9A84C]/40 flex-shrink-0 shadow" />

                <div className="flex-1 flex items-start pt-5 w-full">
                  {!above && <StepCard step={step} />}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── MOBILE vertical stack ── */}
        <div className="md:hidden space-y-4 mb-6 relative pl-6">
          <div className="absolute left-[10px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#C9A84C]/30 via-[#C9A84C] to-[#C9A84C]/30" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <div className="absolute -left-[22px] top-5 w-4 h-4 rounded-full bg-[#C9A84C] border-2 border-white ring-2 ring-[#C9A84C]/40" />
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-solution"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-none font-bold text-base md:text-lg text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.6)] mx-auto"
          >
            <span className="tracking-wide whitespace-nowrap">TÔI MUỐN BẮT ĐẦU HÀNH TRÌNH 7 NGÀY</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <TrustBar />
        </motion.div>
      </div>
    </section>
  );
}
