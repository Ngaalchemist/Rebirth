import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CtaButton({ children, className, onClick, ...props }: CtaButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-none px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] hover:brightness-110",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export function TrustBar({ dark = false }: { dark?: boolean }) {
  const items = ["Học online", "Truy cập ngay", "Cộng đồng riêng", "Livestream giải đáp hàng tuần", "Hoàn tiền 7 ngày"];
  return (
    <div className={`flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs mt-3 ${dark ? "text-muted-foreground" : "text-gray-500"}`}>
      {items.map((b, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className={dark ? "text-primary/40" : "text-amber-400/60"}>•</span>}
          <span>{b}</span>
        </span>
      ))}
    </div>
  );
}
