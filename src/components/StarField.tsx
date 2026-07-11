import { useMemo } from "react";

interface StarFieldProps {
  count?: number;
  className?: string;
}

/**
 * Lớp nền "sao lấp lánh" trang trí cho các section nền tối (#140728, #1a0a2e...).
 * Thuần CSS, không ảnh nặng — đặt absolute inset-0 phía sau nội dung section.
 * Dùng: <section className="relative ..."><StarField /><div className="relative z-10">...</div></section>
 */
export function StarField({ count = 60, className = "" }: StarFieldProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.6 + 0.6,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2.5,
        opacity: Math.random() * 0.5 + 0.25,
      })),
    [count]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-[#F5D78E]"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `star-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.85); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
