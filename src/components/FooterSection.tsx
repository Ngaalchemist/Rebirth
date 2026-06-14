import logoImg from "@/assets/images/logo-nga-alchemist.png";

export function FooterSection() {
  return (
    <footer className="border-t border-border/30 py-12 bg-[#0d0520]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Nga Alchemist" className="h-14 w-auto object-contain" />
            <div>
              <div className="font-bold text-foreground font-serif tracking-wide">NGA ALCHEMIST</div>
              <div className="text-xs text-muted-foreground">Chữa Lành · Chuyển Hóa · Thức Tỉnh</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-primary transition-colors">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-primary transition-colors">Hỗ trợ</a>
            <a href="#" className="hover:text-primary transition-colors">Liên hệ</a>
          </div>

          <div className="text-xs text-muted-foreground text-center md:text-right">
            <p>© 2026 Nga Alchemist. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/20">
          <p className="text-xs text-muted-foreground/60 text-center leading-relaxed max-w-3xl mx-auto">
            DISCLAIMER: Kết quả có thể khác nhau tùy từng người và phụ thuộc vào nhiều yếu tố bao gồm nhưng không giới hạn ở nền tảng, kinh nghiệm và mức độ cam kết của bạn. Nội dung trong khóa học không thể thay thế cho sự hỗ trợ của chuyên gia sức khỏe tâm thần có chuyên môn. Trang web này không thuộc Facebook™ và không được Facebook Inc. chứng thực. FACEBOOK là thương hiệu của FACEBOOK, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
