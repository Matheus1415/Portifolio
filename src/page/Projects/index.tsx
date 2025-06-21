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
  SectionBlock,
  ImagePlaceholder,
  Description,
  Roles,
  GithubLink,
  AuthorName,
  AuthorItem,
  AuthorsList,
} from "./styles";
import { FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import fullprojects from "../../data/fullProjects.json";

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

export type ProjectType = {
  id: number;
  project: {
    title: string;
    year: number;
    type: string;
    intro: {
      description: string;
      highlight: string;
    };
    sections: SectionType[];
  };
};

export type SectionType = {
  title: string;
  date: string;
  type: string;
  link?: {
    label: string;
    url: string;
  };
  content?: string[];
  image?: {
    src: string;
    alt: string;
  };
  download?: {
    label: string;
    file: string;
  };
  authors?: {
    name: string;
    github?: string;
    roles: string[];
    description: string;
  }[];
};

export function Projects() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleFlip = (id: number) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const isFlipped = (id: number) => flippedCards.includes(id);

  const fullProjectSelected = fullprojects.find(
    (p: ProjectType) => p.id === selectedProject?.id
  );

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

      {fullProjectSelected && (
        <FullscreenModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CloseButton onClick={() => setSelectedProject(null)}>×</CloseButton>

          <ModalContent>
            <Column>
              <SectionBlock>
                <SectionTitle>
                  {fullProjectSelected.project.title} (
                  {fullProjectSelected.project.year})
                </SectionTitle>
                <SectionText>
                  {fullProjectSelected.project.intro.description}
                </SectionText>
                <SectionText
                  style={{ fontWeight: "bold", marginTop: "0.5rem" }}
                >
                  {fullProjectSelected.project.intro.highlight}
                </SectionText>
              </SectionBlock>

              {fullProjectSelected.project.sections.map(
                (section: SectionType, index: number) => (
                  <SectionBlock key={index}>
                    <SectionTitle>{section.title}</SectionTitle>

                    {section.content?.map((text, i) => (
                      <SectionText key={i}>{text}</SectionText>
                    ))}

                    {section.image && (
                      <img
                        src={section.image.src}
                        alt={section.image.alt}
                        style={{
                          maxWidth: "100%",
                          marginTop: "1rem",
                          borderRadius: "8px",
                        }}
                      />
                    )}

                    {section.link && (
                      <LinkButton
                        href={section.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginTop: "0.5rem", display: "inline-block" }}
                      >
                        {section.link.label}
                      </LinkButton>
                    )}

                    {section.download && (
                      <LinkButton
                        href={section.download.file}
                        download
                        style={{ marginTop: "0.5rem", display: "inline-block" }}
                      >
                        {section.download.label}
                      </LinkButton>
                    )}

                    {Array.isArray(section.authors) &&
                      section.authors.length > 0 && (
                        <AuthorsList>
                          {section.authors.map((author, idx) => (
                            <AuthorItem key={idx}>
                              <AuthorName>{author.name}</AuthorName>
                              {author.github && (
                                <>
                                  {" – "}
                                  <GithubLink
                                    href={author.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    GitHub
                                  </GithubLink>
                                </>
                              )}
                              <Roles>{author.roles.join(", ")}</Roles>
                              {author.description && (
                                <Description>{author.description}</Description>
                              )}
                            </AuthorItem>
                          ))}
                        </AuthorsList>
                      )}
                  </SectionBlock>
                )
              )}
            </Column>
          </ModalContent>
        </FullscreenModal>
      )}
    </>
  );
}
