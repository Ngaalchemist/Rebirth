export function HeaderSection() {
  const scrollToPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <p className="font-serif font-bold text-gray-900 text-[13px] sm:text-base md:text-lg tracking-wide leading-tight">
            7 NGÀY THOÁT KHỎI VÒNG LẶP BỊ BỎ RƠI
          </p>

          <button
            onClick={scrollToPricing}
            data-testid="button-header-register"
            className="rounded-none px-10 md:px-16 py-2.5 text-sm font-bold bg-[#C9A84C] text-[#140728] hover:bg-[#E8C96A] transition-all shadow-md hover:shadow-lg whitespace-nowrap tracking-wide"
          >
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </header>
  );
}
