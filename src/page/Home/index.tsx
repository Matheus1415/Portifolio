//Libs
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
//Component
import { Menu } from "../../components/Menu";
import Skills from "../../components/Skills";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Footer from "../../components/Footer/inde";
import Project from "../../components/Project";
//Icons
import { SiSass, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import { BsTrello } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import HeroSection from "../../components/HeroSection";
import { HardSkills } from "../../components/HardSkills";
//Jsons

const HomeContainer = styled.section`
  background-image: linear-gradient(to top, #13131f, #08080d);
  font-family: "Roboto", sans-serif;
  color: white;
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
    cursor: pointer;
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

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedMessage = styled.h1`
  font-size: 2rem;
  color: #2e213f;
  text-align: center;
  margin: 2rem 0;
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    color: #39294e;
    transform: scale(1.05);
    transition: transform 0.3s ease, color 0.3s ease;
  }
`;

const projects = [
  {
    id: 1,
    title: "Restaurant Web App",
    subtitle: "Front-end | UI",
    description:
      "O Restaurant App é uma aplicação web moderna, desenvolvida com React e TypeScript, que oferece aos usuários a capacidade de explorar e filtrar uma ampla variedade de pratos disponíveis no cardápio de um restaurante.",
    tools: [SiSass, SiTypescript, FaReact], // Usando os ícones importados
    githubUrl: "https://github.com/Matheus1415/Cardapio-online",
    githubMessage: "Aluroni",
  },
  {
    id: 2,
    title: "NearbyApp",
    subtitle: "Front-end | UI | Mobile",
    description:
      "Este aplicativo desenvolvido com React Native e Expo permite aos usuários visualizar a localização de estabelecimentos próximos, acessar suas páginas e resgatar cupons utilizando QR Codes.",
    tools: [SiTypescript, FaReact, FaCss3Alt],
    githubUrl: "https://github.com/Matheus1415/NearbyApp",
    githubMessage: "NearbyApp",
    figmaUrl:
      "https://www.figma.com/community/file/1448070647757721748/nlw-pocket-mobile-nearby",
    figmaMessage: "NearbyApp Figma",
  },
  {
    id: 3,
    title: "Pomodoro",
    subtitle: "Front-end | Lógica",
    description:
      "O Pomodoro é um projeto simples desenvolvido com HTML, CSS, TypeScript e JavaScript. Ele permite criar uma lista de tarefas com um cronômetro, onde as tarefas são marcadas como concluídas quando o tempo acabar.",
    tools: [FaHtml5, FaCss3Alt, IoLogoJavascript, SiTypescript],
    githubUrl: "https://github.com/Matheus1415/Comodoro",
    githubMessage: "Pomodoro",
  },
  {
    id: 4,
    title: "Tech Innovation Hub",
    subtitle: "Back-end | Lógica | API-REST",
    description:
      "Essa API foi desenvolvida usando o Laravel e implementa um sistema para gerenciar usuários, startups e propostas de investimentos. A seguir, apresentamos a estrutura geral e os endpoints que a API oferece.",
    tools: [TbBrandLaravel, SiMysql],
    githubUrl: "https://github.com/Matheus1415/TechInnovationHub",
    githubMessage: "Tech Innovation Hub",
  },
  {
    id: 5,
    title: "Mendel",
    subtitle: "Front-end | Back-end | Lógica | Tech Lead | Project management",
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
    siteUrl: "https://mendel-legacy.netlify.app/",
    siteMessage: "Acesse o Mendel",
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
      <HeroSection />
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
        {filteredProjects.length === 0 ? (
          <AnimatedMessage>
            Ops! esse projeto não foi encontrado.
          </AnimatedMessage>
        ) : (
          filteredProjects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
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
          ))
        )}
      </ProjectContainer>
      <Skills />
      <HardSkills/>
      <About />
      <Experience />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
