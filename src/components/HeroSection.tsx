import { motion } from "framer-motion";
import { ChevronRight, Monitor, Play, Users, Infinity as InfinityIcon, Clock } from "lucide-react";
import heroBg from "@/assets/images/hero-final.png";

const checkmarks = [
  { gold: "Ngừng kiệt sức", rest: " vì phải nỗ lực để được ở lại." },
  { gold: "Chấm dứt sự nhục nhã", rest: " khi phải cầu xin sự chú ý từ người khác." },
  { gold: "Xây dựng cảm giác đủ đầy", rest: " và vững vàng từ bên trong." },
];

const trust = [
  { icon: Monitor, label: "Học online" },
  { icon: Play, label: "Bắt đầu ngay" },
  { icon: Users, label: "Cộng đồng riêng" },
  { icon: InfinityIcon, label: "Truy cập trọn đời" },
  { icon: Clock, label: "Hoàn tiền 7 ngày" },
];

export function HeroSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative bg-[#140728] overflow-hidden">
      {/* ── FULL-BLEED HERO IMAGE (portrait baked into right side) ── */}
      <div className="relative min-h-[560px] md:min-h-[640px] lg:min-h-[720px] flex items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroBg}
            alt="Nga Alchemist"
            className="w-full h-full object-cover object-[80%_center] lg:object-center"
          />
          {/* Left fade so the headline column reads clearly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#140728] from-5% via-[#140728]/80 via-50% to-transparent to-78%" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#140728] to-transparent" />
        </motion.div>

        {/* ── LEFT TEXT COLUMN (~60%) ── */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:pl-[10%] lg:pl-[16%] lg:pr-0">
          <div className="w-full md:w-[60%] lg:w-[60%] py-10 lg:py-14 text-left">
            {/* Brand eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[#C9A84C] text-xs lg:text-sm font-semibold tracking-[0.28em] uppercase mb-3"
              style={{ textShadow: "0 1px 6px rgba(20,7,40,0.9)" }}
            >
              Rebirth
            </motion.p>

            {/* Main headline — biggest, using the same emphasis treatment the old "KHÔNG THỂ BỊ BỎ RƠI" had */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="uppercase text-[#E8C96A] mb-5 lg:mb-7"
              style={{
                fontFamily: "'Playfair Display SC', serif",
                fontWeight: 700,
                fontSize: "clamp(2.16rem, 8.37vw, 6.35rem)",
                letterSpacing: "-0.015em",
                lineHeight: 1.08,
                WebkitTextStroke: "1px #1a0a3a",
                textShadow: "3px 3px 0 #1a0a3a, 6px 6px 16px rgba(0,0,0,0.6)",
              }}
            >
              7 NGÀY THOÁT KHỎI<br />NỖI SỢ BỊ BỎ RƠI
            </motion.h1>

            {/* Sub-headline — smaller than the main headline now */}
            <div className="leading-[1.2] mb-8 lg:mb-12">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="block font-serif font-bold text-[#F6ECCF]"
                style={{
                  fontSize: "clamp(1.05rem, 2.9vw, 1.6rem)",
                  textShadow: "2px 2px 0 #1a0a3a, 4px 4px 12px rgba(0,0,0,0.55)",
                }}
              >
                Đừng nỗ lực để được yêu.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block font-serif font-bold text-[#F6ECCF] mt-1"
                style={{
                  fontSize: "clamp(1rem, 2.7vw, 1.5rem)",
                  textShadow: "2px 2px 0 #1a0a3a, 4px 4px 12px rgba(0,0,0,0.55)",
                }}
              >
                Hãy bắt đầu trở thành người
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="block uppercase mt-2 text-[#E8C96A]"
                style={{
                  fontFamily: "'Playfair Display SC', serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.15rem, 3.3vw, 1.95rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  WebkitTextStroke: "0.6px #1a0a3a",
                  textShadow: "2px 2px 0 #1a0a3a, 4px 4px 12px rgba(0,0,0,0.55)",
                }}
              >
                KHÔNG THỂ BỊ BỎ RƠI.
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xs md:text-sm text-gray-100 leading-relaxed mb-5"
              style={{ textShadow: "0 1px 8px rgba(20,7,40,0.95), 0 0 20px rgba(20,7,40,0.85)", minWidth: 0 }}
            >
              Nếu bạn luôn cố gắng trở thành người{" "}
              <span className="text-[#FFE066] font-semibold">"hiểu chuyện, nhẫn nhịn và hy sinh"</span> để được yêu thương, đây là hành trình 7 ngày giúp bạn nhận diện gốc rễ của nỗi sợ ấy, xây dựng lại cảm giác an toàn từ bên trong và tìm lại giá trị thật của chính mình.
            </motion.p>

            <ul className="space-y-2 mb-6">
              {checkmarks.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm md:text-base text-gray-50"
                  style={{ textShadow: "0 1px 6px rgba(20,7,40,0.95)" }}
                >
                  <span className="text-[#C9A84C] mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span><span className="text-[#E8C96A] font-bold">{c.gold}</span>{c.rest}</span>
                </motion.li>
              ))}
            </ul>

            <button
              type="button"
              onClick={scrollToPricing}
              data-testid="button-cta-hero"
              className="group flex w-full items-center justify-center gap-3 px-7 md:px-9 py-4 md:py-5 rounded-none font-bold text-base md:text-lg text-[#140728] transition-all duration-200 shadow-[0_8px_30px_rgba(201,168,76,0.45)] hover:shadow-[0_16px_50px_rgba(255,224,102,0.75)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.99] border border-[#FFE066]/50"
              style={{
                background: "linear-gradient(180deg, #FFE066 0%, #E8C96A 45%, #C9A84C 100%)",
              }}
            >
              <span className="tracking-wide text-center sm:whitespace-nowrap">TÔI CHỌN NGỪNG TỰ BỎ RƠI CHÍNH MÌNH</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>

            <div className="flex flex-wrap items-center gap-x-3 lg:gap-x-4 gap-y-2 mt-6 text-xs md:text-sm text-gray-200">
              {trust.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 whitespace-nowrap flex-shrink-0">
                  <t.icon className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
                  <span style={{ textShadow: "0 1px 4px rgba(20,7,40,0.95)" }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
