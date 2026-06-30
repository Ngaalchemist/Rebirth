import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Monitor, Play, Users, Infinity as InfinityIcon, Clock } from "lucide-react";
import heroBg from "@/assets/images/hero-final.png";

const PLAYFAIR_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400&display=swap";

const checkmarks = [
  { gold: "Hiểu rõ vì sao", rest: " mình luôn kết thúc ở cùng một nỗi đau." },
  { gold: "Không còn hoảng loạn", rest: " khi ai đó trở nên lạnh nhạt hoặc thay đổi." },
  { gold: "Lấy lại sự bình an, tự tin", rest: " và quyền lựa chọn trong tình yêu." },
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
          <div className="w-full md:w-[76%] lg:w-[66%] py-10 lg:py-14 text-left">
            {/* Brand eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[#E8C96A] text-xs lg:text-sm font-semibold tracking-[0.28em] uppercase mb-4"
              style={{ textShadow: "0 1px 6px rgba(20,7,40,0.9)" }}
            >
              Rebirth
            </motion.p>

            {/* Headline — left aligned, extends across toward the portrait */}
            <h1 className="leading-[1.08] mb-3 lg:mb-4 w-full md:w-[120%] lg:w-[145%]">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="block font-bold text-[#B8902E] whitespace-nowrap"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.4rem, 3.6vw, 2.9rem)",
                  textShadow: "3px 3px 0 #1a0a3a, 6px 6px 18px rgba(0,0,0,0.6)",
                }}
              >
                Tại sao những người từng rất yêu bạn...
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block font-bold text-[#B8902E] mt-2 whitespace-nowrap"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.4rem, 3.6vw, 2.9rem)",
                  textShadow: "3px 3px 0 #1a0a3a, 6px 6px 18px rgba(0,0,0,0.6)",
                }}
              >
                cuối cùng lại trở nên lạnh nhạt?
              </motion.span>
            </h1>

            {/* Highlight — subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="font-bold text-[#F2DFA0] mb-5 lg:mb-6 max-w-xl"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.1rem, 2.4vw, 1.45rem)",
                textShadow: "3px 3px 0 #1a0a3a, 6px 6px 18px rgba(0,0,0,0.6)",
                lineHeight: 1.35,
              }}
            >
              Khóa học online 7 ngày giúp phá vỡ những mô thức cảm xúc
              <br />
              khiến bạn liên tục trải qua cùng một kết cục trong tình yêu.
            </motion.p>

            {/* Reveal — part 1 */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm md:text-base font-bold text-gray-50 mb-3 max-w-xl"
              style={{ textShadow: "0 1px 6px rgba(20,7,40,0.95)" }}
            >
              Sự thật là: Không phải vì bạn chưa đủ tốt.
            </motion.p>

            {/* Reveal — part 2 */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xs md:text-sm text-gray-100 leading-relaxed mb-6 max-w-xl"
              style={{ textShadow: "0 1px 8px rgba(20,7,40,0.95), 0 0 20px rgba(20,7,40,0.85)" }}
            >
              Mà vì những tổn thương chưa được chữa lành đang vô thức điều khiển cách bạn yêu, cách bạn lựa chọn đối tượng và cách bạn phản ứng trong các mối quan hệ.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-[11px] md:text-xs font-bold uppercase tracking-wide text-[#E8C96A] mb-2"
              style={{ textShadow: "0 1px 6px rgba(20,7,40,0.95)" }}
            >
              Sau 7 ngày, bạn sẽ:
            </motion.p>

            <ul className="space-y-1.5 mb-5 max-w-xl">
              {checkmarks.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 + i * 0.1 }}
                  className="flex items-start gap-2.5 text-xs md:text-sm text-gray-50"
                  style={{ textShadow: "0 1px 6px rgba(20,7,40,0.95)" }}
                >
                  <span className="text-[#E8C96A] mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span><span className="text-[#E8C96A] font-bold">{c.gold}</span>{c.rest}</span>
                </motion.li>
              ))}
            </ul>

            <button
              type="button"
              onClick={scrollToPricing}
              data-testid="button-cta-hero"
              className="group flex items-center justify-center gap-3 px-7 md:px-9 py-4 md:py-5 rounded-none font-bold text-lg md:text-xl text-[#140728] transition-all duration-200 shadow-[0_8px_30px_rgba(232,201,106,0.4)] hover:shadow-[0_16px_50px_rgba(232,201,106,0.6)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.99] border border-[#E8C96A]/50"
              style={{
                background: "#E8C96A",
                width: "45vw",
                maxWidth: "100%",
              }}
            >
              <span className="tracking-wide text-center sm:whitespace-nowrap">BẮT ĐẦU HÀNH TRÌNH 7 NGÀY</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>

            <div className="flex flex-wrap md:flex-nowrap items-center gap-x-3 lg:gap-x-4 gap-y-2 mt-6 text-xs md:text-sm text-gray-200">
              {trust.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 whitespace-nowrap flex-shrink-0">
                  <t.icon className="w-3.5 h-3.5 text-[#E8C96A] flex-shrink-0" />
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
