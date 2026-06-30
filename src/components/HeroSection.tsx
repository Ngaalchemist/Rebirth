import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Compass,
  BellOff,
  ShieldCheck,
  Users2,
  Monitor,
  Play,
  Users,
  Infinity as InfinityIcon,
  Clock,
} from "lucide-react";
import heroBg from "@/assets/images/hero-final.png";

const PLAYFAIR_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400&display=swap";

const GOLD = "#E8C96A";

const features = [
  {
    icon: Compass,
    title: "Hiểu rõ vì sao mình luôn kết thúc ở cùng một nỗi đau",
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
      {/* ── FULL-BLEED HERO IMAGE ── */}
      <div className="relative min-h-[600px] md:min-h-[680px] lg:min-h-[760px] flex items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroBg}
            alt="Nga Alchemist"
            className="w-full h-full object-cover object-[68%_center] lg:object-[60%_center]"
          />
          {/* Left fade so the headline column reads clearly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0420] from-5% via-[#0c0420]/85 via-44% to-transparent to-72%" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0420] to-transparent" />
        </motion.div>

        {/* ── LEFT TEXT COLUMN (60% of hero width) ── */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:pl-[10%] lg:pl-[13%] lg:pr-0">
          <div className="w-full md:w-[80%] lg:w-[56%] py-10 lg:py-12 text-left">
            {/* Badge */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs lg:text-sm font-bold tracking-[0.16em] uppercase mb-4"
              style={{ color: GOLD, textShadow: "0 1px 6px rgba(20,7,40,0.9)" }}
            >
              Rebirth - 7 Ngày Thoát Khỏi Nỗi Sợ Bị Bỏ Rơi
            </motion.p>

            {/* Headline — big, bold, white + gold last lines */}
            <h1 className="leading-[1.08] mb-5">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="block font-bold text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                  textShadow: "0 2px 18px rgba(0,0,0,0.6)",
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
                  fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                  textShadow: "0 2px 18px rgba(0,0,0,0.6)",
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
                  fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                  textShadow: "0 2px 18px rgba(0,0,0,0.6)",
                }}
              >
                cuối cùng lại trở nên
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block font-bold"
                style={{
                  color: GOLD,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                  textShadow: "0 2px 18px rgba(0,0,0,0.6)",
                }}
              >
                lạnh nhạt?
              </motion.span>
            </h1>

            {/* Subheadline — "Khóa học online 7 ngày" highlighted gold */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-100 mb-7 max-w-xl"
              style={{
                fontSize: "clamp(0.95rem, 1.7vw, 1.1rem)",
                textShadow: "0 1px 8px rgba(20,7,40,0.85)",
                lineHeight: 1.6,
              }}
            >
              <span className="font-semibold" style={{ color: GOLD }}>
                Khóa học online 7 ngày
              </span>{" "}
              giúp phá vỡ những mô thức cảm xúc khiến bạn liên tục trải qua
              cùng một kết cục trong tình yêu.
            </motion.p>

            {/* Feature row — no boxes, icon centered above text, no dividers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-6 mb-7 max-w-2xl"
            >
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2.5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center border"
                    style={{ borderColor: "rgba(232,201,106,0.45)" }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <p className="text-[12.5px] leading-snug text-gray-100">
                    {f.title}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
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

        {/* ── QUOTE BOX (back near the hands, purple translucent, gold serif) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="hidden lg:block absolute top-[27%] right-0 z-10 w-[136px] p-2.5 rounded-md border"
          style={{
            borderColor: "rgba(232,201,106,0.25)",
            backgroundColor: "rgba(10,5,20,0.4)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          <span
            className="block text-xl leading-none select-none mb-1"
            style={{
              color: GOLD,
              fontWeight: 400,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            “
          </span>
          <p
            className="leading-relaxed"
            style={{
              color: GOLD,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "0.78rem",
            }}
          >
            Khi bạn chữa lành mối quan hệ với chính mình, thế giới bên ngoài
            cũng sẽ khác đi.
          </p>
          <div className="flex items-center justify-between mt-2.5">
            <span
              className="text-[10px] tracking-wide"
              style={{ color: GOLD }}
            >
              - Nga Alchemist
            </span>
            <span
              className="text-xl leading-none select-none"
              style={{
                color: GOLD,
                fontWeight: 400,
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              ”
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
