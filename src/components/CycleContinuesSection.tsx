import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CtaButton, TrustBar } from "./CtaButton";

const nodes = [
  {
    time: "HÔM NAY",
    items: ["Overthinking", "Chờ đợi", "Bất an"],
    dotColor: "bg-amber-400",
    borderColor: "border-amber-300",
    labelColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    time: "3 THÁNG",
    items: ["Mất năng lượng", "Mất tập trung công việc", "Cảm xúc phụ thuộc người khác"],
    dotColor: "bg-orange-400",
    borderColor: "border-orange-300",
    labelColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    time: "1 NĂM",
    items: ["Mất tiêu chuẩn", "Chọn người không chọn mình", "Không còn biết mình thật sự muốn gì"],
    dotColor: "bg-red-400",
    borderColor: "border-red-300",
    labelColor: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    time: "NHIỀU NĂM",
    items: ['Sống cả đời trong cảm giác "không đủ"'],
    dotColor: "bg-red-700",
    borderColor: "border-red-500",
    labelColor: "text-red-800",
    bgColor: "bg-red-100",
    isEnd: true,
  },
];

export function CycleContinuesSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs text-amber-600/70 uppercase tracking-[0.3em] font-medium mb-3">Nếu không có gì thay đổi…</p>
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-gray-900">
            NẾU VÒNG LẶP NÀY TIẾP TỤC...
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-amber-300 via-orange-300 to-red-500" />

          <div className="grid md:grid-cols-4 gap-5">
            {nodes.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center"
              >
                {/* Dot */}
                <div className={`w-14 h-14 rounded-full ${n.bgColor} border-2 ${n.borderColor} flex items-center justify-center mb-4 shadow-sm z-10 relative`}>
                  <div className={`w-5 h-5 rounded-full ${n.dotColor}`} />
                </div>

                <div className={`w-full ${n.bgColor} border ${n.borderColor} rounded-2xl p-5 ${n.isEnd ? "ring-2 ring-red-400/30" : ""}`}>
                  <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${n.labelColor}`}>{n.time}</p>
                  <ul className="space-y-2">
                    {n.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${n.dotColor}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile arrow */}
                {i < nodes.length - 1 && (
                  <div className="flex justify-center my-3 md:hidden">
                    <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Warning bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 mb-10 text-center"
        >
          <p className="text-white font-bold font-serif text-2xl md:text-3xl mb-2">
            BẠN KHÔNG SINH RA ĐỂ SỐNG NHƯ VẬY.
          </p>
          <p className="text-gray-400 text-base mt-3 leading-relaxed max-w-xl mx-auto">
            Đã đến lúc thoát khỏi vòng lặp này và trở về với giá trị thật sự của mình.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <CtaButton
            onClick={scrollToPricing}
            className="text-base md:text-lg px-10 py-5 bg-[#C9A84C] text-[#140728] hover:bg-[#E8C96A] rounded-none shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            data-testid="button-cta-cycle"
          >
            TÔI MUỐN THOÁT KHỎI VÒNG LẶP NÀY
          </CtaButton>
          <TrustBar />
        </motion.div>
      </div>
    </section>
  );
}
