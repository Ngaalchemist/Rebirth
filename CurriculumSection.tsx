import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { TrustBar } from "./CtaButton";
import day1 from "@/assets/images/day-1.png";
import day2 from "@/assets/images/day-2.png";
import day3 from "@/assets/images/day-3.png";
import day4 from "@/assets/images/day-4.png";
import day5 from "@/assets/images/day-5.png";
import day6 from "@/assets/images/day-6.png";
import day7 from "@/assets/images/day-7.png";

const days = [day1, day2, day3, day4, day5, day6, day7];

function DayCard({ img, index }: { img: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.08 }}
      whileHover={{ scale: 1.65, zIndex: 50 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A84C]/50 shadow-lg hover:shadow-[0_0_50px_rgba(201,168,76,0.4)] transition-shadow cursor-zoom-in"
      style={{ transformOrigin: "center" }}
    >
      <img src={img} alt={`Ngày ${index + 1}`} className="w-full h-auto block" />
    </motion.div>
  );
}

export function CurriculumSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="curriculum" className="py-24 bg-[#140728] relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-violet-900/25 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-4">
            HÀNH TRÌNH 7 NGÀY SẼ ĐƯA BẠN ĐI QUA…
          </h2>
        </motion.div>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
          {days.slice(0, 4).map((img, i) => (
            <DayCard key={i} img={img} index={i} />
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12 md:max-w-3xl md:mx-auto">
          {days.slice(4).map((img, i) => (
            <DayCard key={i + 4} img={img} index={i + 4} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => window.open('https://thanhtoan.ngaalchemist.com', '_blank')}
            data-testid="button-cta-curriculum"
            className="group inline-flex items-center justify-between gap-4 px-8 py-4 md:py-5 rounded-none font-bold text-base md:text-lg text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.4)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.65)] max-w-xl w-full sm:w-auto mx-auto"
          >
            <span className="tracking-wide whitespace-nowrap">TÔI MUỐN ĐI TRÊN HÀNH TRÌNH 7 NGÀY NÀY</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
