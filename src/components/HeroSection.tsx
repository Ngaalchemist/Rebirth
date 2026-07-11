import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Compass, BellOff, ShieldCheck, Monitor, Play, Users, Infinity as InfinityIcon, BadgeCheck } from "lucide-react";
import heroBg from "@/assets/images/hero-final.png";

const PLAYFAIR_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400&display=swap";

const GOLD = "#E8C96A";

const features = [
  {
    icon: Compass,
    title: "Nhận diện chính xác vòng lặp bị bỏ rơi đang điều khiển cách bạn yêu",
  },
  {
    icon: BellOff,
    title: "Không còn overthinking hàng giờ chỉ vì một tin nhắn chậm trả lời",
  },
  {
    icon: ShieldCheck,
    title: "Học cách yêu mà không phải đánh mất chính mình để giữ ai đó ở lại",
  },
];

const trust = [
  { icon: Monitor, label: "Học online" },
  { icon: Play, label: "Bắt đầu ngay" },
  { icon: Users, label: "Cộng đồng riêng" },
  { icon: InfinityIcon, label: "Truy cập trọn đời" },
  { icon: BadgeCheck, label: "Cam kết hoàn tiền 7 ngày" },
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
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative bg-[#0c0420] overflow-hidden">
      <div className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[800px] flex items-center">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0420] from-5% via-[#0c0420]/85 via-44% to-transparent to-72%" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0420] to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full px-5 sm:px-8 md:pl-[10%] lg:pl-[13%] lg:pr-0">
          <div className="w-full md:w-[88%] lg:w-[68%] py-8 lg:py-9 text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs lg:text-sm font-bold tracking-[0.16em] uppercase mb-4"
              style={{ color: GOLD, textShadow: "0 1px 6px rgba(20,7,40,0.9)" }}
            >
              Thoát Vòng Lặp Bị Bỏ Rơi · 7 Ngày Chữa Lành
            </motion.p>

            <h1 className="leading-[1.1] mb-5">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="block font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5.2vw, 3.6rem)", textShadow: "0 2px 18px rgba(0,0,0,0.6)" }}
              >
                Không phải bạn cứ gặp sai người.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block font-bold"
                style={{ color: GOLD, fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5.2vw, 3.6rem)", textShadow: "0 2px 18px rgba(0,0,0,0.6)" }}
              >
                Là bạn đang lặp lại đúng một vết thương,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block font-bold"
                style={{ color: GOLD, fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5.2vw, 3.6rem)", textShadow: "0 2px 18px rgba(0,0,0,0.6)" }}
              >
                dưới một gương mặt khác.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-gray-200 mb-4 max-w-2xl"
              style={{ fontSize: "clamp(0.95rem, 1.7vw, 1.1rem)", textShadow: "0 1px 8px rgba(20,7,40,0.85)", lineHeight: 1.6, fontStyle: "italic" }}
            >
              7 Ngày để nhận diện vòng lặp bị bỏ rơi đang điều khiển đời bạn — và học cách yêu mà không còn phải tự đánh mất mình.
              <br />
              Dù bạn đã đọc hàng chục cuốn sách tâm lý, đã đi trị liệu, đã tự nhủ "lần này mình sẽ khác" — rồi vẫn quay lại đúng vòng lặp cũ.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col gap-3 mb-7 w-full mt-3"
            >
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5 w-full">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center border shrink-0" style={{ borderColor: "rgba(232,201,106,0.45)" }}>
                    <f.icon className="w-3.5 h-3.5" style={{ color: GOLD }} />
                  </div>
                  <p className="text-[12.5px] sm:text-sm leading-snug text-gray-100">{f.title}</p>
                </div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              type="button"
              onClick={scrollToPricing}
              data-testid="button-cta-hero"
              className="group w-full max-w-2xl flex items-center justify-center gap-3 px-7 py-4 md:py-5 rounded-sm font-bold text-base md:text-lg text-[#140728] transition-all duration-200 shadow-[0_8px_30px_rgba(232,201,106,0.4)] hover:shadow-[0_16px_50px_rgba(232,201,106,0.6)] hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]"
              style={{ background: `linear-gradient(135deg, ${GOLD} 0%, #F2DFA0 50%, ${GOLD} 100%)` }}
            >
              <span className="tracking-wide">TÔI MUỐN THOÁT VÒNG LẶP NÀY — CHỈ 1.990.000Đ</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-center text-xs md:text-sm mt-3"
              style={{ color: GOLD }}
            >
              ⏳ Ưu đãi khai giảng chỉ áp dụng cho 50 học viên đầu tiên — Giá gốc 4.990.000đ
            </motion.p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 text-xs md:text-sm text-gray-200">
              {trust.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                  <t.icon className="w-3.5 h-3.5" style={{ color: GOLD }} />
                  <span style={{ textShadow: "0 1px 4px rgba(20,7,40,0.95)" }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="hidden lg:block absolute top-[46%] -translate-y-1/2 right-2 xl:right-4 z-10 w-max max-w-[260px] text-right px-3.5 py-3 rounded-md backdrop-blur-[2px]"
          style={{ backgroundColor: "rgba(8,3,22,0.4)", boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
        >
          <p style={{ color: "#F2E6C4", fontStyle: "italic", fontWeight: 500, fontFamily: "'Playfair Display', serif", fontSize: "0.8rem", lineHeight: 1.55, letterSpacing: "0.01em", textShadow: "0 2px 10px rgba(0,0,0,0.6)", whiteSpace: "nowrap" }}>
            Người khác nhau,
            <br />
            nhưng cảm giác bị bỏ rơi
            <br />
            ở cuối luôn giống hệt nhau.
          </p>
          <div className="mt-2.5 ml-auto w-7 h-px" style={{ backgroundColor: "rgba(232,201,106,0.7)" }} />
          <p className="mt-2 text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(232,201,106,0.85)", fontWeight: 600, textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
            Nga Alchemist
          </p>
        </motion.div>
      </div>
    </section>
  );
}
