import { useState } from "react";
import {
  ProjectsContainer,
  ProjectCard,
  CardInner,
  CardFront,
  CardBack,
  ProjectImage,
  TechnologyTag,
  FullscreenModal,
  CloseButton,
  StyledButton,
  SectionTitle,
  SectionText,
  LinkButton,
  Column,
  ModalContent,
} from "./styles";
import { FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

type Project = {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  technology: "React" | "Laravel" | "TypeScript" | "php";
  icon: JSX.Element;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Mendel",
    imageSrc: "/bg/bg-mendel.png",
    description: "App educativo criado para o Ceará Científico 2024.",
    technology: "React",
    icon: <FaReact size={18} />,
  },
  {
    id: 2,
    title: "Cardápio online",
    imageSrc: "/bg/bg-restaurant.png",
    description: "Visualize e filtre pratos em um cardápio digital.",
    technology: "React",
    icon: <FaReact size={18} />,
  },
  {
    id: 3,
    title: "NearByApp",
    imageSrc: "/bg/bg-nearbyapp.png",
    description: "Explore locais próximos e resgate cupons via QR Code.",
    technology: "React",
    icon: <FaReact size={18} />,
  },
  {
    id: 4,
    title: "Timer Ignite",
    imageSrc: "/bg/bg-ignite-timer.png",
    description: "Gerencie seu tempo com foco e produtividade.",
    technology: "React",
    icon: <FaReact size={18} />,
  },
  {
    id: 5,
    title: "DevStage",
    imageSrc: "/bg/bg-devstage.png",
    description: "Evento online para desenvolvedores de todo o Brasil.",
    technology: "React",
    icon: <FaReact size={18} />,
  },
  {
    id: 6,
    title: "Pomodoro",
    imageSrc: "/bg/bg-comodoro.png",
    description: "App com tarefas e cronômetro Pomodoro.",
    technology: "TypeScript",
    icon: <SiTypescript size={18} />,
  },
  {
    id: 7,
    title: "TechInnovationHub",
    imageSrc: "/bg/bg-techinnovation.png",
    description: "API em Laravel para gerenciar startups e investidores.",
    technology: "Laravel",
    icon: <FaLaravel size={18} />,
  },
  {
    id: 8,
    title: "Smart Telecom",
    imageSrc: "/bg/bg-smart.png",
    description: "Projetos com Laravel durante estágio profissional.",
    technology: "Laravel",
    icon: <FaLaravel size={18} />,
  },
  {
    id: 9,
    title: "Lms-medischool",
    imageSrc: "/bg/bg-lms.png",
    description: "Melhorias e novas funções em plataforma educacional.",
    technology: "php",
    icon: <FaPhp size={18} />,
  },
];

export function Projects() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleFlip = (id: number) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const isFlipped = (id: number) => flippedCards.includes(id);

  return (
    <>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <CardInner
              animate={{ rotateY: isFlipped(project.id) ? 180 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <CardFront>
                <ProjectImage src={project.imageSrc} alt={project.title} />
                <TechnologyTag technology={project.technology}>
                  {project.icon}
                </TechnologyTag>
              </CardFront>

              <CardBack>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <StyledButton onClick={() => handleFlip(project.id)}>
                  Voltar
                </StyledButton>
                <StyledButton onClick={() => setSelectedProject(project)}>
                  Abrir modal
                </StyledButton>
              </CardBack>
            </CardInner>

            {!isFlipped(project.id) && (
              <StyledButton onClick={() => handleFlip(project.id)}>
                Ver mais
              </StyledButton>
            )}
          </ProjectCard>
        ))}
      </ProjectsContainer>

      {selectedProject && (
        <FullscreenModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CloseButton onClick={() => setSelectedProject(null)}>×</CloseButton>
          <h2>{selectedProject.title || "Projeto Mendel"}</h2>

          <ModalContent>
            <Column>
              <SectionTitle>Apresentação</SectionTitle>
              <SectionText>
                Este projeto Mendel é uma plataforma educativa focada em
                genética, desenvolvida para melhorar o aprendizado de estudantes
                do ensino médio com recursos interativos.
              </SectionText>
              <SectionTitle>Apresentação</SectionTitle>
              <SectionText>
                Este projeto Mendel é uma plataforma educativa focada em
                genética, desenvolvida para melhorar o aprendizado de estudantes
                do ensino médio com recursos interativos.
              </SectionText>
              <SectionTitle>Apresentação</SectionTitle>
              <SectionText>
                Este projeto Mendel é uma plataforma educativa focada em
                genética, desenvolvida para melhorar o aprendizado de estudantes
                do ensino médio com recursos interativos.
              </SectionText>
              <SectionTitle>Apresentação</SectionTitle>
              <SectionText>
                Este projeto Mendel é uma plataforma educativa focada em
                genética, desenvolvida para melhorar o aprendizado de estudantes
                do ensino médio com recursos interativos.
              </SectionText>
              <SectionTitle>Apresentação</SectionTitle>
              <SectionText>
                Este projeto Mendel é uma plataforma educativa focada em
                genética, desenvolvida para melhorar o aprendizado de estudantes
                do ensino médio com recursos interativos.
              </SectionText>
              <SectionTitle>Apresentação</SectionTitle>
              <SectionText>
                Este projeto Mendel é uma plataforma educativa focada em
                genética, desenvolvida para melhorar o aprendizado de estudantes
                do ensino médio com recursos interativos.
              </SectionText>

              <SectionTitle>Membros que trabalharam</SectionTitle>
              <SectionText>
                Ana Silva, João Pereira, Carla Souza, Roberto Lima
              </SectionText>

              <SectionTitle>Imagens</SectionTitle>
              <SectionText>
                [Aqui serão exibidas imagens futuras relacionadas ao projeto]
              </SectionText>

              <SectionTitle>Histórico</SectionTitle>
              <SectionText>
                O desenvolvimento iniciou-se em 2023 com foco em inovação
                educacional para o Ceará, integrando várias tecnologias para
                acessibilidade e design moderno.
              </SectionText>
            </Column>

            <Column>
              <SectionTitle>Repositório</SectionTitle>
              <LinkButton
                href="https://github.com/usuario/projeto-mendel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no GitHub
              </LinkButton>

              <SectionTitle>Tutorial</SectionTitle>
              <LinkButton
                href="https://github.com/usuario/projeto-mendel/wiki/Tutorial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver tutorial no GitHub
              </LinkButton>

              <SectionTitle>Tecnologias utilizadas</SectionTitle>
              <SectionText>
                React, Chakra UI, Vite, GitHub, VLibras, Excalidraw, Chart.js,
                Figma
              </SectionText>

              <SectionTitle>Outras Informações</SectionTitle>
              <SectionText>
                O projeto conta com foco em acessibilidade, design responsivo e
                integração com ferramentas colaborativas para garantir a melhor
                experiência de aprendizado.
              </SectionText>
            </Column>
          </ModalContent>
        </FullscreenModal>
      )}
    </>
  );
}
