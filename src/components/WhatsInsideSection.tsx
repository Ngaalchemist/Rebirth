import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { CtaButton, TrustBar } from "./CtaButton";

const bonuses = [
  {
    num: "01",
    title: "Bộ Nhận Diện Trigger Cá Nhân",
    sub: "(Trigger Map Template)",
    desc: "Một bảng theo dõi giúp bạn ghi lại chính xác điều gì kích hoạt bất an của mình mỗi ngày, thay vì chỉ nhớ mơ hồ \"hôm nay thấy lo lo\". Sau 7 ngày sử dụng, bạn sẽ có bản đồ trigger cá nhân của riêng mình.",
  },
  {
    num: "02",
    title: "Thẻ Grounding 60 Giây",
    sub: "(Emergency Grounding Cards)",
    desc: "Bộ thẻ bỏ túi với 8 kỹ thuật điều hòa hệ thần kinh có thể dùng ngay khi bị trigger — giữa lúc đang làm việc, đang ở ngoài đường, hay 11 giờ đêm không ngủ được.",
  },
  {
    num: "03",
    title: "Checklist Ranh Giới Trong 24 Giờ Đầu Hẹn Hò",
    sub: "",
    desc: "Danh sách cụ thể các câu hỏi và tín hiệu cần quan sát ở một người mới quen, giúp bạn nhận diện sớm red flag trước khi tình cảm đủ sâu để khó dứt ra.",
  },
  {
    num: "04",
    title: "Nhật Ký Viết Lại Niềm Tin Lõi",
    sub: "(30 Ngày Journaling Prompts)",
    desc: "Bộ câu hỏi viết mỗi ngày trong 30 ngày sau khóa học, giúp bạn tiếp tục tích hợp thay đổi thay vì để kiến thức \"nguội\" đi sau khi khóa học kết thúc.",
  },
  {
    num: "05",
    title: "Kịch Bản Nói Không Mà Không Thấy Tội Lỗi",
    sub: "(Boundary Scripts)",
    desc: "Tuyển tập các mẫu câu cụ thể để từ chối, đặt giới hạn hoặc rút lui khỏi một tình huống không phù hợp, dùng được ngay cả khi bạn chưa quen việc đặt ranh giới.",
  },
];

export function WhatsInsideSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] mb-4">
            ĐÂY LÀ TẤT CẢ NHỮNG GÌ BẠN NHẬN ĐƯỢC TRONG KHÓA "THOÁT VÒNG LẶP BỊ BỎ RƠI"
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
            Khóa học toàn diện: 7 chương — 14 bài học video/audio có hướng dẫn, đi từ nhận diện vòng
            lặp, giải mã niềm tin lõi, điều hòa hệ thần kinh, cắt phụ thuộc cảm xúc, đến xây dựng mô
            thức yêu mới và kế hoạch duy trì sau khóa học.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 justify-center mb-8">
          <Gift className="w-7 h-7 text-[#C9A84C]" />
          <span className="font-serif font-bold text-white text-xl md:text-2xl">Kèm theo 5 bonus thực chiến</span>
        </motion.div>

        <div className="space-y-5">
          {bonuses.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-5 bg-white/5 border border-[#C9A84C]/20 rounded-2xl p-6 hover:border-[#C9A84C]/50 transition-colors"
            >
              <span className="font-serif font-bold text-3xl text-[#C9A84C]/50 leading-none flex-shrink-0">{it.num}</span>
              <div>
                <h3 className="font-serif font-bold text-white text-lg md:text-xl">
                  {it.title} {it.sub && <span className="text-gray-400 font-normal text-sm md:text-base">{it.sub}</span>}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-1.5">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-[#C9A84C]/15 to-[#C9A84C]/5 border-2 border-[#C9A84C]/40 rounded-2xl p-8 text-center"
        >
          <p className="text-gray-300 text-base md:text-lg mb-2">Giá trị thông thường</p>
          <div className="text-gray-500/70 line-through text-2xl md:text-3xl mb-3">6.850.000đ</div>
          <p className="text-gray-300 text-base md:text-lg mb-2">Giá hôm nay</p>
          <div className="text-6xl md:text-7xl font-bold text-[#C9A84C] font-serif leading-none">1.990.000đ</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A84C] text-[#140728] hover:bg-[#E8C96A] rounded-none px-10 py-5" data-testid="button-cta-whatsinside">
            NHẬN TRỌN BỘ NGAY HÔM NAY
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
