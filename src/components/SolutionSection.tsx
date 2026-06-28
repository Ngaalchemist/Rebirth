import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { TrustBar } from "./CtaButton";
import stage1 from "@/assets/images/stage-1.png";
import stage2 from "@/assets/images/stage-2.png";
import stage3 from "@/assets/images/stage-3.png";
import stage4 from "@/assets/images/stage-4.png";

const steps = [
  {
    label: "GIAI ĐOẠN 1: NGÀY 1-2",
    title: "Giải Mã Vòng Lặp & Xây Nền An Toàn",
    desc: "Giải mã kịch bản bỏ rơi đang lặp lại và phá băng lo âu hệ thần kinh. Thiết lập trạng thái an toàn vững chãi bên trong cơ thể để sẵn sàng cho hành trình chữa lành.",
    icon: stage1,
    cardPos: "above" as const,
  },
  {
    label: "GIAI ĐOẠN 2: NGÀY 3-4",
    title: "Chữa Lành Đứa Trẻ – Giải Phóng Tổn Thương",
    desc: 'Hóa giải sự tự trách và giải tỏa cảm xúc dồn nén qua thân thể. Đưa "đứa trẻ bên trong" về vùng an toàn bằng sự thấu cảm của người lớn thông thái.',
    icon: stage2,
    cardPos: "below" as const,
  },
  {
    label: "GIAI ĐOẠN 3: NGÀY 5-6",
    title: "Định Hình Ranh Giới – Tái Lập Quyền Năng",
    desc: 'Xóa bỏ những niềm tin tiêu cực giới hạn và thiết lập "ranh giới thép" để bảo vệ bản thân. Dịch chuyển vị thế từ nạn nhân sang người làm chủ cuộc đời.',
    icon: stage3,
    cardPos: "above" as const,
  },
  {
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

function StationIcon({ src }: { src: string }) {
  return (
    <div className="relative z-20 flex-shrink-0">
      <div className="absolute inset-0 rounded-full bg-[#C9A84C]/30 blur-xl scale-110" />
      <img
        src={src}
        alt=""
        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[#E8C96A] shadow-[0_0_30px_rgba(201,168,76,0.55)] block"
      />
    </div>
  );
}

const TOP_ZONE = 420; // space reserved above the line for "above" cards
const BOTTOM_ZONE = 420; // space reserved below the line for "below" cards
const ICON_GAP = 40; // breathing room between card edge and icon
const BAR_HEIGHT = 14; // thickness of the metallic gold timeline bar

export function SolutionSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="solution" className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-900/25 blur-[110px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[260px] bg-[#7c4dff]/10 blur-[60px] rounded-full" />
        <div className="absolute bottom-0 right-[10%] w-[260px] h-[220px] bg-[#7c4dff]/10 blur-[60px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-28"
        >
          <h2 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#F5D78E] leading-tight tracking-wide whitespace-nowrap">
            LỘ TRÌNH 4 GIAI ĐOẠN CHUYỂN HÓA
          </h2>
        </motion.div>

        {/* ── DESKTOP: single straight metallic gold bar spanning full width, 4 icons sitting exactly on it ── */}
        <div className="hidden md:block relative" style={{ height: TOP_ZONE + BOTTOM_ZONE }}>
          {/* the thick metallic gold timeline bar — layered highlight/shadow for a 3D rod look */}
          <div
            className="absolute left-0 right-0 z-0 rounded-full"
            style={{
              top: TOP_ZONE - BAR_HEIGHT / 2,
              height: BAR_HEIGHT,
              background:
                "linear-gradient(to bottom, #fdf0c0 0%, #E8C96A 18%, #C9A84C 45%, #9c7a28 70%, #6e5414 100%)",
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.5), 0 0 18px rgba(201,168,76,0.5), inset 0 1px 1px rgba(255,255,255,0.6)",
            }}
          />
          {/* thin bright highlight line along the top edge of the bar for extra shine */}
          <div
            className="absolute left-[1%] right-[1%] z-0 rounded-full opacity-70"
            style={{
              top: TOP_ZONE - BAR_HEIGHT / 2 + 1,
              height: 2,
              background: "linear-gradient(to right, transparent, #fff6da, transparent)",
            }}
          />

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
                  <StationIcon src={step.icon} />
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
        <div className="md:hidden space-y-5 mb-12 relative pl-7">
          <div
            className="absolute left-[12px] top-2 bottom-2 w-[8px] rounded-full"
            style={{
              background:
                "linear-gradient(to right, #fdf0c0 0%, #E8C96A 18%, #C9A84C 45%, #9c7a28 70%, #6e5414 100%)",
              boxShadow: "0 0 12px rgba(201,168,76,0.5), inset 1px 0 1px rgba(255,255,255,0.5)",
            }}
          />
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
              </div>
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 md:mt-24"
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
