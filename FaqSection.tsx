import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Tôi đã học nhiều về chữa lành rồi nhưng vẫn lặp lại, vậy khóa này có giúp được không?",
    a: 'Có thể điều bạn thiếu không phải là thêm kiến thức, mà là một cách đi chậm hơn vào bên trong. Nhiều người hiểu rất rõ về self-worth, attachment, inner child — nhưng khi một người im lặng, hệ thần kinh vẫn lập tức rơi vào bất an. Khóa học này giúp bạn nối khoảng cách giữa "mình biết" và "mình có thể ở lại với mình khi bị kích hoạt".',
  },
  {
    q: "Tôi chưa sẵn sàng buông một người, vậy có học được không?",
    a: "Có. Bạn không cần ép mình buông trước khi bắt đầu. Thật ra, khóa học này không bắt bạn phải ra một quyết định ngay. Điều đầu tiên bạn cần không phải là dứt ra bằng ý chí, mà là hiểu điều gì đang giữ bạn lại, điều gì trong bạn đang sợ, và làm sao để bạn không tiếp tục bỏ rơi mình trong quá trình ấy. Buông, nếu xảy ra, sẽ đến từ sự rõ ràng và tự trọng — không phải từ việc tự ép mình phải hết thương.",
  },
  {
    q: 'Tôi không nghĩ mình có "vết thương bị bỏ rơi" nghiêm trọng. Khóa này có phù hợp không?',
    a: "Có thể vẫn phù hợp. Mô thức bị bỏ rơi không phải lúc nào cũng đến từ một câu chuyện quá lớn. Đôi khi nó chỉ hiện ra trong những phản ứng rất đời thường: sợ người khác đổi ý, sợ mình không đủ quan trọng, thấy lòng rơi xuống khi không được phản hồi. Nếu bạn thường đánh mất bình yên của mình trong tình yêu, khóa học này sẽ giúp bạn nhìn lại điều đó một cách tinh tế và không nặng nề.",
  },
  {
    q: "7 ngày có quá ngắn để chữa lành không?",
    a: "7 ngày không phải là toàn bộ hành trình chữa lành. Nhưng 7 ngày đủ để bạn bắt đầu nhìn thấy mô thức, hiểu cơ chế bên trong, có công cụ điều hòa cảm xúc và tạo ra một điểm rẽ mới. Nhiều khi, điều thay đổi đầu tiên không phải là cuộc đời bạn lập tức khác đi. Mà là lần tới khi bị kích hoạt, bạn không còn hoàn toàn bị cuốn đi như trước. Đó là một khởi đầu rất đáng giá.",
  },
  {
    q: "Tôi sợ học xong sẽ phải đối diện với những cảm xúc rất đau.",
    a: "Khóa học này không được thiết kế để đẩy bạn vào nỗi đau quá nhanh. Nó đi theo tinh thần dịu nhưng vững: nhận diện, điều hòa, rồi mới chạm sâu hơn. Bạn không cần phải mở tất cả mọi thứ cùng lúc. Bạn chỉ cần học cách ở lại với mình từng chút một. Nếu bạn đang trong trạng thái khủng hoảng nghiêm trọng, bạn nên tìm thêm sự hỗ trợ trực tiếp từ chuyên gia phù hợp.",
  },
  {
    q: "Tôi đang trong một mối quan hệ, không phải vừa chia tay. Có học được không?",
    a: "Có. Khóa học này không chỉ dành cho người đang vượt qua chia tay. Nó dành cho bất kỳ ai thấy mình dễ bất an, bám víu, tự bỏ rơi hoặc đánh mất giá trị bản thân trong tình yêu. Đôi khi, học khi bạn vẫn còn trong mối quan hệ lại giúp bạn quan sát rõ hơn: đâu là tình yêu, đâu là nỗi sợ, đâu là nhu cầu thật, đâu là mô thức cũ đang điều khiển mình.",
  },
  {
    q: "Tôi bận và sợ không theo được trọn vẹn.",
    a: "Bạn không cần biến hành trình này thành một áp lực mới. Hãy xem 7 ngày này như một khoảng hẹn với chính mình. Không cần hoàn hảo. Không cần làm thật nhiều. Chỉ cần mỗi ngày bạn quay về một chút, trung thực hơn một chút, dịu với mình hơn một chút. Sự thay đổi sâu thường không đến từ việc làm thật nhiều trong một lúc. Mà đến từ việc bạn không còn bỏ mình lại như trước.",
  },
];

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className="border border-border/40 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        data-testid={`button-faq-${i}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-card/70 transition-colors"
      >
        <span className="font-medium text-foreground text-sm leading-relaxed pr-2">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 border-t border-border/25 bg-card/40">
              <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase font-semibold mb-4">FAQ</p>
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-foreground">
            CÓ THỂ BẠN ĐANG TỰ HỎI…
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
