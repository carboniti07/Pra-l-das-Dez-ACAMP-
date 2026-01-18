import { useEffect, useState } from "react";

export function useParallax(speed = 0.12) {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setY(window.scrollY * speed);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return y;
}
