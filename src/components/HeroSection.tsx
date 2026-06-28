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

const navLinks = [
  { label: "Lộ trình 7 ngày", target: "solution" },
  { label: "FAQ", target: "faq" },
];

export function HeroSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  const scrollToId = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative bg-[#140728] overflow-hidden pt-16">
      {/* ── NAV BAR (logo · menu · CTA) — sits right under the fixed Eyebrow bar ── */}
      <nav className="relative z-30 border-b border-[#C9A84C]/15 bg-[#140728]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-14">
          <span
            className="font-serif font-bold text-[#F5D78E] text-sm md:text-base tracking-wide"
            style={{ textShadow: "0 1px 6px rgba(20,7,40,0.9)" }}
          >
            Nga Alchemist
          </span>

          <div className="hidden md:flex items-center gap-7 text-xs md:text-sm text-gray-200">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToId(link.target)}
                className="hover:text-[#E8C96A] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={scrollToPricing}
            data-testid="button-nav-cta"
            className="px-5 md:px-6 py-2 text-xs md:text-sm font-bold text-[#140728] rounded-none transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(180deg, #FFE066 0%, #E8C96A 45%, #C9A84C 100%)" }}
          >
            Tham gia ngay
          </button>
        </div>
      </nav>

      {/* ── HERO CONTENT — centered column, small round portrait inline with the first headline line ── */}
      <div className="relative px-5 sm:px-8 py-12 lg:py-16">
        {/* ambient background glow, no more full-bleed photo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-violet-900/30 blur-[120px]" />
          <div className="absolute bottom-0 right-[10%] w-[300px] h-[260px] rounded-full bg-[#C9A84C]/10 blur-[90px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#C9A84C] text-xs lg:text-sm font-semibold tracking-[0.28em] uppercase mb-4"
            style={{ textShadow: "0 1px 6px rgba(20,7,40,0.9)" }}
          >
            Rebirth
          </motion.p>

          {/* Main headline — first line includes the small round portrait inline, like the mockup */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="uppercase text-[#E8C96A] mb-5"
            style={{
              fontFamily: "'Playfair Display SC', serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 4.2vw, 3rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              WebkitTextStroke: "1px #1a0a3a",
              textShadow: "3px 3px 0 #1a0a3a, 6px 6px 16px rgba(0,0,0,0.6)",
            }}
          >
            <span className="inline-flex items-center justify-center gap-3 md:gap-4 flex-wrap">
              <span>7 NGÀY THOÁT KHỎI</span>
              <img
                src={heroBg}
                alt="Nga Alchemist"
                className="inline-block w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#E8C96A] shadow-[0_0_20px_rgba(201,168,76,0.5)] align-middle"
              />
            </span>
            <span className="block mt-1">NỖI SỢ BỊ BỎ RƠI</span>
          </motion.h1>

          {/* Sub-headline */}
          <div className="leading-[1.3] mb-6">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="block font-serif font-bold text-[#F6ECCF]"
              style={{
                fontSize: "clamp(0.95rem, 2.2vw, 1.25rem)",
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
                fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
                textShadow: "2px 2px 0 #1a0a3a, 4px 4px 12px rgba(0,0,0,0.55)",
              }}
            >
              Hãy bắt đầu trở thành người{" "}
              <span
                className="uppercase text-[#E8C96A]"
                style={{
                  fontFamily: "'Playfair Display SC', serif",
                  fontWeight: 700,
                  WebkitTextStroke: "0.5px #1a0a3a",
                }}
              >
                KHÔNG THỂ BỊ BỎ RƠI.
              </span>
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs md:text-sm text-gray-100 leading-relaxed mb-5 max-w-xl mx-auto"
            style={{ textShadow: "0 1px 8px rgba(20,7,40,0.95), 0 0 20px rgba(20,7,40,0.85)" }}
          >
            Nếu bạn luôn cố gắng trở thành người{" "}
            <span className="text-[#FFE066] font-semibold">"hiểu chuyện, nhẫn nhịn và hy sinh"</span> để được yêu thương, đây là hành trình 7 ngày giúp bạn nhận diện gốc rễ của nỗi sợ ấy, xây dựng lại cảm giác an toàn từ bên trong và tìm lại giá trị thật của chính mình.
          </motion.p>

          <ul className="inline-flex flex-col items-start space-y-1.5 mb-6 text-left">
            {checkmarks.map((c, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 + i * 0.1 }}
                className="flex items-start gap-2.5 text-[13px] md:text-sm text-gray-50"
                style={{ textShadow: "0 1px 6px rgba(20,7,40,0.95)" }}
              >
                <span className="text-[#C9A84C] mt-0.5 flex-shrink-0 font-bold">✓</span>
                <span><span className="text-[#E8C96A] font-bold">{c.gold}</span>{c.rest}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex justify-center mb-5">
            <button
              type="button"
              onClick={scrollToPricing}
              data-testid="button-cta-hero"
              className="group inline-flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 rounded-none font-bold text-sm md:text-base text-[#140728] transition-all duration-200 shadow-[0_8px_30px_rgba(201,168,76,0.45)] hover:shadow-[0_16px_50px_rgba(255,224,102,0.75)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.99] border border-[#FFE066]/50"
              style={{
                background: "linear-gradient(180deg, #FFE066 0%, #E8C96A 45%, #C9A84C 100%)",
              }}
            >
              <span className="tracking-wide whitespace-nowrap">TÔI CHỌN NGỪNG TỰ BỎ RƠI CHÍNH MÌNH</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[11px] md:text-xs text-gray-200">
            {trust.map((t, i) => (
              <div key={i} className="flex items-center gap-1.5 whitespace-nowrap flex-shrink-0">
                <t.icon className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
                <span style={{ textShadow: "0 1px 4px rgba(20,7,40,0.95)" }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
