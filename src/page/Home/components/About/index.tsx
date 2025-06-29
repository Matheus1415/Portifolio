import { AboutContainer, Container, GitHubButton } from "./styles";
import aboutSvg from "../../../../image/svg/about.svg";
export function About() {
  return (
    <AboutContainer>
      <Container
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div>
          <h2>Além do Código: Minha História</h2>
          <p>
            Meu nome é Matheus, e sou um desenvolvedor apaixonado por
            tecnologia, inovação e a criação de soluções que conectem pessoas e
            otimizem processos. Desde que comecei minha jornada no mundo do
            desenvolvimento, venho explorando diferentes áreas, incluindo
            Front-End, Back-End e o meu desenvolvimento interpessoal.
          </p>
          <p>
            Ao longo da minha trajetória,{" "}
            <span>
              adquiri experiência em ferramentas e tecnologias como React,
              TypeScript, Laravel, MySQL, entre outras.
            </span>{" "}
            Além disso, tenho um forte compromisso em sempre aprender, evoluir e
            colaborar em projetos que fazem a diferença na vida das pessoas.
          </p>
          <p>
            Quando não estou codificando,{" "}
            <span>
              gosto de explorar novas metodologias, me engajar em projetos
              desafiadores e compartilhar conhecimento
            </span>{" "}
            com a comunidade. Acredito que a combinação de dedicação e
            curiosidade é a chave para o sucesso no mundo da tecnologia.
          </p>
          <GitHubButton
            href="https://github.com/Matheus1415"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais
          </GitHubButton>
        </div>
        <img src={aboutSvg} alt="Sobre mim" />
      </Container>
    </AboutContainer>
  );
}
