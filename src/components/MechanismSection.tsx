import { motion } from "framer-motion";
import { CtaButton, TrustBar } from "./CtaButton";

const struggles = [
  "Yêu ai cũng dễ rơi vào trạng thái \"đoán ý\", sợ làm sai một điều gì đó là bị bỏ",
  "Overthinking một tin nhắn chậm trả lời tới mức mất ngủ",
  "Biết rõ người đó không phù hợp nhưng vẫn không dứt ra được",
  "Tự trách bản thân \"chắc tại mình không đủ tốt\" sau mỗi lần đổ vỡ",
  "Sợ ở một mình đến mức chấp nhận những mối quan hệ mình biết là sai",
];

const tried = [
  { label: "Đọc sách self-help về tình yêu", note: "hiểu lý thuyết, nhưng gặp chuyện lại phản ứng y hệt cũ" },
  { label: "Tâm sự với hội bạn thân", note: "được an ủi, nhưng không ai chỉ được gốc rễ" },
  { label: "Ép bản thân \"yêu bản thân hơn\" theo quote trên mạng", note: "không biết bắt đầu từ đâu ngoài lời nói suông" },
  { label: "Né tránh yêu đương một thời gian", note: "nỗi sợ vẫn còn nguyên, chỉ là tạm không bị kích hoạt" },
  { label: "Đi trị liệu vài buổi rồi dừng", note: "vì không đủ thời gian, chi phí, hoặc chưa thấy thay đổi rõ ràng" },
];

const insights = [
  "Cảm giác bất an trong tình yêu không phải \"yếu đuối\" — đó là hệ thần kinh đang phản ứng với một trigger quen thuộc",
  "Overthinking không phải \"suy nghĩ nhiều quá\" — đó là một nỗ lực (thất bại) để kiểm soát sự bất định",
  "Cứ bị thu hút bởi người \"khó nắm bắt\" không phải ngẫu nhiên — não bộ đang tìm lại cảm giác quen thuộc từ tổn thương cũ",
  "Ranh giới yếu không phải \"dễ dãi\" — đó là hệ quả của niềm tin lõi \"mình phải cố thì mới xứng đáng được yêu\"",
];

const outcomes = [
  "Gọi tên chính xác vòng lặp cảm xúc đang chi phối các mối quan hệ của mình",
  "Dừng phản ứng overthinking và tự trách trong vòng vài phút thay vì vài ngày",
  "Nhận diện sớm dấu hiệu \"red flag\" thay vì chỉ nhận ra sau khi đã tổn thương",
  "Đặt ranh giới rõ ràng mà không thấy tội lỗi",
  "Bắt đầu một mô thức yêu mới — kết nối thay vì bám víu",
];

