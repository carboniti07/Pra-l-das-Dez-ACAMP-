import { useEffect, useRef, useState } from "react";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

export function useParallax(ref, { amplitude = 35, mobileAmplitude = 35 } = {}) {
  const [y, setY] = useState(0);

  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (!ref?.current) return;

    const update = () => {
      const el = ref.current;
      if (!el) {
        ticking.current = false;
        return;
      }

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;

      // progresso do elemento na viewport (0..1)
      const progress = clamp((vh - rect.top) / (vh + rect.height), 0, 1);

      // converte para faixa -1..1
      const t = (progress - 0.5) * 2;

      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const amp = isMobile ? mobileAmplitude : amplitude;

      // arredonda para evitar micro variações (flicker)
      const nextY = Math.round(t * amp);

      if (nextY !== lastY.current) {
        lastY.current = nextY;
        setY(nextY);
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, amplitude, mobileAmplitude]);

  return y;
}
