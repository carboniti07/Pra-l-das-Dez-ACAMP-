import styled from "styled-components";

const Section = styled.section`
  width: min(1120px, calc(100% - 24px));
  margin: 26px auto;
  padding: 18px;
  border-radius: 22px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);

  @media (max-width: 520px) {
    padding: 14px;
    border-radius: 18px;
    width: min(1120px, calc(100% - 18px));
  }
`;

const Title = styled.h2`
  margin: 0 0 14px;
`;

const Item = styled.details`
  padding: 14px;
  border-radius: 16px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.10);
  margin-bottom: 12px;

  summary {
    cursor: pointer;
    font-weight: 800;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  p {
    margin: 10px 0 0;
    opacity: 0.92;
    line-height: 1.5;
  }
`;

export default function FAQ() {
  return (
    <Section id="faq">
      <Title>Dúvidas frequentes</Title>

      <Item>
        <summary>Quem pode participar?</summary>
        <p>
          Jovens e adultos que desejarem participar do Pra Lá das Dez Acamp.
          Se você tem vontade de viver dias de comunhão, adoração e diversão,
          inscreva-se agora!
        </p>
      </Item>

      <Item>
        <summary>Posso levar amigos?</summary>
        <p>
          Pode sim! Amigos são muito bem-vindos.
          Basta que cada participante realize sua própria inscrição no formulário
          e siga as orientações do evento.
        </p>
      </Item>

      <Item>
        <summary>Tenho alergia alimentar ou restrição médica. O que faço?</summary>
        <p>
          É muito importante nos informar previamente sobre qualquer alergia
          alimentar, restrição médica ou necessidade especial,
          para que possamos cuidar de você da melhor forma possível durante o Acamp.
        </p>
      </Item>
      <Item>

        <summary>O que devo levar?</summary>
        <p>
          Cada participante deve levar roupa de cama (lençol, cobertor ou travesseiro,
          se preferir) e seus itens pessoais de higiene e uso diário.
          A alimentação, hospedagem e transporte já estão inclusos no valor do acampamento.
        </p>
      </Item>

      <Item>
        <summary>Como funciona o pagamento?</summary>
        <p>
          Após realizar o cadastro no formulário, você receberá as orientações
          para efetuar o pagamento e garantir sua vaga.
        </p>
      </Item>

      <Item>
        <summary>Quando minha vaga é confirmada?</summary>
        <p>
          A vaga é confirmada somente após o preenchimento do formulário
          e a confirmação do pagamento com o envio do comprovante.
        </p>
 </Item>
        <Item>
          <summary>Quais são as formas de pagamento?</summary>
          <p>
            O pagamento pode ser realizado via <strong>Pix</strong> ou <strong>cartão de débito e crédito</strong>.
            No cartão, o pagamento pode ser à vista ou parcelado, sujeito às taxas da operadora.
            Pagamentos via Pix devem ter o comprovante enviado para o número informado.
            O pagamento com cartão é realizado somente de forma presencial.
          </p>
        </Item>


     
    </Section>
  );
}
