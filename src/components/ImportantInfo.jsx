import styled from "styled-components";

const Section = styled.section`
  width: min(1120px, calc(100% - 24px));
  margin: 6px auto 0;
`;

const Card = styled.div`
  border-radius: 24px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  padding: 18px;

  @media (max-width: 520px) {
    padding: 14px;
    border-radius: 18px;
  }
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: clamp(18px, 2.6vw, 24px);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  padding: 12px;
  border-radius: 16px;
  background: rgba(0,0,0,.18);
  border: 1px solid rgba(255,255,255,.10);

  @media (max-width: 520px) {
    border-radius: 14px;
  }
`;

const Label = styled.div`
  font-size: 12px;
  opacity: .75;
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-weight: 800;
  line-height: 1.3;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 14px;
`;

const Btn = styled.a`
  display: inline-block;
  padding: 12px 14px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 800;
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.08);
  transition: transform .15s ease, opacity .15s ease;

  &:hover { opacity: .95; transform: translateY(-1px); }
`;

const Primary = styled(Btn)`
  background: #fff;
  color: #070A12;
  border-color: transparent;
`;

export function ImportantInfo() {
  const whatsappAdriana = "https://wa.me/5511973281992";
  const mapsSaida = "https://www.google.com/maps?q=Rua+Ernesto+Augusto+Cleto,+511";

  return (
    <Section id="info">
      <Card>
        <Title>Informações importantes</Title>

        <Grid>
          <Item>
            <Label>Destino</Label>
            <Value>Santa Cruz – Cesário Lange (18285-000)</Value>
          </Item>

          <Item>
            <Label>Saída</Label>
            <Value>14 horas</Value>
          </Item>

          <Item>
            <Label>Endereço de saída</Label>
            <Value>Rua Ernesto Augusto Cleto, 511 (Sede)</Value>
          </Item>

          <Item>
            <Label>Dúvidas</Label>
            <Value>Secretaria Adriana: (11) 97328-1992</Value>
          </Item>
        </Grid>

        <Actions>
          <Primary href={whatsappAdriana} target="_blank" rel="noreferrer">
            Falar com a Adriana (WhatsApp)
          </Primary>
          <Btn href={mapsSaida} target="_blank" rel="noreferrer">
            Ver endereço no mapa
          </Btn>
        </Actions>
      </Card>
    </Section>
  );
}
