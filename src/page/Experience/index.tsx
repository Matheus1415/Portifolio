import React from "react";
import styled from "styled-components";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaGoogle,
} from "react-icons/fa";

const Title = styled.h1`
  font-size: 40px;
  padding: 35px 20px;
`;

const TimelineContainer = styled.section`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  padding: 50px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    padding: 20px;
  }

  & .timeline-wrapper {
    max-width: 1200px;
    position: relative;
    padding: 20px 0;
    width: 100%;
    @media (max-width: 600px) {
      width: 100%;
    }

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 4px;
      background: #8257e6;
      transform: translateX(-50%);
      @media (max-width: 600px) {
        width: 100%;
        height: 4px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    & .timeline-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 50px;
      position: relative;
      flex-direction: row;

      @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
      }

      &:nth-child(even) {
        flex-direction: row-reverse;
        text-align: right;

        & .content {
          align-items: flex-end;
        }

        @media (max-width: 600px) {
          flex-direction: column-reverse;
          align-items: center;
        }
      }

      & .icon {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
        background: #282830;
        color: #ffffff;
        border-radius: 50%;
        padding: 10px;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
        z-index: 2;
        cursor: pointer;

        &:hover {
          background: #8257e6;
        }

        @media (max-width: 600px) {
          font-size: 20px;
          padding: 8px;
        }
      }

      & .content {
        background: #282830;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
        flex: 0 0 45%;
        z-index: 1;

        & h4 {
          font-size: 20px;
          margin-bottom: 10px;
          color: #8257e6;
        }

        & p {
          font-size: 16px;
          margin-bottom: 10px;
          text-align: justify;
          line-height: 1.6;
        }

        & .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;

          & .tag {
            background: #8257e6;
            padding: 5px 10px;
            border-radius: 5px;
            color: #ffffff;
            font-size: 14px;
          }
        }

        @media (max-width: 600px) {
          flex: 0 0 80%;
          margin-top: 20px;
        }
      }
    }
  }
`;

const Experience: React.FC = () => {
  const experiences = [
    {
      year: "2023 - 2024",
      icon: <FaProjectDiagram />,
      description:
        "Desenvolvimento do projeto de genética Mendel: Este projeto de genética interativa foi desenvolvido para proporcionar uma experiência educacional rica em conceitos genéticos, utilizando um design interativo e visualmente atraente. Ele abrange desde as Leis de Mendel até genética avançada, incluindo herança ligada ao sexo, com várias seções detalhadas e funcionalidades interativas.",
      tags: ["Genética", "Design Interativo", "Educação", "JavaScript"],
      onClick: () =>
        window.open("https://github.com/Matheus1415/Mendel", "_blank"),
    },
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
      year: "2024",
      icon: <FaLaptopCode />,
      description:
        "Estágio como desenvolvedor full-stack em uma empresa de desenvolvimento, onde dominei Laravel, PHP, jQuery, JavaScript e construção de bancos de dados, aprimorando habilidades técnicas e interpessoais.",
      tags: ["Laravel", "PHP", "jQuery", "JavaScript", "Banco de Dados"],
    },
    {
      year: "2024",
      icon: <FaGoogle />,
      description:
        "Formação da Google em Gerenciamento de Projetos, aprendendo metodologias ágeis e técnicas de gestão eficazes.",
      tags: ["Gerenciamento de Projetos", "Google", "Metodologias Ágeis"],
      onClick: () => window.open("/Certificado.pdf", "_blank"),
    },
  ];

  return (
    <>
      <Title>Minha Trajetória</Title>
      <TimelineContainer id="experiencia">
        <div className="timeline-wrapper">
          {experiences.map((experience, index) => (
            <div className="timeline-item" key={index}>
              <div className="icon" onClick={experience.onClick}>
                {experience.icon}
              </div>
              <div className="content">
                <h4>{experience.year}</h4>
                <p>{experience.description}</p>
                <div className="tags">
                  {experience.tags.map((tag, i) => (
                    <div className="tag" key={i}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TimelineContainer>
    </>
  );
};

export default Experience;
