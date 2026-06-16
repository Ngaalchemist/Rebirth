import React, { useEffect, useRef } from "react";

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      velocity: (Math.random() - 0.5) * 0.02,
    }));

    const supernovas = Array.from({ length: 4 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      alpha: Math.random(),
      velocity: (Math.random() - 0.5) * 0.01,
      glow: Math.random() * 10,
      glowVelocity: 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw normal stars
      stars.forEach((star) => {
        star.alpha += star.velocity;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.velocity = -star.velocity;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      // Draw supernovas
      supernovas.forEach((star) => {
        star.alpha += star.velocity;
        star.glow += star.glowVelocity;

        if (star.alpha <= 0.2 || star.alpha >= 1) {
          star.velocity = -star.velocity;
        }
        if (star.glow <= 5 || star.glow >= 20) {
          star.glowVelocity = -star.glowVelocity;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${star.alpha})`;
        ctx.shadowBlur = star.glow;
        ctx.shadowColor = "rgba(201, 168, 76, 1)";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow blur
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] opacity-60"
    />
  );
}
