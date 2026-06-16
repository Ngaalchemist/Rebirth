import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Điều em thấy rõ nhất không phải là hết đau ngay, mà là lần đầu tiên em hiểu vì sao mình phản ứng mạnh như vậy. Em không còn thấy mình 'có vấn đề', mà thấy mình đang ở trong một vòng lặp có thể đi ra được.",
    name: "Thùy Linh",
    role: "NVVP",
    location: "Hà Nội",
  },
  {
    text: "Em từng học rất nhiều thứ về chữa lành, nhưng đây là lần đầu em có cảm giác mọi thứ nối lại với nhau: cảm xúc, cơ thể, niềm tin, nhu cầu. Em bắt đầu giữ được mình hơn trong các mối quan hệ.",
    name: "Thu Thủy",
    role: "NVKD Nha Khoa",
    location: "HCM",
  },
  {
    text: "Phiên làm việc với chị giúp em chạm vào những phần rất sâu mà trước đây em chỉ biết bằng lý thuyết. Sau đó em bình tĩnh hơn hẳn, không còn lao đi giải thích hay níu kéo như trước.",
    name: "Kim Yến",
    role: "Healer",
    location: "Hà Nội",
  },
  {
    text: "Điều em biết ơn nhất là em bắt đầu thấy giá trị bản thân của mình không nằm ở việc người khác có chọn mình hay không. Em không cần có gì em vẫn thấy tự tin. Cảm giác đó rất khác so với trước.",
    name: "Ngọc Mai",
    role: "",
    location: "HN",
  },
  {
    text: "Em từng nghĩ mình chỉ là người quá nhạy cảm. Nhưng sau khi làm việc cùng chị, em nhận ra mình chỉ đang sống quá lâu với những cảm xúc cũ chưa được đi qua đúng cách.",
    name: "Thu Nguyễn",
    role: "NV Ngân hàng",
    location: "HN",
  },
  {
    text: "Điều em thấy rõ nhất là bây giờ em tự tin hơn rất nhiều. Không phải kiểu gồng lên để tỏ ra mạnh, mà là một sự tự tin rất sâu từ bên trong — kiểu dù mình có đang ở đâu, đang là ai, mình vẫn thấy mình có giá trị. Em thật sự biết ơn chị rất nhiều.",
    name: "Minh Nguyễn",
    role: "NVVP",
    location: "HN",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#140728]">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-3">
            Những chia sẻ thật từ phụ nữ đã làm việc cùng tôi
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Đây là khóa học mới được xây dựng từ kinh nghiệm đồng hành thực tế với nhiều phụ nữ trong quá trình thôi miên chữa lành và chuyển hóa cảm xúc.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-amber-300 transition-all hover:shadow-md flex flex-col group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors" />
              </div>

              <p className="text-sm text-gray-600 leading-[1.85] italic flex-1 mb-5">
                "{t.text}"
              </p>

              <div className="border-t border-border/30 pt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm font-serif">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role && `${t.role} · `}{t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
