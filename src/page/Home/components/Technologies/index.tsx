import {
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiJsonwebtokens,
  SiMongodb,
  SiGit,
  SiGithub,
  SiTrello,
  SiJira,
  SiScrumalliance,
} from "react-icons/si";
import {
  Container,
  TechGrid,
  TechBox,
  TechnologiesContainer,
  Image,
} from "./styles";
import { FaReact } from "react-icons/fa";

export function Technologies() {
  return (
    <TechnologiesContainer>
      <div className="info">
        <h1>Ferramentas de trabalho</h1>
        <div className="text">
          <p>
            Conheça as principais áreas em que atuo no desenvolvimento de
            software. Com foco em qualidade, organização e eficiência, busco
            criar soluções que atendam às necessidades reais de cada projeto.
            Seja no desenvolvimento de interfaces intuitivas, na construção de
            arquiteturas robustas, no gerenciamento de dados ou na automação de
            processos, minha atuação é guiada por resultados que agregam valor e
            otimizam o tempo do cliente.
          </p>
        </div>
      </div>
      <Container>
        <TechGrid>
          <TechBox variant="primary">
            <div className="content">
              <h3>Competências em Front-end</h3>
              <p>
                Tenho experiência sólida com React e TypeScript, desenvolvendo
                interfaces modernas, responsivas e eficientes.
              </p>
              <p>
                Utilizo Styled Components, Tailwind CSS, CSS puro e Bootstrap
                para estilização, garantindo flexibilidade e consistência no
                design.
              </p>
              <p className="tech-icons">
                <FaReact title="React" />
                <SiTypescript title="TypeScript" />
                <SiStyledcomponents title="Styled Components" />
                <SiTailwindcss title="Tailwind CSS" />
                <SiCss3 title="CSS3" />
                <SiBootstrap title="Bootstrap" />
              </p>
            </div>
            <Image
              src="./image/cards/card-front.png"
              alt="Front-end logo"
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </TechBox>

          <TechBox variant="secondary">
            <div className="content">
              <h3>Competências em Back-end</h3>
              <p>
                Tenho ampla experiência em desenvolvimento back-end com PHP e
                Laravel, criando sistemas robustos, seguros e escaláveis.
                Utilizo boas práticas para garantir performance e manutenção
                facilitada.
              </p>
              <p className="tech-icons">
                <SiPhp title="PHP" />
                <SiLaravel title="Laravel" />
                <SiMysql title="MySQL" />
                <SiJsonwebtokens title="JWT" />
              </p>
            </div>

            <Image
              src="./image/cards/card-back.png"
              alt="Back-end logo"
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </TechBox>

          <TechBox variant="secondary">
            <div className="content">
              <h3>Gestão de Projetos</h3>
              <p>
                Tenho domínio do Git e GitHub, utilizando-os para versionamento
                de código, revisão em equipe e organização de tarefas com GitHub
                Projects e Trello. Acompanho fluxos ágeis com metodologias como
                Scrum e Agile, promovendo entregas mais eficientes.
              </p>
              <p className="tech-icons">
                <SiGit title="Git" />
                <SiGithub title="GitHub" />
                <SiTrello title="Trello" />
                <SiJira title="Jira" />
                <SiScrumalliance title="Scrum" />
              </p>
            </div>

            <Image
              src="./image/cards/card-manager.png"
              alt="Back-end logo"
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </TechBox>

          <TechBox variant="primary">
            <div className="content">
              <h3>Gestão de Bancos de Dados</h3>
              <p>
                Tenho ampla experiência na modelagem, criação e otimização de
                bancos de dados relacionais com MySQL, garantindo estrutura
                sólida, desempenho e escalabilidade.
              </p>
              <p>
                Também possuo conhecimentos em bancos NoSQL como MongoDB e
                soluções como Redis e Firebase, permitindo trabalhar com
                diferentes tipos de arquiteturas de dados.
              </p>
              <p className="tech-icons">
                <SiMysql title="MySQL" />
                <SiMongodb title="MongoDB" />
              </p>
            </div>
            <Image
              src="./image/cards/card-database.png"
              alt="Back-end logo"
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </TechBox>
        </TechGrid>
      </Container>
    </TechnologiesContainer>
  );
}
