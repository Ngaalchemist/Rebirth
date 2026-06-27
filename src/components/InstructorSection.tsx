import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import instructorImg from "@/assets/images/instructor-beach.jpg";

const methods = [
  "Thôi miên trị liệu",
  "Timeline healing",
  "Somatic therapy",
  "Inner child work",
  "Shadow work",
  "Coaching chữa lành",
];

const storyBefore = [
  "Mình đứng đây hôm nay không phải như một bậc thầy lý thuyết, mà như một người phụ nữ đã từng bước qua đổ vỡ, tự tay đi qua ngọn lửa tăm tối nhất để nhặt lại từng mảnh vỡ giá trị của chính mình.",
  'Mình hiểu hơn ai hết cảm giác nhục nhã âm thầm khi phải quỵ lụy xin xỏ sự trân trọng. Mình từng gượng ép bản thân trở nên "hiểu chuyện", cố cho đi nhiều hơn... chỉ để đổi lấy một tấm vé ở lại trong cuộc đời của một người vốn đã coi thường mình.',
];

const storyAfter = [
  "Đêm tháng 8 năm 2022.\nNằm bất động trên sàn nhà sau một trận cãi vã nảy lửa với chồng, mình chạm đáy.",
  "Giây phút tim thắt lại vì kiệt sức và tủi nhục, mình biết một điều duy nhất: Không thể để lòng tự trọng bị chà đạp thêm một giây nào nữa. Mình gom chút dũng khí tàn tạ cuối cùng để ly hôn, bước ra khỏi mối quan hệ độc hại.",
  "Nhưng bước ra khỏi một người không có nghĩa là thoát khỏi vòng lặp. Ly hôn xong, mình vẫn phải đối diện với sự trống rỗng, nỗi sợ cô đơn và những đêm dài overthinking.",
  "Sự giải thoát thực sự chỉ bắt đầu khi mình ngừng hướng ra ngoài, dấn thân vào hành trình tự chữa lành nghiêm túc và chọn con đường trở thành một Người thực hành Thôi miên & chữa lành Tiềm thức tầng sâu.",
];

const proof = [
  {
    lead: "Mình đã tự mình đi qua và chuyển hóa thật.",
    body: 'Mình đã dùng chính Thôi miên và Thiền định để bẻ gãy kịch bản "bị bỏ rơi" trong tiềm thức, tái lập lại sự tự tôn từ gốc để kiến tạo một thực tại hoàn toàn mới: Bình an tự thân, làm chủ cảm xúc và tự do tự tại.',
  },
  {
    lead: "Mình thấu hiểu từ việc đồng hành thực tế.",
    body: "Mình không chia sẻ bằng những lý thuyết suông trong sách vở. Sự thấu suốt của mình ngày hôm nay được mài dũa từ việc trực tiếp đồng hành, lắng nghe và dẫn dắt những tâm hồn từng vụn vỡ. Mình đã nhìn thấy cấu trúc của nỗi đau, thấy cách tiềm thức vận hành cái bẫy tự hủy hoại, và cũng thấy khoảnh khắc một người phụ nữ bừng tỉnh, thu hồi lại quyền lực nội tâm để làm chủ cuộc đời mình.",
  },
];

const helps = [
  {
    icon: "🔓",
    title: "Giải mã kịch bản vô thức",
    desc: 'Nhìn thấu cơ chế vì sao nỗi sợ "vô giá trị" lại đang âm thầm điều khiển bạn tự hạ thấp tiêu chuẩn để chuốc lấy tổn thương.',
  },
  {
    icon: "🛡️",
    title: "Thu hồi quyền lực cá nhân",
    desc: "Ngừng phản ứng dựa trên vết thương cũ, cắt đứt sự phụ thuộc cảm xúc để trở thành bến đỗ vững chãi và an toàn nhất cho chính mình.",
  },
  {
    icon: "🦋",
    title: "Tái lập mối quan hệ bên trong",
    desc: "Đưa tiềm thức về trạng thái an toàn nguyên bản, để bạn không bao giờ còn sống với nhu cầu phải cầu xin sự công nhận từ bất kỳ ai khác.",
  },
];

