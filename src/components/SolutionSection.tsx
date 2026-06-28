import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { TrustBar } from "./CtaButton";
import stage1 from "@/assets/images/stage-1.png";
import stage2 from "@/assets/images/stage-2.png";
import stage3 from "@/assets/images/stage-3.png";
import stage4 from "@/assets/images/stage-4.png";

const steps = [
  {
    number: 1,
    label: "GIAI ĐOẠN 1: NGÀY 1-2",
    title: "Giải Mã Vòng Lặp & Xây Nền An Toàn",
    desc: "Giải mã kịch bản bỏ rơi đang lặp lại và phá băng lo âu hệ thần kinh. Thiết lập trạng thái an toàn vững chãi bên trong cơ thể để sẵn sàng cho hành trình chữa lành.",
    icon: stage1,
    cardPos: "above" as const,
  },
  {
    number: 2,
    label: "GIAI ĐOẠN 2: NGÀY 3-4",
    title: "Chữa Lành Đứa Trẻ – Giải Phóng Tổn Thương",
    desc: 'Hóa giải sự tự trách và giải tỏa cảm xúc dồn nén qua thân thể. Đưa "đứa trẻ bên trong" về vùng an toàn bằng sự thấu cảm của người lớn thông thái.',
    icon: stage2,
    cardPos: "below" as const,
  },
  {
    number: 3,
    label: "GIAI ĐOẠN 3: NGÀY 5-6",
    title: "Định Hình Ranh Giới – Tái Lập Quyền Năng",
    desc: 'Xóa bỏ những niềm tin tiêu cực giới hạn và thiết lập "ranh giới thép" để bảo vệ bản thân. Dịch chuyển vị thế từ nạn nhân sang người làm chủ cuộc đời.',
    icon: stage3,
    cardPos: "above" as const,
  },
  {
    number: 4,
    label: "GIAI ĐOẠN 4: NGÀY 7",
    title: "Nhảy Lượng Tử - Tái Sinh Bản Sắc Mới",
    desc: 'Rũ bỏ lớp mặt nạ cũ kỹ, tái sinh một bản sắc mới đầy nội lực và chính thức trở thành "bến đỗ" trọn vẹn, bình an nhất cho chính mình.',
    icon: stage4,
    cardPos: "below" as const,
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.35)] p-4 md:p-5 text-center border border-[#C9A84C]/30">
      <span className="inline-block bg-[#F5E4A8] border border-[#C9A84C] text-[#7A5A12] font-bold text-[10px] md:text-[11px] tracking-wider px-3 py-1 rounded-full mb-2.5 whitespace-nowrap">
        {step.label}
      </span>
      <h3 className="font-serif font-extrabold text-[#3a2a05] text-base md:text-lg mb-1.5 leading-snug">{step.title}</h3>
      <p className="text-gray-700 text-[13px] md:text-sm leading-relaxed">{step.desc}</p>
    </div>
  );
}

