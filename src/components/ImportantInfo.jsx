import styled from "styled-components";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMapSigns,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

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
  margin: 0 0 14px;
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
  padding: 14px;
  border-radius: 18px;
  background: rgba(0,0,0,.18);
  border: 1px solid rgba(255,255,255,.10);

  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const Icon = styled.div`
  min-width: 36px;
  height: 36px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.14);
  backdrop-filter: blur(8px);

  svg {
    font-size: 1.05rem;
    color: rgba(244,247,255,.95);
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.span`
  font-size: 0.75rem;
  letter-spacing: .2px;
  opacity: .7;
`;

const Value = styled.span`
  font-weight: 800;
  line-height: 1.3;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;

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
  const whatsappAdriana =
    "https://wa.me/5511973281992?text=A%20paz%20do%20Senhor,%20irm%C3%A3%20Adriana!%20Tudo%20bem%3F%0A%0AGostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20o%20Pra%20L%C3%A1%20das%20Dez%20Acamp.%0A%0APoderia%20me%20ajudar,%20por%20favor%3F";

  const mapsSaida =
    "https://www.google.com/maps?q=Ces%C3%A1rio+Lange+SP+18285-000";

  return (
    <Section id="info">
      <Card>
        <Title>Informações importantes</Title>

        <Grid>
          <Item>
            <Icon><FaMapMarkerAlt /></Icon>
            <Text>
              <Label>Destino</Label>
              <Value>Santa Cruz – Cesário Lange (18285-000)</Value>
            </Text>
          </Item>

          <Item>
            <Icon><FaClock /></Icon>
            <Text>
              <Label>Saída</Label>
             <Value>Sábado às 14 horas</Value>

            </Text>
          </Item>

          <Item>
            <Icon><FaMapSigns /></Icon>
            <Text>
              <Label>Endereço de saída</Label>
              <Value>Rua Ernesto Augusto Cleto, 511 (Sede)</Value>
            </Text>
          </Item>

          <Item>
            <Icon><FaWhatsapp /></Icon>
            <Text>
              <Label>Dúvidas</Label>
              <Value>Secretaria Adriana • (11) 97328-1992</Value>
            </Text>
          </Item>

          {/* ✅ NOVO CARD — mesmo visual */}
          <Item>
            <Icon><FaCheckCircle /></Icon>
            <Text>
              <Label>Incluso no valor</Label>
              <Value>Alimentação • Hospedagem • Transporte</Value>
            </Text>
          </Item>
        </Grid>

        <Actions>
          <Primary href={whatsappAdriana} target="_blank" rel="noreferrer">
            <FaWhatsapp /> Falar com a Adriana
          </Primary>

          <Btn href={mapsSaida} target="_blank" rel="noreferrer">
            <FaMapMarkerAlt /> Ver endereço no mapa
          </Btn>
        </Actions>
      </Card>
    </Section>
  );
}
