import styled from "styled-components";
import { FaCalendarAlt, FaMoneyBillWave, FaUsers } from "react-icons/fa";

const Wrap = styled.section`
  width: min(1120px, calc(100% - 24px));
  margin: 14px auto 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 14px 16px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
  border: 1px solid rgba(255,255,255,.12);
  backdrop-filter: blur(12px);

  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 14px;

  display: grid;
  place-items: center;

  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.14);

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
  opacity: .65;
`;

const Value = styled.span`
  font-weight: 800;
  line-height: 1.3;
`;

export function Info() {
  return (
    <Wrap>
      <Grid>
        <Card>
          <Icon><FaCalendarAlt /></Icon>
          <Text>
            <Label>Data</Label>
            <Value>14 e 15 de fevereiro</Value>
          </Text>
        </Card>

        <Card>
          <Icon><FaMoneyBillWave /></Icon>
          <Text>
            <Label>Investimento</Label>
            <Value>R$ 80,00 por pessoa</Value>
          </Text>
        </Card>

        <Card>
          <Icon><FaUsers /></Icon>
          <Text>
            <Label>Público</Label>
            <Value>GT e UMADRUR</Value>
          </Text>
        </Card>
      </Grid>
    </Wrap>
  );
}
