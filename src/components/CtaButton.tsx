import { ChevronRight, Monitor, Zap, Users, ShieldCheck } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

/**
 * CTA dùng chung cho toàn trang.
 * Base component chỉ set layout/hover/transition — màu nền, chữ, bo góc,
 * padding do className của nơi gọi quyết định (mỗi section cần một biến thể riêng).
 */
export function CtaButton({ children, className = "", ...props }: CtaButtonProps) {
  return (
    <button
      type="button"
      className={`group w-full sm:w-auto inline-flex items-center justify-center gap-3 tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99] ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
    </button>
  );
}

const trustItems = [
  { icon: Monitor, label: "Học online" },
  { icon: Zap, label: "Truy cập ngay" },
  { icon: Users, label: "Cộng đồng riêng" },
  { icon: ShieldCheck, label: "Hoàn tiền 7 ngày" },
];

/** Hàng icon "trust signal" nhỏ đi kèm dưới các nút CTA. dark=true dùng trên nền tối. */
export function TrustBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-4 text-xs md:text-sm ${
        dark ? "text-gray-300" : "text-gray-500"
      }`}
    >
      {trustItems.map((t, i) => (
        <span key={i} className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <t.icon className={`w-3.5 h-3.5 ${dark ? "text-[#E8C96A]" : "text-[#B0893A]"}`} />
          {t.label}
        </span>
      ))}
    </div>
  );
}
