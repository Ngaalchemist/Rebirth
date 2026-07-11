import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CtaButton, TrustBar } from "./CtaButton";
import day1 from "@/assets/images/day-1.png";
import day2 from "@/assets/images/day-2.png";
import day3 from "@/assets/images/day-3.png";
import day4 from "@/assets/images/day-4.png";
import day5 from "@/assets/images/day-5.png";
import day6 from "@/assets/images/day-6.png";
import day7 from "@/assets/images/day-7.png";

const days = [
  {
    img: day1,
    title: "Nhận Diện Vòng Lặp Đang Vận Hành Trong Đời Bạn",
    lead: "Bạn sẽ ngừng nghĩ \"chắc mình xui\" hay \"mình có vấn đề\" — và bắt đầu nhìn thấy một cơ chế cảm xúc có thể gọi tên và làm việc cùng.",
    points: [
      "Nhận diện vòng lặp bị bỏ rơi biểu hiện trong tình yêu, công việc và giá trị bản thân",
      "Phân biệt tín hiệu từ trực giác thật và phản ứng từ nỗi sợ",
      "Hiểu vì sao bạn biết rất nhiều về tâm lý học nhưng vẫn lặp lại y hệt",
    ],
  },
  {
    img: day2,
    title: "Từ Nỗi Đau Hiện Tại Quay Về Gốc Rễ Thật Sự",
    lead: "Bạn sẽ hiểu nỗi đau bạn đang mang chỉ là cánh cửa dẫn về một vết thương cũ hơn nhiều, không phải toàn bộ câu chuyện về bạn.",
    points: [
      "Mối liên hệ giữa trải nghiệm hiện tại và ký ức cảm xúc cũ",
      "Cách một trigger nhỏ có thể kích hoạt phản ứng lớn hơn nhiều so với tình huống thực tế",
      "Nhận diện kiểu người, kiểu tình huống thường khiến bạn sụp đổ",
    ],
  },
  {
    img: day3,
    title: "Cơ Chế Phía Sau Việc Không Buông Được",
    lead: "Bạn sẽ hiểu điều gì thật sự đang \"cầm lái\" khiến bạn không thể dứt ra, và vì sao đó không phải là \"yếu đuối\".",
    points: [
      "Cơ chế gắn bó sang chấn và trạng thái bám víu của hệ thần kinh",
      "Vòng lặp hy vọng – thất vọng khiến bạn khó dừng lại",
      "Sự khác nhau giữa tình yêu thật và nghiện cảm xúc",
    ],
  },
  {
    img: day4,
    title: "Giải Mã Niềm Tin Lõi Đang Điều Khiển Lựa Chọn Của Bạn",
    lead: "Bạn sẽ gọi tên chính xác lớp niềm tin sâu nhất khiến bạn liên tục chọn những người khiến mình tổn thương.",
    points: [
      "Mẫu hình gắn bó hình thành từ gia đình và tuổi thơ",
      "Niềm tin lõi phổ biến ở người mang vết thương bị bỏ rơi (\"mình phải cố hơn\", \"nếu yêu đủ họ sẽ ở lại\")",
      "Bài tập nhận diện đối thoại nội tâm đang âm thầm dẫn dắt bạn",
    ],
  },
  {
    img: day5,
    title: "Điều Hòa Hệ Thần Kinh Khi Bị Trigger",
    lead: "Bạn sẽ có công cụ thực tế để không bị cuốn theo cảm xúc mỗi khi bị kích hoạt — dùng được ngay trong đời sống hằng ngày.",
    points: [
      "Điều gì xảy ra trong thân và não khi bạn bị trigger",
      "Kỹ thuật thở, grounding, orienting để dừng vòng xoáy cảm xúc",
      "Cách quay về hiện tại thay vì phản ứng theo vết thương cũ",
    ],
  },
  {
    img: day6,
    title: "Cắt Phụ Thuộc Cảm Xúc Và Học Cách Chọn Mình",
    lead: "Bạn sẽ học cách yêu mà không đánh mất bản thân, và bắt đầu xây ranh giới dựa trên giá trị, không phải nỗi sợ.",
    points: [
      "Phân biệt kết nối lành mạnh và dính mắc phụ thuộc",
      "Cách nói không mà không thấy tội lỗi",
      "Xác định giá trị cốt lõi và tiêu chuẩn mối quan hệ của riêng bạn",
    ],
  },
  {
    img: day7,
    title: "Viết Lại Mô Thức Yêu Và Tích Hợp Thay Đổi Lâu Dài",
    lead: "Bạn sẽ hoàn tất hành trình với một mô thức yêu mới và kế hoạch cụ thể để duy trì thay đổi sau khi khóa học kết thúc.",
    points: [
      "Nhận diện dấu hiệu của một người an toàn để gắn bó (green flags) và red flags cần rời đi",
      "Nghi thức khép lại vai trò \"người luôn bị bỏ rơi\" và mở ra phiên bản mới",
      "Kế hoạch 30 ngày thực hành sau khóa học để không quay lại vòng lặp cũ",
    ],
  },
];

