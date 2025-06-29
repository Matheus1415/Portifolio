import React, { useState } from "react";
import {
  Container,
  Content,
  MainDescription,
  MainImage,
  MainProject,
  ProjectItem,
  ProjectMeta,
  ProjectTitle,
  Sidebar,
  Thumbnail,
} from "./styles";

const projectsData = [
  {
    id: 1,
    title: "Mendel",
    description: "App educativo criado para o Ceará Científico 2024.",
    imageLarge: "/bg/bg-mendel.png",
    imageThumb: "/bg/bg-mendel.png",
    technology: "React",
    date: 2024,
  },
  {
    id: 2,
    title: "Cardápio online",
    description: "Visualize e filtre pratos em um cardápio digital.",
    imageLarge: "/bg/bg-restaurant.png",
    imageThumb: "/bg/bg-restaurant.png",
    technology: "React",
    date: 2022,
  },
  {
    id: 3,
    title: "NearByApp",
    description: "Explore locais próximos e resgate cupons via QR Code.",
    imageLarge: "/bg/bg-nearbyapp.png",
    imageThumb: "/bg/bg-nearbyapp.png",
    technology: "React",
    date: 2023,
  },
  {
    id: 4,
    title: "Timer Ignite",
    description: "Gerencie seu tempo com foco e produtividade.",
    imageLarge: "/bg/bg-ignite-timer.png",
    imageThumb: "/bg/bg-ignite-timer.png",
    technology: "React",
    date: 2024,
  },
  {
    id: 5,
    title: "DevStage",
    description: "Evento online para desenvolvedores de todo o Brasil.",
    imageLarge: "/bg/bg-devstage.png",
    imageThumb: "/bg/bg-devstage.png",
    technology: "React",
    date: 2024,
  },
  {
    id: 6,
    title: "Pomodoro",
    description: "App com tarefas e cronômetro Pomodoro.",
    imageLarge: "/bg/bg-comodoro.png",
    imageThumb: "/bg/bg-comodoro.png",
    technology: "TypeScript",
    date: 2023,
  },
  {
    id: 7,
    title: "TechInnovationHub",
    description: "API em Laravel para gerenciar startups e investidores.",
    imageLarge: "/bg/bg-techinnovation.png",
    imageThumb: "/bg/bg-techinnovation.png",
    technology: "Laravel",
    date: 2024,
  },
  {
    id: 8,
    title: "Smart Telecom",
    description: "Projetos com Laravel durante estágio profissional.",
    imageLarge: "/bg/bg-smart.png",
    imageThumb: "/bg/bg-smart.png",
    technology: "Laravel",
    date: 2024,
  },
  {
    id: 9,
    title: "Lms-medischool",
    description: "Melhorias e novas funções em plataforma educacional.",
    imageLarge: "/bg/bg-lms.png",
    imageThumb: "/bg/bg-lms.png",
    technology: "php",
    date: 2024,
  },
  {
    id: 10,
    title: "Files System",
    description: "Aplicação Laravel para gerenciar arquivos e pastas.",
    imageLarge: "/bg/bg-filessystem.png",
    imageThumb: "/bg/bg-filessystem.png",
    technology: "Laravel",
    date: 2025,
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
      <Content>
        <MainProject>
          <MainImage
            src={selectedProject?.imageLarge}
            alt={selectedProject?.title}
            loading="lazy"
          />
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
