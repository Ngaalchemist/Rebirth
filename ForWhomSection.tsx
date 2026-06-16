import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "Bạn đang - hoặc vừa - trải qua một mối quan hệ khiến bạn liên tục cảm thấy bất an, chờ đợi, và nghi ngờ chính mình.",
  "Bạn luôn là người nỗ lực 200% trong một mối quan hệ nhưng vẫn nhận lại sự im lặng.",
  "Bạn sợ cảm giác trống rỗng khi ở một mình và luôn cần một sự xác nhận từ bên ngoài.",
  'Bên ngoài mạnh mẽ, độc lập, nhưng đêm về lại overthinking và kiệt sức vì làm "người hiểu chuyện".',
  "Bạn cảm thấy mình đang bị kiểm soát bởi cảm xúc của người khác thay vì làm chủ chính mình.",
  "Bạn nhận ra mình hay lặp lại cùng một kiểu tổn thương — dù người thay đổi, cảm giác vẫn như cũ.",
  "Bạn muốn yêu mà không đánh mất chính mình, và sẵn sàng nhìn vào bên trong dù điều đó không dễ dàng.",
];

const notForYou = [
  "Mẹo để khiến một người nhắn tin lại, yêu bạn hơn hoặc sợ mất bạn.",
  "Cách kiểm soát, thao túng hoặc giữ ai đó bằng chiến thuật tâm lý.",
  "Một lời hứa rằng sau 7 ngày bạn sẽ hoàn toàn hết đau, hết nhớ, hết yêu.",
  "Một hành trình chỉ để phân tích lỗi của người khác mà không sẵn sàng nhìn lại mô thức của chính mình.",
  "Một giải pháp thay thế cho trị liệu chuyên sâu nếu bạn đang trong khủng hoảng tâm lý nghiêm trọng.",
];

export function ForWhomSection() {
  return (
    <section className="py-24 bg-[#1a0a2e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[400px] rounded-full bg-violet-800/20 blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white">
            HÀNH TRÌNH NÀY <span className="text-[#F5D78E]">DÀNH CHO AI?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-7">
          {/* FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.06] border-2 border-[#C9A84C]/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(201,168,76,0.08)]"
          >
            <h3 className="text-xl md:text-2xl font-bold font-serif text-[#F5D78E] mb-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#140728]" />
              </div>
              Dành cho bạn nếu:
            </h3>
            <div className="space-y-1">
              {forYou.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 py-3 border-b border-white/10 last:border-0"
                >
                  <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#C9A84C]" />
                  </div>
                  <p className="text-lg text-gray-100 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NOT FOR YOU */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="bg-white/[0.03] border-2 border-white/10 rounded-3xl p-8">
              <h3 className="text-xl md:text-2xl font-bold font-serif text-gray-300 mb-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-white" />
                </div>
                Có thể không phù hợp nếu bạn tìm:
              </h3>
              <div className="space-y-1">
                {notForYou.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 py-3 border-b border-white/8 last:border-0"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                    <p className="text-lg text-gray-400 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl p-7">
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed italic">
                Khóa học này không yêu cầu bạn phải "ổn" mới bắt đầu. Nhưng nó mời bạn đến với một sự trung thực dịu dàng:
              </p>
              <p className="text-[#F5D78E] mt-4 text-lg md:text-xl leading-relaxed font-medium">
                Bạn không thể chữa lành vòng lặp cũ nếu chỉ mong người khác thay đổi. Bạn bắt đầu tự do hơn khi dám quay về nhìn phần mình đã bỏ quên.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
