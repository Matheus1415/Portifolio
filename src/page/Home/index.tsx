import React from "react";
import styled from "styled-components";
import { InteractiveFace } from "../../components/InteractiveFace";
import { Menu } from "../../components/Menu";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import Tooltip from "../../components/Tooltip";
import { SiSass } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import { BsTrello } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";

const Container = styled.section`
  min-height: 910px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  & > .box50 {
    color: white;
    width: 50%;
    min-height: 400px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    & > h1 {
      font-size: 80px;
      & > span {
        color: #8257e6;
        &::selection {
          background-color: #8257e6;
          color: white;
        }
      }
      &::selection {
        background-color: #8257e6;
      }
    }

    & > h2 {
      font-size: 45px;
      font-family: "Anton", sans-serif;
      &::selection {
        background-color: #8257e6;
      }
    }

    & > .boxIcon {
      padding: 5px;
      font-size: 45px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;
    }

    @media (max-width: 900px) {
      width: 100%;
      align-items: center;
      text-align: center;
    }
  }
`;

const HomeContainer = styled.section`
  background-image: linear-gradient(to top, #13131f, #000000);
  font-family: "Roboto", sans-serif;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProjectContainer = styled.section`
  font-family: "Roboto", sans-serif;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 50px 200px;
  padding-bottom: 50px;
  flex-wrap: wrap;
  min-height: 500px;
  & > .boxProject {
    box-shadow: -13px -7px 53px -6px #000000c8;
    max-height: 700px;
    height: 250px;
    max-width: 700px;
    display: flex;
    align-items: star;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    & > .boxIcon {
      padding: 5px;
      font-size: 45px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;
    }

    & > .headerProject {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      padding: 10px 0;
      & > .github {
        font-size: 45px;
      }
      & > .titleProject {
        & > h2 {
          font-size: 30px;
          padding: 10px;
        }

        & > h3 {
          font-size: 18px;
          padding: 10px;
          color: #846495;
        }
      }
    }
    & > p {
      text-align: justify;
      font-size: 16px;
      padding: 5px;
    }

    & > .ferramenta {
      font-size: 22px;
      font-weight: bold;
      color: #8257e6;
    }
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Menu />
      <Container>
        <div className="box50">
          <h1>
            Olá, eu sou o <span>Matheus</span>
          </h1>
          <h2>Desenvolvedor full-stack</h2>
          <div className="boxIcon">
            <Tooltip
              icon={<FaGithub />}
              message="matheus1415"
              url="https://github.com/Matheus1415"
            />
            <Tooltip
              icon={<FaInstagram />}
              message="@mps_devaretado"
              url="https://www.instagram.com/mps_devaretado/"
            />
            <Tooltip
              icon={<FaLinkedin />}
              message="matheus-pereira-da-silva"
              url="https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/"
            />
          </div>
        </div>
        <div className="box50">
          <InteractiveFace />
        </div>
      </Container>
      <ProjectContainer>
        <div className="boxProject">
          <div className="headerProject">
            <div className="titleProject">
              <h2>Restaurant Web App</h2>
              <h3>Front-and | UI</h3>
            </div>
            <div className="github">
              <Tooltip
                icon={<FaGithub />}
                message="Aluroni"
                url="https://github.com/Matheus1415/restaurante"
              />
            </div>
          </div>
          <p>
            O Restaurant App é uma aplicação web moderna, desenvolvida com React
            e TypeScript, que oferece aos usuários a capacidade de explorar e
            filtrar uma ampla variedade de pratos disponíveis no cardápio de um
            restaurante.
          </p>
          <p className="ferramenta">Ferramentas:</p>
          <div className="boxIcon">
            <SiSass />
            <SiTypescript />
            <FaReact />
          </div>
        </div>

        <div className="boxProject">
          <div className="headerProject">
            <div className="titleProject">
              <h2>Space Explorer</h2>
              <h3>Front-and | UI</h3>
            </div>
            <div className="github">
              <Tooltip
                icon={<FaGithub />}
                message="Space Explorer"
                url="https://github.com/Matheus1415/siteEspacial"
              />
            </div>
          </div>
          <p>
            O Space Explorer é um site com temática espacial onde os usuários
            podem explorar fotos de galáxias, luas e planetas. A aplicação é uma
            single-page, apresentando uma única página estática. Os usuários
            podem filtrar as imagens por tags ou realizar uma pesquisa.
          </p>
          <p className="ferramenta">Ferramentas:</p>
          <div className="boxIcon">
            <SiSass />
            <SiTypescript />
            <FaReact />
          </div>
        </div>

        <div className="boxProject">
          <div className="headerProject">
            <div className="titleProject">
              <h2>Comodoro</h2>
              <h3>Front-and | Lógica</h3>
            </div>
            <div className="github">
              <Tooltip
                icon={<FaGithub />}
                message="Space Explorer"
                url="https://github.com/Matheus1415/Comodoro"
              />
            </div>
          </div>
          <p>
            O Comodoro é um projeto simples desenvolvido com HTML, CSS,
            TypeScript e JavaScript. Ele permite criar uma lista de tarefas com
            um cronômetro, onde as tarefas são marcadas como concluídas quando o
            tempo acabar. Este projeto depende da utilização do Live Server para
            funcionar corretamente.
          </p>
          <p className="ferramenta">Ferramentas:</p>
          <div className="boxIcon">
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <SiTypescript />
          </div>
        </div>

        <div className="boxProject">
          <div className="headerProject">
            <div className="titleProject">
              <h2>Gerenciador de Estudos</h2>
              <h3>Front-and | UI | Lógica</h3>
            </div>
            <div className="github">
              <Tooltip
                icon={<FaGithub />}
                message="Gerenciador de Estudos"
                url="https://github.com/Matheus1415/gerenciador-de-estudo"
              />
            </div>
          </div>
          <p>
            O Gerenciador de Estudos é uma aplicação single-page desenvolvida
            com TypeScript, React e Sass. Ele permite que você gerencie seu
            tempo de estudo, incluindo um cronômetro para controlar o tempo
            dedicado a cada assunto. Além disso, possui um formulário para
            adicionar o tempo e o assunto que você deseja estudar.
          </p>
          <p className="ferramenta">Ferramentas:</p>
          <div className="boxIcon">
            <SiSass />
            <SiTypescript />
            <FaReact />
          </div>
        </div>

        <div className="boxProject">
          <div className="headerProject">
            <div className="titleProject">
              <h2>Tech Innovation Hub</h2>
              <h3>Back-and | Lógica | API-REST</h3>
            </div>
            <div className="github">
              <Tooltip
                icon={<FaGithub />}
                message="Tech Innovation Hub"
                url="https://github.com/Matheus1415/TechInnovationHub"
              />
            </div>
          </div>
          <p>
            Essa API foi desenvolvida usando o Laravel e implementa um sistema
            para gerenciar usuários, startups e propostas de investimentos. A
            seguir, apresentamos a estrutura geral e os endpoints que a API
            oferece, bem como as instruções para autenticação e exemplos de uso.
          </p>
          <p className="ferramenta">Ferramentas:</p>
          <div className="boxIcon">
            <TbBrandLaravel />
            <SiMysql />
          </div>
        </div>

        <div className="boxProject">
          <div className="headerProject">
            <div className="titleProject">
              <h2>Mendel</h2>
              <h3>
                Font-and | Back-and | Lógica | Tech Lead | Project management
              </h3>
            </div>
            <div className="github">
              <Tooltip
                icon={<FaGithub />}
                message="Mendel"
                url="https://github.com/Matheus1415/Mendel"
              />
            </div>
          </div>
          <p>
            Este projeto de genética interativa foi desenvolvido para
            proporcionar uma experiência educacional rica em conceitos
            genéticos, utilizando um design interativo e visualmente atraente.
            Ele abrange desde as Leis de Mendel até genética avançada, incluindo
            herança ligada ao sexo, com várias seções detalhadas e
            funcionalidades interativas.{" "}
          </p>
          <p className="ferramenta">Ferramentas:</p>
          <div className="boxIcon">
            <SiChakraui />
            <IoLogoJavascript />
            <FaReact />
            <BsTrello />
            <FaGitAlt />
            <FaGithub />
          </div>
        </div>
      </ProjectContainer>
    </HomeContainer>
  );
};

export default Home;
