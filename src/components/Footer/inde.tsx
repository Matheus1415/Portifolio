import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #0e1116;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © {new Date().getFullYear()} Desenvolvido por Matheus. Todos os
          direitos reservados.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
