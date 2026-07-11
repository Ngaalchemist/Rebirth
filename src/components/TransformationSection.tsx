import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { CtaButton, TrustBar } from "./CtaButton";

const rows = [
  {
    before: "Overthinking mỗi khi tin nhắn chậm được trả lời, dựng lên cả trăm kịch bản trong đầu",
    after: "Nhận ra trigger ngay khi nó xảy ra, và có công cụ đưa mình về trạng thái ổn định trong vài phút",
  },
  {
    before: "Cứ yêu là sợ mất, sợ đến mức đánh mất chính mình để giữ đối phương ở lại",
    after: "Biết phân biệt rõ đâu là tình yêu thật, đâu là cảm giác quen thuộc từ vết thương cũ",
  },
  {
    before: "Biết rõ một mối quan hệ không lành mạnh nhưng không đủ sức dứt ra",
    after: "Có thể dứt khỏi một mối quan hệ không phù hợp mà không dằn vặt bản thân",
  },
  {
    before: "Tự trách bản thân sau mỗi lần đổ vỡ: \"chắc tại mình chưa đủ tốt\"",
    after: "Nhìn nhận giá trị bản thân không còn phụ thuộc vào việc có ai đó \"chọn\" mình hay không",
  },
  {
    before: "Đọc rất nhiều sách tâm lý nhưng gặp chuyện vẫn phản ứng y như cũ",
    after: "Kiến thức tâm lý học được tích hợp thành phản xạ, không chỉ nằm trong sách",
  },
  {
    before: "Sợ ở một mình đến mức hạ thấp tiêu chuẩn để có ai đó bên cạnh",
    after: "Cảm thấy đủ đầy khi ở một mình, và chọn người vì muốn chứ không phải vì sợ",
  },
];

export function TransformationSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#1a0a2e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-violet-800/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-white">
            HÀNH TRÌNH CHUYỂN HÓA <span className="text-[#F5D78E]">BẠN SẼ TRẢI QUA</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Đừng để vòng lặp bị bỏ rơi tiếp tục quyết định thay bạn ai xứng đáng ở lại trong đời mình.
            Đời sống tình cảm của bạn có thể bình yên hơn rất nhiều — bạn chỉ cần đúng hệ thống để làm điều đó xảy ra.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 mb-4 px-1 mt-10">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
              <X className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-400 text-xs md:text-sm font-bold tracking-widest uppercase">Trước</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-6 h-6 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-[#140728]" />
            </div>
            <span className="text-[#F5D78E] text-xs md:text-sm font-bold tracking-widest uppercase">Sau</span>
          </div>
        </div>

        <div className="space-y-3">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="grid grid-cols-2 gap-4 bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="p-4 md:p-5 border-r border-white/10">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{r.before}</p>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-gray-100 text-sm md:text-base leading-relaxed">{r.after}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A84C] text-[#1a0a2e] hover:bg-[#E8C96A] rounded-xl px-10 py-5" data-testid="button-cta-transformation">
            TÔI MUỐN BẮT ĐẦU CHUYỂN HÓA — CHỈ 1.990.000Đ
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
