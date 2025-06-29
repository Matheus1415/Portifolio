import { FooterContainer, FooterBottom, SocialLinks, BackToTop } from "./styles";
import { FaInstagram, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <FooterContainer>
      <SocialLinks>
        <a
          href="https://github.com/Matheus1415"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/mps_devaretado"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </SocialLinks>

      <hr />

      <FooterBottom>
        <p>© {new Date().getFullYear()} Matheus Pereira. Todos os direitos reservados.</p>
        <BackToTop onClick={scrollToTop} title="Voltar ao topo">
          <FaArrowUp />
        </BackToTop>
      </FooterBottom>
    </FooterContainer>
  );
}