function DayCard({ img, index, onOpen }: { img: string; index: number; onOpen: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.08 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A84C]/50 shadow-lg hover:shadow-[0_0_50px_rgba(201,168,76,0.4)] transition-shadow cursor-pointer text-left"
      style={{ transformOrigin: "center" }}
      data-testid={`button-day-${index + 1}`}
    >
      <img src={img} alt={`Ngày ${index + 1}`} className="w-full h-auto block" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
        <span className="text-white text-xs font-bold tracking-wide">NGÀY {index + 1}</span>
      </div>
    </motion.button>
  );
}

export function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  const active = openIndex !== null ? days[openIndex] : null;

  return (
    <section id="curriculum" className="py-24 bg-[#140728] relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-violet-900/25 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-4">
            HÀNH TRÌNH 7 NGÀY THOÁT VÒNG LẶP BỊ BỎ RƠI CỦA BẠN BẮT ĐẦU TỪ ĐÂY
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-2">
            7 chặng đưa bạn từ việc "biết mình có vấn đề" đến chỗ thật sự thay đổi cách bạn yêu.
          </p>
          <p className="text-gray-400 text-sm">Bấm vào từng ngày để xem chi tiết bạn sẽ học gì.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5 mt-10">
          {days.slice(0, 4).map((d, i) => (
            <DayCard key={i} img={d.img} index={i} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12 md:max-w-3xl md:mx-auto">
          {days.slice(4).map((d, i) => (
            <DayCard key={i + 4} img={d.img} index={i + 4} onOpen={() => setOpenIndex(i + 4)} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <button
            onClick={scrollToPricing}
            data-testid="button-cta-curriculum"
            className="group inline-flex items-center justify-between gap-4 px-8 py-4 md:py-5 rounded-none font-bold text-base md:text-lg text-[#140728] bg-[#C9A84C] hover:bg-[#E8C96A] transition-all shadow-[0_8px_30px_rgba(201,168,76,0.4)] hover:shadow-[0_14px_44px_rgba(201,168,76,0.65)] max-w-xl w-full sm:w-auto mx-auto"
          >
            <span className="tracking-wide whitespace-nowrap">TÔI MUỐN ĐI TRÊN HÀNH TRÌNH 7 NGÀY NÀY</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          <TrustBar dark />
        </motion.div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-lg w-[92vw] bg-[#1a0a2e] border border-[#C9A84C]/30 text-gray-100 p-0 overflow-hidden rounded-2xl">
          {active && (
            <div>
              <img src={active.img} alt={active.title} className="w-full h-auto block" />
              <div className="p-6">
                <span className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase">
                  Ngày {openIndex !== null ? openIndex + 1 : ""}
                </span>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-[#F5D78E] mt-2 mb-3 leading-snug">
                  {active.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">{active.lead}</p>
                <ul className="space-y-2">
                  {active.points.map((p, i) => (
                    <li key={i} className="flex gap-2.5 text-sm md:text-base text-gray-200">
                      <span className="text-[#C9A84C] mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
