// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Wrap = styled.footer`
  margin-top: 34px;
  padding: 26px 0 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.03);
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 240px;
`;

const BrandLine = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
`;

const Copy = styled.span`
  color: rgba(244, 247, 255, 0.78);
  font-size: 0.95rem;
`;

const Brand = styled.span`
  color: rgba(244, 247, 255, 0.95);
  font-weight: 900;
  letter-spacing: 0.2px;
`;

const Sub = styled.span`
  color: rgba(244, 247, 255, 0.58);
  font-size: 0.85rem;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconBtn = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* Glass button */
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);

  color: rgba(244, 247, 255, 0.86);
  text-decoration: none;

  transition: transform 0.18s ease, opacity 0.18s ease, border-color 0.18s ease;

  svg {
    font-size: 1.18rem;
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

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.18s ease, border-color 0.18s ease;
    &:hover {
      transform: none;
    }
  }
`;

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <Wrap>
      <Inner>
        <Left>
          <BrandLine>
            <Copy>© {ano}</Copy>
            <Copy>Desenvolvido por</Copy>
            <Brand>Carboni</Brand>
          </BrandLine>
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
