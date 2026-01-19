import styled from "styled-components";
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
  inset: -60px 0;
  background-image: url(${(p) => p.$src});
  background-size: cover;

  background-position: ${(p) => p.$pos || "center"};

  transform: translate3d(0, ${(p) => p.$y}px, 0) scale(1.03);
  will-change: transform;

  @media (max-width: 768px) {
    inset: -30px 0;
    background-position: ${(p) => p.$mobilePos || p.$pos || "center"};
    transform: translate3d(0, ${(p) => p.$my}px, 0) scale(1.02);
  }

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
  // ✅ mais lento no desktop
  const y = useParallax(0.06);

  // ✅ mobile bem mais suave e com limite menor
 const mobileY = Math.max(-18, Math.min(18, y * 0.55));

  return (
    <Wrap>
      <Img
        $src={src}
        $y={y}
        $my={mobileY}
        $pos={pos}
        $mobilePos={mobilePos}
      />
      <Overlay />
      <Content>
        <Title>{title}</Title>
        <Sub>{subtitle}</Sub>
      </Content>
    </Wrap>
  );
}
