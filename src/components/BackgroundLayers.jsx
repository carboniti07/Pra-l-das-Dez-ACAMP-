import { useEffect, useState } from "react";
import styled from "styled-components";

const Layer = styled.div`
  position: fixed;
  inset: 0;
  z-index: -3;
  background-image: url(${(p) => p.$src});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transform: scale(1.06);
  filter: blur(2px) saturate(1.08);
  opacity: ${(p) => p.$opacity};
  transition: opacity 600ms ease;
  pointer-events: none;

  /* Mobile: evita bugs do "fixed attachment" */
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const Shade = styled.div`
  position: fixed;
  inset: 0;
  z-index: -2;
  background: linear-gradient(180deg, rgba(7,10,18,.68), rgba(7,10,18,.92));
  pointer-events: none;
`;

export default function BackgroundLayers() {
  const BG1 = "/piscina.jpg";
  const BG2 = "/varanda1.jpg";
  const BG3 = "/culto.jpg";

  const [active, setActive] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = window.innerHeight;

      if (y < h * 0.8) setActive(1);
      else if (y < h * 1.8) setActive(2);
      else setActive(3);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Layer $src={BG1} $opacity={active === 1 ? 0.14 : 0} />
      <Layer $src={BG2} $opacity={active === 2 ? 0.14 : 0} />
      <Layer $src={BG3} $opacity={active === 3 ? 0.14 : 0} />
      <Shade />
    </>
  );
}
