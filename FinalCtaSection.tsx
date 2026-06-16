import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

export function FinalCtaSection() {
  const scrollToReg = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#F5D78E] leading-tight">
            BẠN ĐÃ CHỊU ĐỰNG ĐỦ RỒI
          </h2>

          <div className="space-y-4 text-muted-foreground text-xl md:text-2xl leading-[1.7]">
            <p>Nếu bạn cảm thấy đã đến lúc ngừng yêu trong thiếu thốn,</p>
            <p>ngừng chờ một tín hiệu để thấy mình đủ,</p>
            <p className="text-foreground font-medium">và bắt đầu xây lại cảm giác an toàn từ bên trong…</p>
            <p className="text-[#F5D78E] font-serif font-bold text-2xl md:text-3xl">Hành trình này đang ở đây để đồng hành cùng bạn.</p>
          </div>

          {/* CTA */}
          <div className="space-y-5 pt-4">
            <CtaButton
              onClick={() => window.open('https://thanhtoan.ngaalchemist.com', '_blank')}
              className="text-lg md:text-xl px-12 py-6 shadow-[0_0_60px_rgba(201,168,76,0.5)] bg-[#C9A84C] text-[#140728] hover:bg-[#E8C96A]"
              data-testid="button-cta-final"
            >
              TÔI SẴN SÀNG BẮT ĐẦU HÀNH TRÌNH 7 NGÀY
            </CtaButton>
            <TrustBar dark />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
