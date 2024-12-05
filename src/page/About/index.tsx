import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  background-color: #08080d;
  color: white;
  width: 100%;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  & > .about-wrapper {
    max-width: 1200px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;

    & > .title {
      font-size: 40px;
      color: #8257e6;
      font-weight: bold;
    }

    & > .content {
      font-size: 18px;
      line-height: 1.8;
      text-align: justify;

      & > span {
        color: #8257e6;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    & > .about-wrapper {
      padding: 0 20px;
      text-align: center;

      & > .content {
        text-align: center;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutContainer id="sobre">
      <div className="about-wrapper">
        <div className="title">Sobre Mim</div>
        <div className="content">
          Meu nome é <span>Matheus</span>, e sou um desenvolvedor apaixonado por 
          <span> tecnologia, inovação</span> e a criação de soluções que conectem pessoas e 
          otimizem processos. Desde que comecei minha jornada no mundo do desenvolvimento, 
          venho explorando diferentes áreas, incluindo <span>Front-End</span>, <span>Back-End</span> e 
          o meu desenvolvimento interpessoal. <br /><br />

          Ao longo da minha trajetória, adquiri experiência em ferramentas e tecnologias como 
          <span> React, TypeScript, Laravel, MySQL</span>, entre outras. Além disso, tenho um 
          forte compromisso em sempre aprender, evoluir e colaborar em projetos que fazem a 
          diferença na vida das pessoas. <br /><br />

          Quando não estou codificando, gosto de explorar novas metodologias, me engajar em 
          projetos desafiadores e compartilhar conhecimento com a comunidade. Acredito que 
          a combinação de <span>dedicação</span> e <span>curiosidade</span> é a chave para o sucesso 
          no mundo da tecnologia.
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
