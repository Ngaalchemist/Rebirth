import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

export function FinalCtaSection() {
  const scrollToReg = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-7"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#F5D78E] leading-tight">
            ĐỪNG ĐỂ VÒNG LẶP NÀY TIẾP TỤC CHỌN THAY BẠN
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Trong khi nhiều phụ nữ khác vẫn đang loay hoay tự trách mình sau mỗi cuộc chia tay, bạn có
            thể là người bắt đầu hiểu đúng gốc rễ và thay đổi thật sự — chỉ với 7 ngày và một hệ thống
            đã được kiểm chứng.
          </p>

          <div className="space-y-5 pt-2">
            <CtaButton
              onClick={scrollToReg}
              className="text-lg md:text-xl px-12 py-6 shadow-[0_0_60px_rgba(201,168,76,0.5)] bg-[#C9A84C] text-[#140728] hover:bg-[#E8C96A]"
              data-testid="button-cta-final"
            >
              GIỮ ƯU ĐÃI CHO TÔI NGAY BÂY GIỜ
            </CtaButton>
            <p className="text-[#C9A84C] text-sm md:text-base">
              ⏳ Chỉ còn 1.990.000đ (giá gốc 4.990.000đ)
            </p>
            <TrustBar dark />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
