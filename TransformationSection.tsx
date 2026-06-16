import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const rows = [
  {
    before: "Thức dậy là check điện thoại xem họ có nhắn tin không",
    after: "Thức dậy với sự bình an, tự kết nối với chính mình trước",
  },
  {
    before: "Cảm giác tội lỗi và lo sợ khi không làm hài lòng người khác",
    after: 'Chạm vào trạng thái "Tôi là đủ". Biết nói "không" mà không bất an',
  },
  {
    before: 'Luôn thấy mình là "lựa chọn phụ" của ai đó',
    after: "Thu hồi quyền lực nội tâm. Trở thành bến đỗ của chính mình",
  },
  {
    before: "Hiểu hết lý thuyết chữa lành nhưng vẫn không thoát ra được",
    after: "Hệ thống vận hành ở tầng tiềm thức, không tốn ý chí để duy trì",
  },
  {
    before: "Sợ cô đơn và sợ sự im lặng",
    after: "Bình an với chính mình. Biết rõ giá trị bản thân không nằm ở người khác",
  },
];

export function TransformationSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-gray-900">
            SAU 7 NGÀY, BẠN SẼ THAY ĐỔI NHƯ THẾ NÀO?
          </h2>
        </motion.div>

        {/* Column headers */}
        <div className="grid grid-cols-2 gap-0 mb-3">
          <div className="px-5 py-3 text-center">
            <span className="text-sm md:text-base font-bold tracking-[0.12em] uppercase text-gray-400">Trước hành trình</span>
          </div>
          <div className="px-5 py-3 text-center">
            <span className="text-sm md:text-base font-extrabold tracking-[0.12em] uppercase text-violet-700">
              ✦ Sau hành trình ✦
            </span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          {rows.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`grid grid-cols-2 ${i < rows.length - 1 ? "border-b border-gray-200" : ""} group hover:bg-violet-50/60 transition-colors`}
            >
              <div className="bg-gray-50 px-5 py-5 flex items-center border-r border-gray-200 group-hover:bg-transparent transition-colors">
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">{t.before}</p>
              </div>
              <motion.div
                className="bg-violet-50 px-5 py-5 flex items-center gap-3 group-hover:bg-violet-100/70 transition-colors"
                whileHover={{ x: 2 }}
              >
                <ArrowRight className="w-4 h-4 text-violet-600 flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-900 leading-relaxed font-medium">{t.after}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-900 font-serif font-bold text-xl md:text-2xl lg:text-3xl leading-snug max-w-3xl mx-auto mt-12"
        >
          Với Nga Alchemist, việc thay đổi <span className="text-violet-800">"danh tính nội tâm"</span> — từ <span className="text-gray-500">"người bị bỏ rơi"</span> sang <span className="text-violet-800">"người biết chọn chính mình"</span> — chính là thay đổi bản thiết kế gốc trong tiềm thức, để thay đổi toàn bộ thực tại bên ngoài.
        </motion.p>
      </div>
    </section>
  );
}
