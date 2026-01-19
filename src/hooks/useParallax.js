import { useEffect, useState } from "react";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

export function useParallax(ref, { amplitude = 40, mobileAmplitude = 55 } = {}) {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (!ref?.current) return;

    let rafId = 0;

    const update = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;

      // progresso da seção dentro da tela: 0 (acabou de entrar) -> 1 (acabou de sair)
      const progress = clamp((vh - rect.top) / (vh + rect.height), 0, 1);

      // centraliza em 0 e varia de -1 a 1
      const t = (progress - 0.5) * 2;

      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const amp = isMobile ? mobileAmplitude : amplitude;

      setY(t * amp);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, amplitude, mobileAmplitude]);

  return y;
}
