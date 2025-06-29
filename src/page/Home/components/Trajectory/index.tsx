import React from "react";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaGoogle,
  FaBriefcase,
} from "react-icons/fa";
import {
  TimelineContainer,
  TimelineContent,
  TimelineIcon,
  TimelineItem,
  TimelineWrapper,
  Title,
} from "./styles";

export function Trajectory() {
  const experiences = [
    {
      year: "2022 - 2024",
      icon: <FaGraduationCap />,
      description:
        "Formação em Técnico de Informática, destacando habilidades em desenvolvimento de software, redes de computadores, sistemas operacionais e infraestrutura tecnológica, com uma abordagem prática e voltada para soluções modernas.",
      tags: [
        "Técnico de Informática",
        "Sistemas Operacionais",
        "Redes",
        "Desenvolvimento",
      ],
    },
    {
      year: "2023 - 2024",
      icon: <FaProjectDiagram />,
      description:
        "Desenvolvimento do projeto de genética Mendel: Este projeto de genética interativa foi desenvolvido para proporcionar uma experiência educacional rica em conceitos genéticos, utilizando um design interativo e visualmente atraente.",
      tags: ["Genética", "Design Interativo", "Educação", "JavaScript"],
      onClick: () =>
        window.open("https://github.com/Matheus1415/Mendel", "_blank"),
    },
    {
      year: "2024",
      icon: <FaLaptopCode />,
      description:
        "Estágio como desenvolvedor full-stack em uma empresa de desenvolvimento, onde dominei Laravel, PHP, jQuery, JavaScript e construção de bancos de dados, aprimorando habilidades técnicas e interpessoais.",
      tags: ["Laravel", "PHP", "jQuery", "JavaScript", "Banco de Dados"],
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/",
          "_blank"
        ),
    },
    {
      year: "2024",
      icon: <FaGoogle />,
      description:
        "Formação da Google em Gerenciamento de Projetos, aprendendo metodologias ágeis e técnicas de gestão eficazes.",
      tags: ["Gerenciamento de Projetos", "Google", "Metodologias Ágeis"],
      onClick: () => window.open("/Certificado.pdf", "_blank"),
    },
    {
      year: "2024 - 2025",
      icon: <FaBriefcase />,
      description:
        "Durante meu trabalho como freelancer na TechNorth, desenvolvi interfaces modernas e integrei APIs RESTful de pagamento. Priorizei a experiência do usuário, a qualidade do código e a performance dos sistemas.",
      tags: [
        "Freelancer",
        "TechNorth",
        "PHP",
        "MySQL",
        "JavaScript",
        "APIs RESTful",
        "Pagamentos",
        "Segurança",
      ],
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/",
          "_blank"
        ),
    },
    {
      year: "2025",
      icon: <FaBriefcase />,
      description:
        "Em 2025, consegui mais dois estagios como desenvolvedor, com maiores responsabilidades técnicas e participação em projetos mais complexos.",
      tags: ["Laravel", "PHP", "jQuery", "JavaScript", "Banco de Dados"],
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/",
          "_blank"
        ),
    },
  ];

  return (
    <TimelineContainer>
      <Title>Conheça minha trajetória</Title>
      <TimelineWrapper>
        {experiences.map((exp, i) => (
          <TimelineItem
            className={i % 2 !== 0 ? "reverse" : ""}
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <TimelineIcon onClick={exp.onClick}>{exp.icon}</TimelineIcon>
            <TimelineContent>
              <h4>{exp.year}</h4>
              <p>{exp.description}</p>
              <div className="tags">
                {exp.tags.map((tag, idx) => (
                  <div className="tag" key={idx}>
                    {tag}
                  </div>
                ))}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </TimelineContainer>
  );
}
