import { Container, TechGrid, TechBox, TechnologiesContainer } from "./styles";
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
              <h3>Front-end</h3>
              <p>
                React, Vue.js, Next.js, HTML5, CSS3, Styled Components,
                TailwindCSS
              </p>
            </div>
            <img src="./logo-mp.png" alt="Front-end logo" />
          </TechBox>

          <TechBox variant="secondary">
            <div className="content">
              <h3>Back-end</h3>
              <p>Node.js, Express, Laravel, PHP, Python, REST APIs, GraphQL</p>
            </div>
            <img src="./logo-mp.png" alt="Back-end logo" />
          </TechBox>

          <TechBox variant="secondary">
            <div className="content">
              <h3>DBA</h3>
              <p>MySQL, PostgreSQL, MongoDB, Redis, Firebase</p>
            </div>
            <img src="./logo-mp.png" alt="DBA logo" />
          </TechBox>

          <TechBox variant="primary">
            <div className="content">
              <h3>Manage</h3>
              <p>Git, Docker, CI/CD, Jira, Agile, Scrum</p>
            </div>
            <img src="./logo-mp.png" alt="Manage logo" />
          </TechBox>
        </TechGrid>
      </Container>
    </TechnologiesContainer>
  );
}
