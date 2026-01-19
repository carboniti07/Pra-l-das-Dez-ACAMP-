import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import BackgroundLayers from "./components/BackgroundLayers";
import { Hero } from "./components/Hero";
import { ParallaxSection } from "./components/ParallaxSection";
import { ImportantInfo } from "./components/ImportantInfo";
import { Info } from "./components/Info";
import FAQ from "./components/FAQ";   
import Footer from "./components/Footer";



// imagens do public
const heroImg = "/culto.jpg";
const piscina = "/piscina.jpg";
const varanda1 = "/varanda1.jpg";
const culto = "/culto.jpg";

// link do Forms
const FORMS_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScXzlWl3VGwSRRw8oD4PobWm_tPuhvL94f3Tv56zJXW1Gt1cg/viewform?usp=publish-editor";

const Main = styled.main`
  padding-bottom: 18px;
`;

const CTA = styled.section`
  width: min(1120px, calc(100% - 24px));
  margin: 26px auto 6px;
  padding: 18px;
  border-radius: 22px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  text-align: center;

  @media (max-width: 520px) {
    padding: 14px;
    border-radius: 18px;
    width: min(1120px, calc(100% - 18px));
  }
`;

const Btn = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 14px 18px;
  border-radius: 16px;
  background: #ffffff;
  color: #070A12;
  font-weight: 800;
  text-decoration: none;
  min-width: 240px;
  transition: transform .15s ease, opacity .15s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: .95;
  }

  @media (max-width: 520px) {
    min-width: 100%;
  }
`;

export default function App() {
  const scrollToInfo = () => {
    document.getElementById("info")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyle />
      <BackgroundLayers />

      <Hero heroSrc={heroImg} formsUrl={FORMS_URL} onScrollToInfo={scrollToInfo} />

      <Main>
        <ParallaxSection
          src={piscina}
          title="Diversão e lazer"
          subtitle="Piscina e espaço ao ar livre para viver momentos inesquecíveis."
          pos="center 70%"
          mobilePos="center 62%"
        />

        <ImportantInfo />
        <Info />

        <ParallaxSection
          src={varanda1}
          title="Estrutura preparada"
          subtitle="Ambiente amplo e confortável para refeições, descanso e atividades."
          pos="center 55%"
          mobilePos="center 50%"
        />

        <ParallaxSection
          src={culto}
          title="Adoração e celebração"
          subtitle="Dois dias de comunhão, palavra e muita alegria."
          pos="center 58%"
          mobilePos="center 35%"
        />

        <FAQ /> {/* ✅ AQUI ELE APARECE */}

        <CTA>
          <h2 style={{ margin: 0 }}>Pronto para participar?</h2>
          <p style={{ margin: "10px 0 0", opacity: 0.92 }}>
            Clique no botão abaixo para preencher o cadastro no formulário.
          </p>
          <Btn href={FORMS_URL} target="_blank" rel="noreferrer">
            Inscrever-se agora
          </Btn>
        </CTA>

        <Footer />
      </Main>
      
    </>
  );
}
