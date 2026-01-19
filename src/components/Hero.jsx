import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 88vh;
  display: grid;
  place-items: center;
  overflow: hidden;

  @media (max-width: 520px) {
    min-height: 82vh;
  }
`;

/* ✅ Logo profissional: sem caixa, sem borda, mas bem visível */
const Logo = styled.img`
  position: absolute;
  top: 16px;
  left: 16px;
  height: 100px;
  width: auto;
  z-index: 6;
  opacity: 0.98;

  filter: drop-shadow(0 12px 22px rgba(0,0,0,.60))
          drop-shadow(0 2px 7px rgba(0,0,0,.35));

  @media (max-width: 520px) {
    top: 12px;
    left: 12px;
    height: 67px;
  }
`;

const Bg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(p) => p.$src});
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(900px 520px at 50% 34%, rgba(0,0,0,.10), rgba(7,10,18,.72)),
    linear-gradient(180deg, rgba(7,10,18,.08), rgba(7,10,18,.90));
`;

const Box = styled.div`
  position: relative;
  width: min(980px, calc(100% - 32px));
  text-align: center;
  padding: 44px 18px 22px;

  @media (max-width: 520px) {
    padding: 28px 14px 18px;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const Badge = styled.span`
  font-size: 13px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.14);
  backdrop-filter: blur(8px);
`;

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: clamp(32px, 5vw, 62px);
  letter-spacing: .2px;
`;

const Desc = styled.p`
  margin: 0 auto 20px;
  max-width: 780px;
  font-size: clamp(14px, 2vw, 18px);
  opacity: .95;
  line-height: 1.5;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  /* ✅ com 3 botões, no mobile fica mais bonito em coluna */
  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const Primary = styled.a`
  display: inline-block;
  padding: 14px 18px;
  border-radius: 16px;
  background: #ffffff;
  color: #070A12;
  font-weight: 800;
  text-decoration: none;
  min-width: 220px;
  transition: transform .15s ease, opacity .15s ease;

  &:hover { transform: translateY(-1px); opacity: .95; }

  @media (max-width: 520px) {
    min-width: 100%;
  }
`;

const Secondary = styled.a`
  display: inline-block;
  padding: 14px 18px;
  border-radius: 16px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.16);
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  min-width: 220px;
  transition: transform .15s ease, opacity .15s ease;

  &:hover { transform: translateY(-1px); opacity: .95; }

  @media (max-width: 520px) {
    min-width: 100%;
  }
`;

export function Hero({ heroSrc, formsUrl, onScrollToInfo }) {
  const scrollToFaq = () => {
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section>
      <Logo src="/logo-igreja.png" alt="Logo AD Rudge Ramos" />

      <Bg $src={heroSrc} />
      <Overlay />

      <Box>
        <BadgeRow>
          <Badge>14 e 15 de Fevereiro</Badge>
          <Badge>R$ 80,00 por pessoa</Badge>
          <Badge>GT e UMADRUR</Badge>
        </BadgeRow>

        <Title>Pra Lá das Dez Acamp</Title>
        <Desc>
          Diversão, adoração e muita celebração. Garanta sua vaga preenchendo o cadastro no formulário.
        </Desc>

        <Actions>
          <Primary href={formsUrl} target="_blank" rel="noreferrer">
            Fazer inscrição
          </Primary>

          <Secondary
            href="#info"
            onClick={(e) => {
              e.preventDefault();
              onScrollToInfo();
            }}
          >
            Ver informações
          </Secondary>

          <Secondary
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              scrollToFaq();
            }}
          >
            Dúvidas
          </Secondary>
        </Actions>
      </Box>
    </Section>
  );
}
