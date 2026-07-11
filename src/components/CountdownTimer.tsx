import { useEffect, useState } from "react";

const STORAGE_KEY = "rebirth_promo_deadline";
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 giờ

function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + WINDOW_MS;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const ts = parseInt(stored, 10);
    if (!Number.isNaN(ts) && ts > Date.now()) return ts;
  }
  const deadline = Date.now() + WINDOW_MS;
  window.localStorage.setItem(STORAGE_KEY, String(deadline));
  return deadline;
}

function formatPart(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export function CountdownTimer() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const deadline = getDeadline();
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (remaining === null || remaining <= 0) return null;

  const totalSeconds = Math.floor(remaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3" data-testid="countdown-timer">
      {[hours, minutes, seconds].map((val, i) => (
        <div key={i} className="flex items-center gap-2 md:gap-3">
          <div className="bg-white/5 border border-[#C9A84C]/30 rounded-xl px-3.5 py-2 md:px-5 md:py-3 min-w-[54px] md:min-w-[68px] text-center">
            <span className="text-2xl md:text-3xl font-bold font-serif text-[#F5D78E] tabular-nums">
              {formatPart(val)}
            </span>
          </div>
          {i < 2 && <span className="text-[#C9A84C] text-xl font-bold">:</span>}
        </div>
      ))}
    </div>
  );
}
