import { motion } from "framer-motion";

const codes = [
  {
    icon: "🔮",
    title: "Mật mã 1: Tấm gương tiềm thức",
    desc: "Sự im lặng, phản bội hay coi thường từ đối phương thực chất không phải do họ tự nhiên tàn nhẫn. Đó chỉ là hình ảnh phản chiếu chính xác việc bạn đã tự khinh rẻ và tự bỏ rơi chính mình trước đó.",
  },
  {
    icon: "📻",
    title: "Mật mã 2: Định luật đồng tần số",
    desc: 'Khi tần số cốt lõi bên trong của bạn phát ra là "Tôi không đủ tốt, Tôi sợ bị bỏ rơi", bạn sẽ tự động hút về những con người có xu hướng phớt lờ bạn. Đối phương chỉ là tiếng vọng từ vết thương của bạn.',
  },
  {
    icon: "📊",
    title: "Mật mã 3: Dữ liệu phản hồi (Feedback)",
    desc: 'Người làm bạn tổn thương không xuất hiện để dìm bạn xuống đáy. Họ chỉ là một "dữ liệu phản hồi" trung thực, phơi bày phần tổn thương bạn đang phớt lờ, buộc bạn phải thức tỉnh để thu hồi lại giá trị của chính mình.',
  },
];

export function MechanismSection() {
  return (
    <section className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-violet-800/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#F5D78E] leading-tight">
            BÍ MẬT CỦA SỰ CHUYỂN HÓA
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-200 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-6"
        >
          Nhờ hành trình đi xuyên qua bóng tối đó, mình nhận ra một sự thật mà không ai từng dạy chúng ta:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-y-2 border-[#C9A84C]/40 py-8 px-4 max-w-3xl mx-auto mb-12"
        >
          <p className="font-serif text-xl md:text-3xl text-[#F5D78E] leading-relaxed text-center italic">
            "Thế giới không đối xử với bạn theo cách bạn muốn. Nó đối xử với bạn theo đúng cách bạn đang đối xử với chính mình."
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white font-medium text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Để hiểu vì sao bạn càng hy sinh thì đối phương lại càng khinh thường, bạn phải nhìn thấu 3 mật mã vận hành của Tiềm thức:
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {codes.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white/5 border border-[#C9A84C]/25 rounded-2xl p-7 hover:border-[#C9A84C]/60 hover:bg-white/[0.07] hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl mb-4">{c.icon}</div>
              <h3 className="font-serif font-bold text-[#F5D78E] text-xl md:text-2xl mb-3">{c.title}</h3>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white font-bold text-2xl md:text-3xl font-serif max-w-3xl mx-auto mb-10"
        >
          Không có gì xảy ra bên ngoài mà không bắt nguồn từ một rung động bên trong.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-[#C9A84C]/25 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <p className="text-gray-100 text-xl md:text-2xl leading-[1.8] text-center">
            Hãy nhớ rằng, mọi thứ bên ngoài chỉ là ảnh ảo phản chiếu qua gương. Nếu bạn đứng trước gương và muốn người trong gương mỉm cười, bạn không thể thò tay vào để bẻ miệng họ, việc duy nhất bạn phải làm là thay đổi{" "}
            <span className="text-[#F5D78E] font-bold">"Danh tính nội tâm"</span> của chính mình.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
