import styled from "styled-components";
import { useRef } from "react";
import { useParallax } from "../hooks/useParallax";

const Wrap = styled.section`
  position: relative;
  height: min(62vh, 560px);
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 24px;
  margin: 34px auto;
  width: min(1120px, calc(100% - 24px));

  @media (max-width: 520px) {
    height: 46vh;
    border-radius: 18px;
    margin: 22px auto;
    width: min(1120px, calc(100% - 18px));
  }
`;

const Img = styled.div`
  position: absolute;

  /* ✅ evita flicker no mobile (melhor que inset) */
  top: -40px;
  bottom: -40px;
  left: 0;
  right: 0;

  background-image: url(${(p) => p.$src});
  background-size: cover;

  /* foco controlável por foto */
  background-position: ${(p) => p.$pos || "center"};

  /* parallax */
  transform: translate3d(0, ${(p) => p.$y}px, 0) scale(1.03);
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  /* ✅ Mobile: mantém efeito, mas mais suave e estável */
  @media (max-width: 768px) {
    top: -26px;
    bottom: -26px;

    background-position: ${(p) => p.$mobilePos || p.$pos || "center"};

    /* reduz o movimento no celular pra evitar “piscadas” */
    transform: translate3d(0, ${(p) => p.$y * 0.6}px, 0) scale(1.02);
  }

  /* Se o usuário tiver "reduzir movimento" ligado, desativa o parallax */
  @media (prefers-reduced-motion: reduce) {
    transform: none;
    will-change: auto;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(7,10,18,.45) 0%,
    rgba(7,10,18,.18) 50%,
    rgba(7,10,18,.55) 100%
  );
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  padding: 18px;
  max-width: 860px;

  @media (max-width: 520px) {
    padding: 14px;
  }
`;

const Title = styled.h2`
  margin: 0 0 8px;
  font-size: clamp(20px, 3.2vw, 36px);
  letter-spacing: .2px;
`;

const Sub = styled.p`
  margin: 0;
  opacity: .92;
  font-size: clamp(13px, 1.8vw, 18px);
  line-height: 1.4;
`;

export function ParallaxSection({ src, title, subtitle, pos, mobilePos }) {
  const ref = useRef(null);

  // ✅ mais estável no mobile (sem “piscadas”)
  const y = useParallax(ref, { amplitude: 35, mobileAmplitude: 35 });

  return (
    <Wrap ref={ref}>
      <Img $src={src} $y={y} $pos={pos} $mobilePos={mobilePos} />
      <Overlay />
      <Content>
        <Title>{title}</Title>
        <Sub>{subtitle}</Sub>
      </Content>
    </Wrap>
  );
}