function StationIcon({ src, number }: { src: string; number: number }) {
  return (
    <div className="relative z-20 flex-shrink-0">
      <div className="absolute inset-0 rounded-full bg-[#C9A84C]/30 blur-xl scale-110" />
      <img
        src={src}
        alt=""
        className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-[#E8C96A] shadow-[0_0_30px_rgba(201,168,76,0.55)] block"
      />
      {/* large step-number badge — makes it immediately obvious this is step N of 4 */}
      <div className="absolute top-0 right-0 z-30 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#140728] border-2 border-[#E8C96A] flex items-center justify-center shadow-[0_0_12px_rgba(0,0,0,0.6)]">
        <span className="font-serif font-extrabold text-[#F5D78E] text-xs md:text-sm leading-none">{number}</span>
      </div>
    </div>
  );
}

const TOP_ZONE = 320; // space reserved above the line for "above" cards
const BOTTOM_ZONE = 330; // space reserved below the line for "below" cards
const ICON_GAP = 36; // breathing room between card edge and icon
const BAR_HEIGHT = 14; // thickness of the metallic gold timeline bar

export function SolutionSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="solution" className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-900/25 blur-[110px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[100px]" />
        {/* mystical purple smoke wisps rising from the bottom, like the mockup */}
        <div className="absolute bottom-0 left-[2%] w-[340px] h-[300px] bg-[#9b5fd8]/25 blur-[55px] rounded-full" />
        <div className="absolute bottom-0 left-[18%] w-[220px] h-[260px] bg-[#7c4dff]/20 blur-[50px] rounded-full" />
        <div className="absolute bottom-0 right-[22%] w-[240px] h-[270px] bg-[#9b5fd8]/20 blur-[55px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[320px] h-[300px] bg-[#7c4dff]/25 blur-[60px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#F5D78E] leading-tight tracking-wide whitespace-nowrap">
            LỘ TRÌNH 4 GIAI ĐOẠN CHUYỂN HÓA
          </h2>
          <p className="mt-3 text-[#C9A84C] text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
            4 Giai Đoạn · 7 Ngày Đồng Hành
          </p>
        </motion.div>

        {/* ── DESKTOP: single straight metallic gold timeline arrow spanning full width, 4 icons sitting exactly on it ── */}
        <div className="hidden md:block relative" style={{ height: TOP_ZONE + BOTTOM_ZONE }}>
          {/* the thick metallic gold timeline bar, rendered as a single rightward-pointing arrow (time flowing forward) */}
          <svg
            className="absolute left-0 right-0 w-full z-0"
            style={{ top: TOP_ZONE - 22 }}
            height="44"
            viewBox="0 0 1100 44"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="goldBarGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fdf0c0" />
                <stop offset="18%" stopColor="#E8C96A" />
                <stop offset="45%" stopColor="#C9A84C" />
                <stop offset="70%" stopColor="#9c7a28" />
                <stop offset="100%" stopColor="#6e5414" />
              </linearGradient>
            </defs>
            {/* shaft of the arrow */}
            <rect x="0" y={22 - BAR_HEIGHT / 2} width="1052" height={BAR_HEIGHT} fill="url(#goldBarGrad)" />
            {/* arrow head pointing right — time moving forward */}
            <polygon points="1052,4 1100,22 1052,40" fill="url(#goldBarGrad)" />
            {/* shine highlight along the top edge */}
            <rect x="10" y={22 - BAR_HEIGHT / 2 + 1} width="1030" height="2" fill="rgba(255,246,218,0.7)" />
          </svg>

          <div className="absolute inset-0 grid grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative flex flex-col items-center px-3"
              >
                {/* top zone: card sits at the bottom of this zone, leaving a gap before the line */}
                <div
                  className="w-full flex flex-col justify-end"
                  style={{ height: TOP_ZONE - ICON_GAP }}
                >
                  {step.cardPos === "above" && <StepCard step={step} />}
                </div>

                {/* icon zone: fixed height exactly straddling the line */}
                <div className="w-full flex items-center justify-center" style={{ height: ICON_GAP * 2 }}>
                  <StationIcon src={step.icon} number={step.number} />
                </div>

                {/* bottom zone: card sits at the top of this zone, right after the gap */}
                <div
                  className="w-full flex flex-col justify-start"
                  style={{ height: BOTTOM_ZONE - ICON_GAP }}
                >
                  {step.cardPos === "below" && <StepCard step={step} />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MOBILE vertical stack ── */}
        <div className="md:hidden space-y-5 mb-6 relative pl-7">
          <svg
            className="absolute left-[8px] top-2 z-0"
            width="16"
            height="calc(100% - 16px)"
            viewBox="0 0 16 600"
            preserveAspectRatio="none"
            style={{ height: "calc(100% - 16px)" }}
          >
            <defs>
              <linearGradient id="goldBarGradMobile" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fdf0c0" />
                <stop offset="18%" stopColor="#E8C96A" />
                <stop offset="45%" stopColor="#C9A84C" />
                <stop offset="70%" stopColor="#9c7a28" />
                <stop offset="100%" stopColor="#6e5414" />
              </linearGradient>
            </defs>
            <rect x={8 - 4} y="0" width="8" height="560" fill="url(#goldBarGradMobile)" />
            <polygon points="4,560 12,560 8,600" fill="url(#goldBarGradMobile)" />
          </svg>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <div className="absolute -left-[27px] top-4 z-10">
                <img
                  src={step.icon}
                  alt=""
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#E8C96A] shadow-[0_0_15px_rgba(201,168,76,0.5)] block"
                />
                <div className="absolute -top-1.5 -right-1.5 z-30 w-4 h-4 rounded-full bg-[#140728] border border-[#E8C96A] flex items-center justify-center">
                  <span className="font-serif font-extrabold text-[#F5D78E] text-[9px] leading-none">{step.number}</span>
                </div>
              </div>
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-10"
        >
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-solution"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-none font-bold text-base md:text-lg text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.6)] mx-auto"
          >
            <span className="tracking-wide whitespace-nowrap">TÔI MUỐN BẮT ĐẦU HÀNH TRÌNH NÀY</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
