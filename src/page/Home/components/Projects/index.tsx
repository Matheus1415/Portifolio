import React, { useState } from "react";
import {
  Container,
  Content,
  ImageWrapper,
  MainDescription,
  MainImage,
  MainProject,
  Overlay,
  ProjectItem,
  ProjectMeta,
  ProjectTitle,
  Sidebar,
  Thumbnail,
  Title,
} from "./styles";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Mendel",
    description:
      "A aplicação de metodologias dinâmicas no ensino tem sido amplamente discutida por educadores ao redor do mundo...",
    imageLarge: "/bg/bg-mendel.png",
    imageThumb: "/bg/bg-mendel.png",
    technology: "React",
    date: 2024,
    url: "https://github.com/Matheus1415/Mendel",
  },
  {
    id: 2,
    title: "Cardápio online",
    description:
      "O Cardápio Web é uma aplicação desenvolvida com React e TypeScript voltada para restaurantes...",
    imageLarge: "/bg/bg-restaurant.png",
    imageThumb: "/bg/bg-restaurant.png",
    technology: "React",
    date: 2022,
    url: "https://github.com/Matheus1415/Cardapio-Online",
  },
  {
    id: 3,
    title: "NearByApp",
    description:
      "NearbyApp é um aplicativo mobile que utiliza geolocalização para mostrar estabelecimentos próximos...",
    imageLarge: "/bg/bg-nearbyapp.png",
    imageThumb: "/bg/bg-nearbyapp.png",
    technology: "React",
    date: 2023,
    url: "https://github.com/Matheus1415/NearbyApp",
  },
  {
    id: 4,
    title: "Timer Ignite",
    description:
      "O projeto Pomodoro permite ao usuário organizar seus projetos em ciclos de trabalho com temporizador...",
    imageLarge: "/bg/bg-ignite-timer.png",
    imageThumb: "/bg/bg-ignite-timer.png",
    technology: "React",
    date: 2024,
    url: "https://github.com/Matheus1415/Timer-Ignite",
  },
  {
    id: 5,
    title: "DevStage",
    description:
      "Projeto DevStage que permite compartilhar links personalizados para eventos, acompanhar convites...",
    imageLarge: "/bg/bg-devstage.png",
    imageThumb: "/bg/bg-devstage.png",
    technology: "React",
    date: 2024,
    url: "https://github.com/Matheus1415/DevStage",
  },
  {
    id: 6,
    title: "Pomodoro",
    description:
      "Projeto Comodoro, um cronômetro com lista de tarefas que integra controle de tempo e gerenciamento...",
    imageLarge: "/bg/bg-comodoro.png",
    imageThumb: "/bg/bg-comodoro.png",
    technology: "TypeScript",
    date: 2023,
    url: "https://github.com/Matheus1415/Pomodoro",
  },
  {
    id: 7,
    title: "TechInnovationHub",
    description:
      "Plataforma para conectar startups e investidores com autenticação segura e gestão completa...",
    imageLarge: "/bg/bg-techinnovation.png",
    imageThumb: "/bg/bg-techinnovation.png",
    technology: "Laravel",
    date: 2024,
    url: "https://github.com/Matheus1415/TechInnovationHub",
  },
  {
    id: 8,
    title: "Smart Telecom",
    description:
      "Estágio como desenvolvedor full-stack focado em desenvolvimento, segurança e banco de dados...",
    imageLarge: "/bg/bg-smart.png",
    imageThumb: "/bg/bg-smart.png",
    technology: "Laravel",
    date: 2024,
    url: "https://smarttelecom.eng.br/",
  },
  {
    id: 9,
    title: "Lms-medischool",
    description:
      "Freelancer full-stack em equipe para aprimorar e expandir funcionalidades da plataforma LmsMedischool...",
    imageLarge: "/bg/bg-lms.png",
    imageThumb: "/bg/bg-lms.png",
    technology: "php",
    date: 2024,
    url: "",
  },
  {
    id: 10,
    title: "Files System",
    description:
      "Aplicação Laravel para gerenciar arquivos e pastas com funcionalidades completas de upload, edição...",
    imageLarge: "/bg/bg-filessystem.png",
    imageThumb: "/bg/bg-filessystem.png",
    technology: "Laravel",
    date: 2025,
    url: "https://github.com/Matheus1415/FilesSystem",
  },
];

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(
    projectsData[0].id
  );

  const selectedProject = projectsData.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <Container>
      <Title>Minha Jornada em Projetos Reais</Title>
      <Content>
        <MainProject>
          <ImageWrapper
            onClick={() => {
              if (selectedProject?.url) {
                window.open(selectedProject.url, "_blank");
              }
            }}
          >
            <MainImage
              src={selectedProject?.imageLarge}
              alt={selectedProject?.title}
              loading="lazy"
            />
            <Overlay className="overlay">
              <FaExternalLinkAlt size={30}/>
            </Overlay>
          </ImageWrapper>
          <MainDescription>
            <h3>{selectedProject?.title}</h3>
            <p>{selectedProject?.description}</p>
          </MainDescription>
        </MainProject>

        <Sidebar>
          {projectsData.map((project) => (
            <ProjectItem
              key={project.id}
              active={project.id === selectedProjectId}
              onClick={() => setSelectedProjectId(project.id)}
            >
              <Thumbnail src={project.imageThumb} alt={project.title} />
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectMeta>{project.date}</ProjectMeta>
              </div>
            </ProjectItem>
          ))}
        </Sidebar>
      </Content>
    </Container>
  );
}
