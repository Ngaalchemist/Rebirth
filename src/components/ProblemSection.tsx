import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import phoneGirlImg from "@/assets/images/problem-phone.jpg";
import windowGirlImg from "@/assets/images/problem-window.jpg";

export function ProblemSection() {
  return (
    <>
      {/* ── BIG QUESTION (dark + phone girl) ── */}
      <section className="bg-[#1a0a2e] relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[480px]">
          <div className="relative overflow-hidden min-h-[300px]">
            <img src={phoneGirlImg} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a0a2e] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-transparent to-transparent lg:hidden" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center px-8 py-16 lg:pl-10 lg:pr-16"
          >
            <h2 className="font-serif font-bold text-xl md:text-2xl lg:text-[2.2rem] text-white leading-[1.18]">
              Tại sao bạn đã rất cố gắng, đã rất{" "}
              <span className="text-[#E8C96A]">"hiểu chuyện"</span>, nhưng vẫn luôn là người…{" "}
              <span className="text-[#E8C96A]">bị bỏ lại?</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── 2 TẦNG BI KỊCH (white) ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-14"
          >
            Bạn không phải người duy nhất. Hầu hết những phụ nữ đang kẹt trong vòng lặp này đều đang phải chịu đựng{" "}
            <span className="font-bold text-violet-800">hai tầng bi kịch âm thầm</span> mà ít ai dám gọi thẳng tên:
          </motion.p>

          <div className="space-y-8">
            {/* Tầng 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-violet-50 to-white border-l-4 border-violet-400 rounded-r-2xl p-7 md:p-9 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚡</span>
                <h3 className="font-serif font-bold text-lg md:text-xl text-violet-900">
                  Tầng thứ nhất — Cơn bão bất lực bên trong
                </h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-[1.85] mb-4">
                Khi mối quan hệ rạn nứt, bạn rơi vào những đêm mất ngủ triền miên. Bạn lục tung mọi thứ trên mạng chỉ để tìm một câu trả lời: <span className="italic">"Vì sao?"</span>. Nhiều đêm bạn khóc nghẹn đến 3 giờ sáng vì bất lực. Bạn tự trách mình, dằn vặt về quá khứ, cố làm mọi thứ để chứng minh mình có giá trị với một hy vọng duy nhất: <span className="font-medium text-gray-900">Để người ta chọn mình.</span>
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-[1.85]">
                Lâu dần, bạn kiệt quệ. Bạn bắt đầu tin vào cái nhãn mình tự gán cho bản thân: <span className="font-semibold text-violet-900">"Có lẽ mình thực sự không xứng đáng."</span>
              </p>
            </motion.div>

            {/* Tầng 2 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-violet-50 to-white border-l-4 border-violet-600 rounded-r-2xl p-7 md:p-9 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚡</span>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-violet-900">
                  Tầng thứ hai — Kịch bản vòng lặp bên ngoài
                </h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-[1.85]">
                Bạn bàng hoàng nhận ra những đổ vỡ trong đời mình không phải là ngẫu nhiên. Nhìn lại các mối quan hệ đã qua, bạn giật mình thấy chúng lặp lại y hệt một kịch bản cũ: Bạn càng hạ thấp tiêu chuẩn, họ càng khinh rẻ. Bạn càng hy sinh, họ càng xem đó là điều hiển nhiên và bỏ lại bạn như một món đồ hết giá trị sử dụng.
              </p>
            </motion.div>
          </div>

          {/* SỰ THẬT — warn sign */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-900 rounded-2xl p-8 md:p-10 text-center shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 mb-5">
              <AlertTriangle className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">Sự thật trần trụi là</span>
            </div>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-5">
              Mọi mối quan hệ bên ngoài chỉ là tấm gương phản chiếu mối quan hệ của bạn với chính mình.
            </p>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
              Khi bạn còn vô thức bỏ rơi giá trị của bản thân, chấp nhận làm <span className="text-white font-medium">"người hiểu chuyện"</span> để đổi lấy sự yêu thương, bạn sẽ luôn thu hút những người xem sự hy sinh của bạn là điều hiển nhiên và sẵn sàng làm tổn thương bạn.
            </p>
            <p className="font-serif font-bold text-2xl md:text-3xl text-white leading-snug">
              Mối quan hệ chỉ là <span className="text-gray-400">kết quả</span>.<br className="hidden md:block" />
              <span className="text-[#F5D78E]">Danh tính nội tâm</span> mới là <span className="text-[#F5D78E]">nguyên nhân</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TỰ BỎ RƠI (full-bleed crying woman + half-width text overlay) ── */}
      <section className="relative overflow-hidden min-h-[480px] lg:min-h-[560px] flex items-center bg-[#140728]">
        <img
          src={windowGirlImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: "saturate(0.7) brightness(0.7)" }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#140728] via-[#140728]/85 to-[#140728]/15" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#140728]/70 via-transparent to-transparent" />

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 py-14"
          >
            <h3 className="font-serif font-bold text-2xl md:text-3xl lg:text-[2.1rem] text-white leading-[1.35] mb-6">
              Khoảnh khắc bạn hạ thấp tiêu chuẩn, cố hiểu chuyện hơn để níu giữ một người không xứng đáng với bạn -{" "}
              <span className="text-[#F5D78E]">chính là lúc bạn đang TỰ BỎ RƠI CHÍNH MÌNH.</span>
            </h3>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Nếu sự nhẫn nhịn và hy sinh có thể đổi lấy tình yêu chân thành, đáng lẽ bạn đã là người hạnh phúc nhất từ lâu rồi.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
