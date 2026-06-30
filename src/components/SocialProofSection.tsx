import { motion } from "framer-motion";
import { Users, Brain, Monitor } from "lucide-react";

const items = [
  {
    icon: Users,
    text: "Hơn 500+ phụ nữ đã đồng hành trong các phiên 1:1",
  },
  {
    icon: Brain,
    text: "Giải phóng nỗi đau gốc • Làm chủ sự bình an • Tái lập trình giá trị bản thân",
  },
  {
    icon: Monitor,
    text: "Học online • 
      Thực hành ngắn • 
      Không lý thuyết sáo rỗng",
  },
];

export function SocialProofSection() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 px-7 py-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-amber-300 transition-all min-w-0 max-w-xs w-full md:w-auto"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-amber-700" />
              </div>
              <p className="text-sm text-gray-700 leading-snug font-medium">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
