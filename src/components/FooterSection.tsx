export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0420] border-t border-white/10 py-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <p className="font-serif font-bold text-[#F5D78E] text-sm md:text-base tracking-wide mb-2">
          THOÁT VÒNG LẶP BỊ BỎ RƠI
        </p>
        <p className="text-gray-400 text-xs md:text-sm mb-5">Nga Alchemist · Cycle Breaker</p>

        <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed mb-3">
          Bản quyền © {year} Nga Alchemist. Tất cả các quyền được bảo lưu.
        </p>

        <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed mb-3">
          <span className="text-gray-400 font-semibold">Miễn trừ trách nhiệm:</span> Kết quả chia sẻ
          trong trang này không đại diện cho kết quả điển hình. Kết quả của bạn sẽ khác nhau tùy thuộc
          vào hoàn cảnh cá nhân, mức độ cam kết thực hành và nhiều yếu tố khác. Khóa học mang tính chất
          giáo dục và hỗ trợ phát triển bản thân, không thay thế cho tham vấn hoặc điều trị tâm lý/y tế
          chuyên sâu khi cần thiết.
        </p>

        <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed mb-3">
          Nội dung trên trang này, cũng như trong chương trình học, không phải là lời khuyên y tế, tâm
          lý lâm sàng hay pháp lý. Nếu bạn đang gặp khủng hoảng tâm lý nghiêm trọng, vui lòng tìm đến
          chuyên gia tâm lý hoặc cơ sở y tế phù hợp để được hỗ trợ trực tiếp. Bạn là người chịu trách
          nhiệm cho các quyết định và hành động của mình sau khi tham gia chương trình.
        </p>

        <p className="text-gray-600 text-[10px] md:text-xs">
          Trang này không thuộc và không được xác nhận bởi Facebook™ hay Meta Inc. dưới bất kỳ hình thức nào.
        </p>
      </div>
    </footer>
  );
}