const trust = ["Học online", "Bắt đầu ngay", "Cộng đồng riêng", "Truy cập trọn đời", "Hoàn tiền 7 ngày"];

export function InstructorSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-gray-900 tracking-wide">
            Chào bạn, mình là Nga Alchemist
          </h2>
          <p className="mt-3 text-violet-700 text-base md:text-lg">
            Người bẻ gãy mô thức &amp; chữa lành cảm xúc từ gốc
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl border border-violet-100 mb-6 max-w-md mx-auto"
        >
          <img src={instructorImg} alt="Nga Alchemist" className="w-full object-cover" />
        </motion.div>

        {/* Methods */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {methods.map((m, i) => (
            <span key={i} className="px-3.5 py-1.5 rounded-full text-sm border border-violet-200 text-violet-700 bg-violet-50">
              {m}
            </span>
          ))}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5 text-gray-700 leading-[1.9] text-lg md:text-xl"
        >
          {storyBefore.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="bg-gray-900 rounded-2xl px-7 py-6 my-7">
            <p className="text-white font-semibold text-xl md:text-2xl leading-relaxed text-center">
              Sau nhiều thất bại và những lời thóa mạ hạ bệ lòng tự trọng, mình đã thực sự tin: Bản thân mình là kẻ không có giá trị.
            </p>
          </div>

          {storyAfter.map((p, i) => (
            <p key={i} className="whitespace-pre-line">{p}</p>
          ))}
        </motion.div>

        {/* VÌ MÌNH ĐÃ ĐI QUA box (contrasting dark bg) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl p-7 md:p-9 bg-gradient-to-br from-[#1a0a2e] to-[#140728] border border-[#C9A84C]/30 shadow-xl"
        >
          <h3 className="font-serif font-bold text-[#F5D78E] text-xl md:text-2xl mb-5 tracking-wide">
            VÌ MÌNH ĐÃ ĐI QUA, NÊN MÌNH HIỂU...
          </h3>
          <ul className="space-y-6">
            {proof.map((p, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                <div>
                  <p className="text-[#F5D78E] font-semibold text-lg md:text-xl mb-1.5">{p.lead}</p>
                  <p className="text-gray-100 leading-[1.9] text-lg md:text-xl">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Transition + 3 helps */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-gray-700 leading-[1.9] text-lg md:text-xl whitespace-pre-line"
        >
          {"Hành trình 7 ngày này không có những triết lý cao siêu đao to búa lớn. Nó là tất cả những đúc kết tinh gọn, an toàn và sâu sắc nhất từ chính hành trình chuyển hóa xương máu của mình, cùng những trải nghiệm đồng hành thực tế cùng hàng trăm khách hàng.\nMình ở đây để giúp bạn rút ngắn con đường, không còn phải mò mẫm trong bóng tối:"}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {helps.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-violet-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-3">{h.icon}</div>
              <h4 className="font-serif font-bold text-violet-900 text-lg md:text-xl mb-2">{h.title}</h4>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Hành trình này đang ở đây đợi bạn — nếu bạn đã sẵn sàng ngừng nỗ lực để được yêu, và bắt đầu trở thành{" "}
            <span className="text-violet-800 font-semibold whitespace-nowrap">người không thể bị bỏ rơi.</span>
          </p>
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-guide"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-none font-bold text-base md:text-lg text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.6)] mx-auto"
          >
            <span className="tracking-wide whitespace-nowrap">TÔI CHỌN NGỪNG TỰ BỎ RƠI CHÍNH MÌNH</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <div className="flex flex-nowrap justify-center items-center gap-x-3 mt-4 text-xs md:text-sm text-gray-500 overflow-x-auto">
            {trust.map((t, i) => (
              <span key={i} className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                {i > 0 && <span className="text-[#C9A84C]/60">•</span>}
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
