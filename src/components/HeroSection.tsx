import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Sparkles,
  Compass,
  BellOff,
  ShieldCheck,
  Users2,
  Monitor,
  Play,
  Users,
  Infinity as InfinityIcon,
  Clock,
  Quote,
} from "lucide-react";
import heroBg from "@/assets/images/hero-final.png";

const PLAYFAIR_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400&display=swap";

const GOLD = "#E8C96A";

const navLinks = [
  { label: "Chương trình", href: "#program" },
  { label: "Cộng đồng", href: "#community" },
  { label: "Kết quả học viên", href: "#results" },
  { label: "Về Rebirth", href: "#about" },
];

const features = [
  {
    icon: Compass,
    title: "Hiểu rõ vì sao mình luôn kết thúc ở cùng một nơi",
  },
  {
    icon: BellOff,
    title: "Không còn hoang mang khi ai đó trở nên lạnh nhạt",
  },
  {
    icon: ShieldCheck,
    title: "Lấy lại sự bình an, tự tin và quyền lựa chọn trong tình yêu",
  },
  {
    icon: Users2,
    title: "Cộng đồng riêng đồng hành và hỗ trợ 24/7",
  },
];

const trust = [
  { icon: Monitor, label: "Học online" },
  { icon: Play, label: "Bắt đầu ngay" },
  { icon: Users, label: "Cộng đồng riêng" },
  { icon: InfinityIcon, label: "Truy cập trọn đời" },
  { icon: Clock, label: "Hoàn tiền 7 ngày" },
];

export function HeroSection() {
  useEffect(() => {
    if (document.querySelector(`link[href="${PLAYFAIR_FONT_URL}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = PLAYFAIR_FONT_URL;
    document.head.appendChild(link);
  }, []);

  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative bg-[#0c0420] overflow-hidden">
      {/* ── NAV BAR ── */}
      <div className="relative z-20 flex items-center justify-between px-5 sm:px-8 lg:px-12 py-5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" style={{ color: GOLD }} />
          <span
            className="text-white font-semibold tracking-[0.25em] text-sm md:text-base"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            REBIRTH
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-200 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={scrollToPricing}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-[#140728] rounded-sm hover:-translate-y-0.5 transition-transform"
          style={{ background: GOLD }}
        >
          ĐĂNG KÝ NGAY
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── FULL-BLEED HERO IMAGE ── */}
      <div className="relative min-h-[560px] md:min-h-[640px] lg:min-h-[700px] flex items-center">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0420] from-5% via-[#0c0420]/85 via-48% to-transparent to-75%" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0420] to-transparent" />
        </motion.div>

        {/* ── LEFT TEXT COLUMN ── */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:pl-[5%] lg:pl-[6%] lg:pr-0">
          <div className="w-full md:w-[78%] lg:w-[58%] py-8 lg:py-10 text-left">
            {/* Badge */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white text-xs lg:text-sm font-bold tracking-[0.18em] uppercase mb-3"
              style={{ textShadow: "0 1px 6px rgba(20,7,40,0.9)" }}
            >
              7 Ngày Thoát Khỏi Vòng Lặp
            </motion.p>

            {/* Headline — white, last line gold */}
            <h1 className="leading-[1.12] mb-4">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="block font-bold text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)",
                  textShadow: "0 2px 16px rgba(0,0,0,0.55)",
                }}
              >
                Tại sao những người
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="block font-bold text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)",
                  textShadow: "0 2px 16px rgba(0,0,0,0.55)",
                }}
              >
                từng rất yêu bạn...
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="block font-bold"
                style={{
                  color: GOLD,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)",
                  textShadow: "0 2px 16px rgba(0,0,0,0.55)",
                }}
              >
                cuối cùng lại trở nên lạnh nhạt?
              </motion.span>
            </h1>

            {/* Subheadline — white */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-gray-100 mb-6 max-w-xl"
              style={{
                fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                textShadow: "0 1px 8px rgba(20,7,40,0.85)",
                lineHeight: 1.6,
              }}
            >
              Khóa học online 7 ngày giúp phá vỡ những mô thức cảm xúc khiến
              bạn liên tục trải qua cùng một kết cục trong tình yêu.
            </motion.p>

            {/* Feature row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 border border-white/15 mb-6 max-w-2xl rounded-sm overflow-hidden"
            >
              {features.map((f, i) => (
                <div key={i} className="bg-[#140728]/70 p-3 flex flex-col gap-2">
                  <f.icon className="w-5 h-5" style={{ color: GOLD }} />
                  <p className="text-[11px] leading-snug text-gray-100">
                    {f.title}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              type="button"
              onClick={scrollToPricing}
              data-testid="button-cta-hero"
              className="group w-full max-w-2xl flex items-center justify-center gap-3 px-7 py-4 md:py-5 rounded-sm font-bold text-base md:text-lg text-[#140728] transition-all duration-200 shadow-[0_8px_30px_rgba(232,201,106,0.4)] hover:shadow-[0_16px_50px_rgba(232,201,106,0.6)] hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]"
              style={{
                background: `linear-gradient(135deg, ${GOLD} 0%, #F2DFA0 50%, ${GOLD} 100%)`,
              }}
            >
              <span className="tracking-wide">BẮT ĐẦU HÀNH TRÌNH 7 NGÀY</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </motion.button>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 text-xs md:text-sm text-gray-200">
              {trust.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                  <t.icon className="w-3.5 h-3.5" style={{ color: GOLD }} />
                  <span style={{ textShadow: "0 1px 4px rgba(20,7,40,0.95)" }}>
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── QUOTE CARD (bottom right, floating on portrait) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden lg:block absolute bottom-10 right-8 xl:right-14 z-10 w-64 p-5 rounded-md border border-white/15 bg-[#140728]/70 backdrop-blur-sm"
        >
          <Quote className="w-5 h-5 mb-2" style={{ color: GOLD }} />
          <p className="text-sm text-gray-100 leading-relaxed italic">
            Khi bạn chữa lành mối quan hệ với chính mình, thế giới bên ngoài
            cũng sẽ khác đi.
          </p>
          <div className="mt-3 text-right">
            <span style={{ color: GOLD }}>✺</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
