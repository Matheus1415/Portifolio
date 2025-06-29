import {
  CTAContainer,
  CTAContent,
  CTAInfo,
  CTAHeading,
  CTAText,
  CTAButton,
} from "./styles";
import { FaWhatsapp } from "react-icons/fa";

export function ContactCTA() {
  return (
    <CTAContainer>
      <CTAContent>
        <CTAInfo>
          <CTAHeading>Interessado em uma Landing Page ou Sistema?</CTAHeading>
          <CTAText>
            Se você quer apresentar sua empresa com uma interface visual
            impactante ou precisa de um sistema personalizado para otimizar seu
            negócio, entre em contato comigo!
          </CTAText>
          <CTAText>
            Seja uma landing page envolvente ou um sistema completo e funcional,
            posso te ajudar a transformar sua ideia em uma solução moderna,
            eficiente e sob medida.
          </CTAText>
          <CTAText>
            E se você é desenvolvedor e precisa de uma ajudinha em algum
            projeto, pode contar comigo também. Vamos conversar e montar um
            orçamento que faça sentido pra você!
          </CTAText>

          <CTAButton
            href="https://api.whatsapp.com/send?phone=85991507663&text=Olá! Gostaria de conversar sobre um projeto."
            target="_blank"
          >
            <FaWhatsapp />
            Fale comigo agora
          </CTAButton>
        </CTAInfo>
      </CTAContent>
    </CTAContainer>
  );
}
