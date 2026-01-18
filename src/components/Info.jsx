import styled from "styled-components";

const Wrap = styled.section`
  width: min(1120px, calc(100% - 32px));
  margin: 26px auto 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 14px;
`;

const Card = styled.div`
  grid-column: span 12;
  padding: 16px;
  border-radius: 18px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);

  @media (min-width: 760px) {
    grid-column: span 4;
  }
`;

const H = styled.h3`
  margin: 0 0 8px;
  font-size: 16px;
`;

const P = styled.p`
  margin: 0;
  opacity: .92;
  line-height: 1.45;
`;

export function Info() {
  return (
    <Wrap id="info">
      <Grid>
        <Card>
          <H>📅 Data</H>
          <P>14 e 15 de fevereiro</P>
        </Card>
        <Card>
          <H>💰 Investimento</H>
          <P>R$ 80,00 por pessoa</P>
        </Card>
        <Card>
          <H>🧑‍🤝‍🧑 Público</H>
          <P>A partir dos 16 anos</P>
        </Card>
      </Grid>
    </Wrap>
  );
}
