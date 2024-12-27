import React, { useState } from "react";
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
import Skills from "../Skills";
import Project from "../Project";
import About from "../About";
import Experience from "../Experience";
import Footer from "../Footer/inde";
import { SiLivewire } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

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
    @media (max-width: 600px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    & > h1 {
      font-size: 80px;
      @media (max-width: 600px) {
        font-size: 30px;
      }
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
      @media (max-width: 600px) {
        font-size: 25px;
      }
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
  background-image: linear-gradient(to top, #13131f, #08080d);
  font-family: "Roboto", sans-serif;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;

  & > .wrapper-search {
    width: 100%;
    max-width: 1600px;
    margin: 50px 0;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
    }
    & > .titleSection {
      max-width: 50%;
      font-size: 55px;
      margin-bottom: 20px;
      @media (max-width: 900px) {
        width: 100%;
        align-items: center;
        text-align: center;
      }
      @media (max-width: 600px) {
        font-size: 25px;
      }
    }
  }

  & > .wrapper-search > input {
    font-size: 18px;
    padding: 15px;
    width: 100%;
    color: white;
    background-color: #13131d;
    box-shadow: 3px 3px 24px -10px rgba(0, 0, 0, 1);
    max-width: 700px;
    border: none;
    border-radius: 5px;
    @media (max-width: 900px) {
      width: 100%;
      align-items: center;
      text-align: center;
    }
    @media (max-width: 600px) {
      max-width: 350px;
    }
  }

  & > .wrapper-search > input:focus {
    outline: none;
  }

  & > .titleSection::selection {
    background-color: #8257e6;
    color: white;
  }
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
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  & > .boxProject {
    box-shadow: -13px -7px 53px -6px #000000c8;
    max-height: 700px;
    height: 250px;
    max-width: 700px;
    min-width: 700px;
    display: flex;
    align-items: star;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    @media (max-width: 600px) {
      padding: 20px;
    }
    & > .boxIcon {
      padding: 5px;
      font-size: 45px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;
      @media (max-width: 600px) {
        font-size: 20px;
        padding: 5px;
      }
    }

    & > .headerProject {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      padding: 10px 0;
      & > .github {
        min-width: 80px;
        font-size: 45px;
        display: flex;
        gap: 24;
      }
      & > .titleProject {
        & > h2 {
          font-size: 30px;
          padding: 10px;
          @media (max-width: 600px) {
            font-size: 15px;
          }
        }

        & > h3 {
          font-size: 18px;
          padding: 10px;
          color: #846495;
          @media (max-width: 600px) {
            font-size: 15px;
          }
        }
      }
    }
    & > p {
      text-align: justify;
      font-size: 16px;
      padding: 5px;
      @media (max-width: 600px) {
        font-size: 13px;
      }
    }

    & > .ferramenta {
      font-size: 22px;
      font-weight: bold;
      color: #8257e6;
      @media (max-width: 600px) {
        font-size: 15px;
      }
    }
  }
`;

const projects = [
  {
    title: "Restaurant Web App",
    subtitle: "Front-and | UI",
    description:
      "O Restaurant App é uma aplicação web moderna, desenvolvida com React e TypeScript, que oferece aos usuários a capacidade de explorar e filtrar uma ampla variedade de pratos disponíveis no cardápio de um restaurante.",
    tools: [SiSass, SiTypescript, FaReact],
    githubUrl: "https://github.com/Matheus1415/restaurante",
    githubMessage: "Aluroni",
  },
  {
    title: "NearbyApp",
    subtitle: "Front-and | UI | Mobile",
    description:
      "O Restaurant App é uma aplicação web moderna, desenvolvida com React e TypeScript, que oferece aos usuários a capacidade de explorar e filtrar uma ampla variedade de pratos disponíveis no cardápio de um restaurante.",
    tools: [SiTypescript, FaReact, FaCss3Alt ],
    githubUrl: "https://github.com/Matheus1415/NearbyApp",
    githubMessage: "NearbyApp",
    figmaUrl:'https://www.figma.com/community/file/1448070647757721748/nlw-pocket-mobile-nearby',
    figmaMessage:'NearbyApp Figma'
  },
  {
    title: "Space Explorer",
    subtitle: "Front-and | UI",
    description:
      "O Space Explorer é um site com temática espacial onde os usuários podem explorar fotos de galáxias, luas e planetas. A aplicação é uma single-page, apresentando uma única página estática. Os usuários podem filtrar as imagens por tags ou realizar uma pesquisa.",
    tools: [SiSass, SiTypescript, FaReact],
    githubUrl: "https://github.com/Matheus1415/siteEspacial",
    githubMessage: "Space Explorer",
  },
  {
    title: "Pomodoro",
    subtitle: "Front-and | Lógica",
    description:
      "O Pomodoro é um projeto simples desenvolvido com HTML, CSS, TypeScript e JavaScript. Ele permite criar uma lista de tarefas com um cronômetro, onde as tarefas são marcadas como concluídas quando o tempo acabar.",
    tools: [FaHtml5, FaCss3Alt, IoLogoJavascript, SiTypescript],
    githubUrl: "https://github.com/Matheus1415/Comodoro",
    githubMessage: "Pomodoro",
  },
  {
    title: "Gerenciador de Estudos",
    subtitle: "Front-and | UI | Lógica",
    description:
      "O Gerenciador de Estudos é uma aplicação single-page desenvolvida com TypeScript, React e Sass. Ele permite que você gerencie seu tempo de estudo, incluindo um cronômetro para controlar o tempo dedicado a cada assunto.",
    tools: [SiSass, SiTypescript, FaReact],
    githubUrl: "https://github.com/Matheus1415/gerenciador-de-estudo",
    githubMessage: "Gerenciador de Estudos",
  },
  {
    title: "Gerenciador de Evento",
    subtitle: "Front-and | UI | Lógica | Recoil",
    description:
      "O Gerenciador de Eventos é uma aplicação single-page desenvolvida com TypeScript, React e Sass. Ele permite que você gerencie seu calendário de eventos, podendo adicionar eventos, filtrar eventos por datas usando Hook personalizando usando Recoil.",
    tools: [SiSass, SiTypescript, FaReact],
    githubUrl: "https://github.com/Matheus1415/Gerenciador-de-eventos",
    githubMessage: "Gerenciador de Evento",
  },
  {
    title: "Tech Innovation Hub",
    subtitle: "Back-and | Lógica | API-REST",
    description:
      "Essa API foi desenvolvida usando o Laravel e implementa um sistema para gerenciar usuários, startups e propostas de investimentos. A seguir, apresentamos a estrutura geral e os endpoints que a API oferece.",
    tools: [TbBrandLaravel, SiMysql],
    githubUrl: "https://github.com/Matheus1415/TechInnovationHub",
    githubMessage: "Tech Innovation Hub",
  },
  {
    title: "FreelanceHours",
    subtitle: "Back-and | Lógica | API-REST | Laravel",
    description:
      "O FreelanceHours é um projeto full-stack desenvolvido com Laravel (framework PHP) e Livewire para construção de aplicações dinâmicas e responsivas. A plataforma conecta criadores de ideias a patrocinadores interessados, permitindo que criadores registrem suas ideias de projetos e patrocinadores enviem propostas para financiar ou colaborar com essas ideias.",
    tools: [TbBrandLaravel, SiMysql,SiLivewire],
    githubUrl: "https://github.com/Matheus1415/FreelanceHours",
    githubMessage: "FreelanceHours",
    figmaUrl:'https://www.figma.com/community/file/1425095508121835225/freelancehours-evento-php',
    figmaMessage:'FreelanceHours Figma'
  },
  {
    title: "Mendel",
    subtitle: "Front-and | Back-and | Lógica | Tech Lead | Project management",
    description:
      "Este projeto de genética interativa foi desenvolvido para proporcionar uma experiência educacional rica em conceitos genéticos, utilizando um design interativo e visualmente atraente.",
    tools: [
      SiChakraui,
      IoLogoJavascript,
      FaReact,
      BsTrello,
      FaGitAlt,
      FaGithub,
    ],
    githubUrl: "https://github.com/Matheus1415/Mendel",
    githubMessage: "Mendel",
    siteUrl:"https://mendel-legacy.netlify.app/",
    siteMessage:"Acesse o Mendel",
  },
  {
    title: "in.orbit",
    subtitle: "Front-and | Back-and | Lógica | UI",
    description:
      "O projeto é um site desktop de registro de metas com progresso semanal.",
    tools: [
      IoLogoJavascript,
      FaReact,
      SiTypescript,
      TbBrandNodejs,
      FaDocker,
      SiMysql
    ],
    githubUrl: "https://github.com/Matheus1415/NLWPocketJS",
    githubMessage: "in.orbit",
    figmaUrl:'https://www.figma.com/community/file/1415093862269754302/nlw-pocket-js-in-orbit',
    figmaMessage:'in.orbit Figma'
  },
];

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomeContainer>
      <Menu />
      <Container id="inicio">
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
      <div className="wrapper-search">
        <h1 className="titleSection">Projetos desenvolvidos</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Pesquise pelo nome ou categoria do projeto"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ProjectContainer id="projetos">
        {filteredProjects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tools={project.tools}
            githubUrl={project.githubUrl}
            githubMessage={project.githubMessage}
            figmaMessage={project.figmaMessage}
            figmaUrl={project.figmaUrl}
            siteUrl={project.siteUrl}
            siteMessage={project.siteMessage}
          />
        ))}
      </ProjectContainer>
      <Skills />
      <About />
      <Experience />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
