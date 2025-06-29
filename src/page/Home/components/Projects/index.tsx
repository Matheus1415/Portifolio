import React, { useState } from "react";
import styled from "styled-components";

const projectsData = [
  {
    id: 1,
    title: "Projeto Alpha",
    description:
      "Projeto Alpha é uma solução completa para gestão empresarial, focando em eficiência e automação de processos.",
    imageLarge: "/images/projeto-alpha-large.png",
    imageThumb: "/images/projeto-alpha-thumb.png",
  },
  {
    id: 2,
    title: "Projeto Beta",
    description:
      "Projeto Beta é uma plataforma interativa para educação online, que oferece recursos inovadores para aprendizado personalizado.",
    imageLarge: "/images/projeto-beta-large.png",
    imageThumb: "/images/projeto-beta-thumb.png",
  },
  {
    id: 3,
    title: "Projeto Gamma",
    description:
      "Projeto Gamma consiste em um app móvel para controle financeiro pessoal com design intuitivo e análise inteligente.",
    imageLarge: "/images/projeto-gamma-large.png",
    imageThumb: "/images/projeto-gamma-thumb.png",
  },
];

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(projectsData[0].id);
  const selectedProject = projectsData.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <Container>
      <Description>
        <h2>Meus Projetos</h2>
        <p>
          Aqui você encontra uma seleção dos meus principais trabalhos, desenvolvidos com foco em inovação, usabilidade e eficiência técnica. Cada projeto traz desafios únicos e soluções criativas que refletem minha paixão pela tecnologia.
        </p>
      </Description>

      <Content>
        <Sidebar>
          {projectsData.map((project) => (
            <ProjectItem
              key={project.id}
              active={project.id === selectedProjectId}
              onClick={() => setSelectedProjectId(project.id)}
            >
              <Thumbnail src={project.imageThumb} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
            </ProjectItem>
          ))}
        </Sidebar>

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
      </Content>
    </Container>
  );
}