export function MechanismSection() {
  const scrollToPricing = () =>
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-[#140728] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-violet-800/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#C9A84C]/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10 space-y-10 text-gray-200 leading-[1.9] text-base md:text-lg">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif font-bold text-2xl md:text-4xl text-[#F5D78E] leading-tight text-center mb-4"
        >
          Phương pháp đang giúp hàng trăm phụ nữ chuyển từ<br className="hidden md:block" />
          "cứ yêu là mất mình" sang "yêu mà vẫn là chính mình" — chỉ trong 7 ngày
        </motion.h2>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-l-2 border-[#C9A84C]/50 pl-5 italic text-gray-300"
        >
          "Em cứ nghĩ mình xui, gặp toàn người không nghiêm túc. Đến khi nhìn lại 3 mối tình gần nhất,
          em mới nhận ra: người khác nhau, nhưng cảm giác bị bỏ rơi ở cuối luôn giống hệt nhau."
        </motion.blockquote>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Có một buổi tối, sau cuộc chia tay thứ n, bạn ngồi lại và tự hỏi: "Sao lần nào mình cũng là
          người cố gắng nhiều hơn? Sao mình luôn là người sợ mất trước?"
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Bạn từng nghĩ vấn đề nằm ở gu chọn người. Rồi bạn nhận ra: mọi lần đều bắt đầu giống nhau —
          hy vọng, rồi bất an, rồi cố gắng nhiều hơn mức cần thiết, rồi mất mình lúc nào không hay.
        </motion.p>

        <div>
          <p className="font-semibold text-white mb-4">Mỗi ngày trôi qua, cuộc chiến bên trong bạn vẫn là:</p>
          <ul className="space-y-2.5 pl-1">
            {struggles.map((s, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A84C] mt-1">•</span>
                <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-4">Bạn đã từng cố mọi cách người ta mách:</p>
          <ul className="space-y-3 pl-1">
            {tried.map((t, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A84C] mt-1">•</span>
                <span>
                  {t.label} <span className="italic text-gray-400">({t.note})</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white">
          Và đỉnh điểm là cái đêm bạn nhận ra: mình không cô đơn vì thiếu người yêu mình, mình cô đơn
          vì chưa bao giờ thật sự ở về phe mình.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-y-2 border-[#C9A84C]/40 py-7 px-4 text-center"
        >
          <p className="font-serif text-lg md:text-xl text-[#F5D78E] leading-relaxed">
            Rồi mọi thứ thay đổi khi bạn hiểu ra một điều: vấn đề không nằm ở việc bạn "yêu sai người".
            Nó nằm ở một <span className="italic">vòng lặp bị bỏ rơi</span> được hình thành từ rất sớm —
            một cơ chế cảm xúc khiến bạn vô thức bị thu hút bởi đúng kiểu người, đúng kiểu cảm giác bấp
            bênh mà bạn đã quen thuộc từ nhỏ.
          </p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Những học viên đã hiểu và thực hành theo phương pháp này chia sẻ rằng: lần đầu tiên họ nhận
          ra mình đang phản ứng với vết thương cũ, chứ không phải với người trước mặt — và đó là
          khoảnh khắc mọi thứ bắt đầu khác đi.
        </motion.p>

        <div>
          <p className="font-semibold text-white mb-4">Điều khiến nhiều người bất ngờ:</p>
          <p className="mb-4">
            Theo các nghiên cứu về attachment (gắn bó) trong tâm lý học phát triển, phần lớn khuôn mẫu
            chọn bạn đời và phản ứng khi bị đe dọa mất kết nối được hình thành từ những trải nghiệm gắn
            bó đầu đời — không phải điều bạn "chọn", mà là điều hệ thần kinh của bạn đã học được để sinh tồn.
          </p>
          <ul className="space-y-2.5 pl-1">
            {insights.map((s, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A84C] mt-1">•</span>
                <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white">
          Và điều đáng lo nhất: phần lớn phụ nữ đang mắc kẹt trong vòng lặp này mà không biết — họ tiếp
          tục "chữa lành" bằng cách đọc thêm sách, nghe thêm podcast, nhưng không có ai chỉ cho họ một
          lộ trình cụ thể để thật sự tích hợp thay đổi vào hệ thần kinh, chứ không chỉ vào nhận thức.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Phương pháp <span className="font-semibold text-[#F5D78E]">"Thoát Vòng Lặp Bị Bỏ Rơi"</span> được
          hệ thống hóa lại thành một lộ trình 7 ngày dễ thực hành, kết hợp nhận diện cơ chế tâm lý,
          điều hòa hệ thần kinh và tái xây dựng hình ảnh bản thân — không cần nền tảng tâm lý học trước đó.
        </motion.p>

        <div>
          <p className="font-semibold text-white mb-4">Nhờ vậy, học viên có thể:</p>
          <ul className="space-y-2.5 pl-1">
            {outcomes.map((s, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="text-[#C9A84C] mt-1">•</span>
                <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center pt-4">
          <CtaButton onClick={scrollToPricing} className="bg-[#C9A84C] text-[#140728] hover:bg-[#E8C96A] rounded-none px-10 py-5" data-testid="button-cta-mechanism">
            TÔI MUỐN BẮT ĐẦU NGAY HÔM NAY — CHỈ 1.990.000Đ
          </CtaButton>
          <TrustBar dark />
        </motion.div>
      </div>
    </section>
  );
}
