// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Wrap = styled.footer`
  margin-top: 26px;
  padding: 14px 0 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 24px));
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 240px;

  @media (max-width: 520px) {
    min-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Line = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 520px) {
    justify-content: center;
  }
`;

const Copy = styled.span`
  color: rgba(244, 247, 255, 0.72);
  font-size: 0.9rem;

  @media (max-width: 520px) {
    font-size: 0.84rem;
  }
`;

const Brand = styled.span`
  color: rgba(244, 247, 255, 0.95);
  font-weight: 900;
  letter-spacing: 0.2px;
`;

const Sub = styled.span`
  color: rgba(244, 247, 255, 0.52);
  font-size: 0.82rem;

  @media (max-width: 520px) {
    font-size: 0.78rem;
  }
`;

const Right = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 520px) {
    width: 100%;
    justify-content: center;
    margin-top: 6px;
  }
`;

const IconBtn = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);

  color: rgba(244, 247, 255, 0.86);
  text-decoration: none;

  transition: transform 0.16s ease, opacity 0.16s ease, border-color 0.16s ease;

  svg {
    font-size: 1.08rem;
  }

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
    border-color: rgba(255, 255, 255, 0.18);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.55);
    outline-offset: 2px;
  }

  @media (max-width: 520px) {
    width: 36px;
    height: 36px;
    border-radius: 12px;

    svg {
      font-size: 1.02rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.16s ease, border-color 0.16s ease;
    &:hover { transform: none; }
  }
`;

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <Wrap>
      <Inner>
        <Left>
          <Line>
            <Copy>© {ano}</Copy>
            <Copy>Desenvolvido por</Copy>
            <Brand>Carboni</Brand>
          </Line>
          <Sub>Todos os direitos reservados.</Sub>
        </Left>

        <Right>
          <IconBtn
            href="https://www.instagram.com/carboni._/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Carboni"
            title="Instagram"
          >
            <FaInstagram />
          </IconBtn>

          <IconBtn
            href="https://www.linkedin.com/in/matheus-carboni-332a97304/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn do Carboni"
            title="LinkedIn"
          >
            <FaLinkedin />
          </IconBtn>

          <IconBtn
            href="https://wa.me/5511994551544"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp do Carboni"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </IconBtn>
        </Right>
      </Inner>
    </Wrap>
  );
}
