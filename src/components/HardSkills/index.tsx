import React, { useState } from "react";
import styled from "styled-components";
//Component
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Tooltip from "../Tooltip";
import ChartComponent from "../ChartComponent";
//Icons
import { FaLaravel } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { BsFiletypePhp } from "react-icons/bs";
import { MdOutlineError } from "react-icons/md";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
const hardSkillsProps = [
  {
    title: "Habilidades com Laravel",
    backgroundColor: "#ff4c4c",
    buttomColor: "#5b0202",
    titleColor: "#5b0202",
    ability: [
      {
        subtitle: "Experiência Prática",
        item: [
          "API para gerenciar usuários, startups e propostas com autenticação de token",
          "Plataforma que conecta criadores de ideias a patrocinadores interessados",
          "Plataforma que automatiza o gerenciamento de usuários e planos de internet",
        ],
      },
      {
        subtitle: "Funcionalidades utilizadas",
        item: [
          "Eloquent ORM para manipulação de banco de dados.",
          "Roteamento avançado e middleware.",
          "Blade Templates para renderização de views dinâmicas.",
          "Migrations e Seeders para gerenciar esquemas de banco de dados.",
        ],
      },
      {
        subtitle: "Formações Técnicas",
        item: [
          "Crie aplicações web em PHP",
          "Aplicação com MVC",
          "Construindo APIs",
        ],
        link: [
          "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/course/laravel-criando-aplicacao-mvc/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/course/laravel-construindo-apis/certificate",
        ],
        icon: [
          <FaLaravel className="icon" />,
          <FaLaravel className="icon" />,
          <FaLaravel className="icon" />,
        ],
      },
      {
        subtitle: "Diferenciais",
        text: "Tenho experiência prática no desenvolvimento de aplicações web usando o framework Laravel, incluindo um estágio de 6 meses como desenvolvedor full-stack usando essa tecnologia.",
      },
    ],
    ChartComponent: {
      type: "bar",
      data: {
        labels: [
          "Eloquent ORM",
          "Roteamento",
          "Blade Templates",
          "Migrations",
          "Jobs & Queues",
        ],
        datasets: [
          {
            label: "Nível de Domínio (1-10) da Tecnologia ",
            data: [7, 8, 9, 7, 4],
            backgroundColor: [
              "rgba(75, 192, 192, 0.555)",
              "rgba(255, 99, 132, 0.555)",
              "rgba(255, 205, 86, 0.555)",
              "rgba(54, 162, 235, 0.555)",
              "rgba(153, 102, 255, 0.555)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 205, 86, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    },
  },
  {
    title: "Habilidades com PHP",
    backgroundColor: "#8993be",
    buttomColor: "#5d6588",
    titleColor: "#2f3448",
    ability: [
      {
        subtitle: "Experiência Prática",
        item: [
          "Agenda Eletrônica, para ajudar a salvar contatos de usuários",
          "Simulação de Banco Eletrônico, para mandar e receber valores",
          "Criação de documentos dinâmicos, com informações do Banco de dados",
        ],
      },
      {
        subtitle: "Funcionalidades utilizadas",
        item: [
          "Criação de tela dinâmica",
          "Orientação a Objetos (POO) com modelo MVC",
          "Conexão com MySQL",
        ],
      },
      {
        subtitle: "Cursos Realizados",
        item: [
          "Aprenda a programar em PHP",
          "Orientação a Objetos com PHP: Herança, Polimorfismo e Interfaces",
          "PHP I/O: trabalhando com arquivos e streams",
          "PHP Exceptions: tratamento de erros",
        ],
        link: [
          "https://cursos.alura.com.br/user/mps-web-tech/degree-linguagem-php-v597958-597958/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/course/php-oo-heranca-polimorfirmo-interfaces/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/course/php-io-arquivos-streams/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/course/php-exceptions-tratamento-erros/certificate",
        ],
        icon: [
          <SiPhp className="icon" />,
          <SiPhp className="icon" />,
          <BsFiletypePhp className="icon" />,
          <MdOutlineError className="icon" />,
        ],
      },
      {
        subtitle: "Diferenciais",
        text: "Estudo PHP há mais de 2 anos e tenho experiência com o framework Laravel, desenvolvendo aplicações web complexas e APIs.",
      },
    ],
    ChartComponent: {
      type: "bar",
      data: {
        labels: [
          "PHP Básico",
          "Orientação a Objetos",
          "PHP com MVC",
          "PHP Exceptions",
          "Framework Laravel",
        ],
        datasets: [
          {
            label: "Nível de Domínio (1-10) da Tecnologia",
            data: [7, 8, 7, 6, 8],
            backgroundColor: [
              "rgba(75, 192, 192, 0.555)",
              "rgba(99, 255, 138, 0.555)",
              "rgba(255, 205, 86, 0.555)",
              "rgba(151, 54, 235, 0.555)",
              "rgba(255, 102, 102, 0.555)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(99, 255, 138, 1)",
              "rgba(255, 205, 86, 1)",
              "rgba(151, 54, 235, 1)",
              "rgba(255, 102, 102, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    },
  },
  {
    title: "Habilidades com JavaScript",
    backgroundColor: "#debd37",
    buttomColor: "#866104",
    titleColor: "#000000",
    ability: [
      {
        subtitle: "Experiência Prática",
        item: [
          "Sistema de sorteio de amigo secreto com JavaScript",
          "Jogo da velha com JavaScript",
          "Sistema Pomodoro e de estudos",
          "App de Netflix simples com JavaScript e Landing Pages",
        ],
      },
      {
        subtitle: "Funcionalidades utilizadas",
        item: [
          "Uso de React para criação de interfaces dinâmicas e interativas",
          "Utilização de jQuery para manipulação de DOM e eventos",
          "Criação de gráficos interativos com Chart.js",
          "Desenvolvimento de layouts responsivos com Bootstrap",
        ],
      },

      {
        subtitle: "Formações Técnicas",
        item: [
          "Curso Web Master Completo Front-End",
          "JavaScript - NLW rocketseat",
          "JavaScript ES6 - Bradesco",
        ],
        link: [
          "https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/",
        ],
        icon: [
          <FaJsSquare className="icon" />,
          <FaJsSquare className="icon" />,
          <FaJsSquare className="icon" />,
          <FaJsSquare className="icon" />,
        ],
      },
      {
        subtitle: "Diferenciais",
        text: "Tenho mais de 2 anos de experiência com JavaScript e tenho dominado bibliotecas como React e o framework jQuery. Sou capaz de criar projetos completos utilizando essas tecnologias e desenvolver soluções dinâmicas e interativas.",
      },
    ],
    ChartComponent: {
      type: "bar",
      data: {
        labels: [
          "JavaScript Básico",
          "JavaScript Avançado",
          "React",
          "jQuery",
          "Typescript",
          "Web Design Responsivo",
          "UX/UI",
        ],
        datasets: [
          {
            label: "Nível de Domínio (1-10) da Tecnologia",
            data: [9, 7, 8, 9, 6, 8, 6],
            backgroundColor: [
              "rgba(75, 192, 192, 0.555)",
              "rgba(255, 99, 132, 0.555)",
              "rgba(255, 205, 86, 0.555)",
              "rgba(54, 162, 235, 0.555)",
              "rgba(153, 102, 255, 0.555)",
              "rgba(255, 159, 64, 0.555)",
              "rgba(100, 200, 255, 0.555)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 205, 86, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(100, 200, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    },
  },
  {
    title: "Habilidades com React",
    backgroundColor: "#569eb2",
    buttomColor: "#21a1f1",
    titleColor: "#163337",
    ability: [
      {
        subtitle: "Experiência Prática",
        item: [
          "Sistema Pomodoro desenvolvido com React",
          "Gestão de estudos com interface dinâmica",
          "Criação de um aplicativo mobile",
          "Liderança de equipe no desenvolvimento de um software de genética usando Chakra UI, com duração de 8 meses",
        ],
      },
      {
        subtitle: "Funcionalidades Utilizadas",
        item: [
          "Uso extensivo de hooks para gerenciamento de estado e ciclo de vida",
          "Integração e implementação de TypeScript em projetos React",
          "Autenticação de usuários e gerenciamento de sessões",
          "Consumo de APIs REST usando Axios",
        ],
      },
      {
        subtitle: "Formações Técnicas",
        item: [
          "Melhore sua experiência de desenvolvimento com TypeScript",
          "Aplique TypeScript no front-end",
          "Gerencie aplicações React com TypeScript",
        ],
        link: [
          "https://cursos.alura.com.br/user/mps-web-tech/degree-typescript-v309729-309729/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/degree-typescript-desenvolva-front-end-produtividade-644154/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/degree-react-ts-v581770-581770/certificate",
        ],
        icon: [
          <FaReact className="icon" />,
          <FaReact className="icon" />,
          <FaReact className="icon" />,
          <FaReact className="icon" />,
        ],
      },
      {
        subtitle: "Diferenciais",
        text: "Liderança no desenvolvimento de um projeto de genética ao longo de 8 meses, garantindo a entrega de um software robusto e funcional. Experiência consolidada na integração de TypeScript em projetos React e no consumo eficiente de APIs REST.",
      },
    ],
    ChartComponent: {
      type: "bar",
      data: {
        labels: [
          "React",
          "TypeScript",
          "Hooks",
          "Chakra UI",
          "Axios",
          "Autenticação",
        ],
        datasets: [
          {
            label: "Nível de Domínio (1-10) da Tecnologia",
            data: [7, 8, 8, 6, 6, 5],
            backgroundColor: [
              "rgba(97, 218, 251, 0.555)",
              "rgba(41, 128, 185, 0.555)",
              "rgba(75, 192, 192, 0.555)",
              "rgba(54, 162, 235, 0.555)",
              "rgba(153, 102, 255, 0.555)",
              "rgba(255, 159, 64, 0.555)",
            ],
            borderColor: [
              "rgba(97, 218, 251, 1)",
              "rgba(41, 128, 185, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    },
  },
  {
    title: "Habilidades com MySQL",
    backgroundColor: "#00758F",
    buttomColor: "#005F70",
    titleColor: "#FFFFFF",
    ability: [
      {
        subtitle: "Experiência Prática",
        item: [
          "Desenvolvimento de projetos de alta complexidade utilizando banco de dados MySQL",
          "Integração de tabelas e regras de negócio complexas em APIs utilizando Laravel",
          "6 meses de experiência como desenvolvedor full-stack, criando e gerenciando tabelas e migrations em projetos diversos",
        ],
      },
      {
        subtitle: "Funcionalidades Utilizadas",
        item: [
          "Modelagem de tabelas e relacionamentos complexos",
          "Criação e execução de migrations no Laravel",
          "Desenvolvimento e execução de Procedures no MySQL",
          "Otimização de queries e manipulação de grandes volumes de dados",
        ],
      },
      {
        subtitle: "Formações Técnicas",
        item: [
          "MySQL: Conhecendo a ferramenta",
          "MySQL: Executando Procedures",
          "Laravel: Criando aplicação MVC",
        ],
        link: [
          "https://cursos.alura.com.br/user/mps-web-tech/course/mysql-conhecendo-ferramenta/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/course/banco-dados-mysql-executando-procedures/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/course/laravel-criando-aplicacao-mvc/certificate",
        ],
        icon: [
          <GrMysql className="icon" />,
          <GrMysql className="icon" />,
          <FaLaravel className="icon" />,
        ],
      },
      {
        subtitle: "Diferenciais",
        text: "Destaque no desenvolvimento de tabelas durante um estágio de 6 meses como desenvolvedor full-stack. Experiência sólida na criação e integração de tabelas com regras de negócio avançadas.",
      },
    ],
    ChartComponent: {
      type: "bar",
      data: {
        labels: [
          "Modelagem de Dados",
          "Laravel com MySQL",
          "Migrations",
          "Otimização de Queries",
          "Regras de Negócio",
        ],
        datasets: [
          {
            label: "Nível de Domínio (1-10)",
            data: [6, 9, 6, 7, 8],
            backgroundColor: [
              "rgba(0, 117, 143, 0.555)",
              "rgba(41, 128, 185, 0.555)",
              "rgba(75, 192, 192, 0.555)",
              "rgba(54, 162, 235, 0.555)",
              "rgba(153, 102, 255, 0.555)",
            ],
            borderColor: [
              "rgba(0, 117, 143, 1)",
              "rgba(41, 128, 185, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    },
  },
  {
    title: "Habilidades com TypeScript",
    backgroundColor: "#3178C6",
    buttomColor: "#25588A",
    titleColor: "#FFFFFF",
    ability: [
      {
        subtitle: "Experiência Prática",
        item: [
          "Desenvolvimento de um projeto orientado a objetos para simular um banco fictício",
          "Gerenciador de estudos com integração de dados fortemente tipados",
          "Desenvolvimento de um aplicativo de comida com TypeScript e React Native",
        ],
      },
      {
        subtitle: "Funcionalidades Utilizadas",
        item: [
          "Uso de interfaces e tipos personalizados para organização de código",
          "Implementação de paradigmas funcionais e orientação a objetos com TypeScript",
          "Manutenção e organização de aplicações utilizando a tipagem estática do TypeScript",
        ],
      },
      {
        subtitle: "Formações Técnicas",
        item: [
          "TypeScript: Desenvolva front-end com produtividade",
          "TypeScript: Aplicando orientação a objetos no front-end",
          "TypeScript: O paradigma funcional no front-end",
        ],
        link: [
          "https://cursos.alura.com.br/user/mps-web-tech/degree-typescript-desenvolva-front-end-produtividade-644154/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/degree-typescript-v309729-309729/certificate",
          "https://cursos.alura.com.br/user/mps-web-tech/course/typescript-paradigma-funcional-front-end/certificate",
        ],
        icon: [
          <SiTypescript className="icon" />,
          <SiTypescript className="icon" />,
          <SiTypescript className="icon" />,
          <SiTypescript className="icon" />,
        ],
      },
      {
        subtitle: "Diferenciais",
        text: "Uso avançado de TypeScript para integração com React e React Native, garantindo maior organização e manutenção do código. Experiência em tipagem de dados de APIs, valores e Props, mantendo aplicações consistentes e sucintas.",
      },
    ],
    ChartComponent: {
      type: "bar",
      data: {
        labels: [
          "Modelagem de Dados",
          "Laravel com MySQL",
          "Migrations",
          "Otimização de Queries",
          "Regras de Negócio",
        ],
        datasets: [
          {
            label: "Nível de Domínio (1-10)",
            data: [6, 9, 6, 7, 8],
            backgroundColor: [
              "rgba(0, 117, 143, 0.555)",
              "rgba(41, 128, 185, 0.555)",
              "rgba(75, 192, 192, 0.555)",
              "rgba(54, 162, 235, 0.555)",
              "rgba(153, 102, 255, 0.555)",
            ],
            borderColor: [
              "rgba(0, 117, 143, 1)",
              "rgba(41, 128, 185, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    },
  },
];

const Container = styled.div<{
  $backgroundColor: string;
  $buttomColor: string;
  $titleColor: string;
}>`
  width: 100%;
  max-width: 98%;
  display: flex;
  flex-direction: row;

  & > .boxBorder {
    width: 60%;
    display: flex;
    border-radius: 0 18% 18% 0;
    flex-direction: column;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    padding: 50px 20px;
    min-height: 500px;

    @media (max-width: 900px) {
      width: 100%;
      flex-direction: column;
      border-radius: 0;
      align-items: center;
    }

    & > h1 {
      font-size: 50px;
      margin-bottom: 10px;
      font-weight: bold;
      color: #ffffff;
      text-align: left;
      @media (max-width: 600px) {
        font-size: 30px;
      }
    }

    & > .ability {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      @media (max-width: 400px) {
        gap: 40px;
      }
      & > .box-wraper {
        width: 46%;
        padding: 1%;
        height: 200px;
        border-radius: 10px;
        @media (max-width: 900px) {
          width: 100%;
          flex-direction: column;
          align-items: center;
          min-height: 250px;
          gap: 20px;
        }

        & > h2 {
          font-size: 25px;
          color: ${({ $titleColor }) => $titleColor};
          font-weight: bold;
        }

        & > ul {
          font-size: 20px;
          & > li {
            padding: 10px 0;
            & > a {
              display: flex;
              gap: 10px;
              align-items: center;
              text-decoration: none;
              font-size: 20px;
              color: #ffffff;
              & > .icon {
                color: #ffffff;
                width: 25px;
                height: 25px;
                padding: 5px;
                background-color: ${({ $buttomColor }) => $buttomColor};
                border-radius: 50%;
              }
            }
          }
        }

        & > p {
          font-size: 18px;
          padding: 10px 0;
        }

        & > .boxIcon {
          margin-top: 15px;
          padding: 5px;
          font-size: 35px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
        }
      }
    }
  }

  & > .boxCharAndNex {
    width: 38%;
    padding: 1%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (max-width: 900px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
    & > h2 {
      font-size: 35px;
      padding: 5px 0;
      font-weight: bold;
    }
    .groupButtom {
      margin-top: 20px;
      width: 100%;
      min-height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .Next {
      border-radius: 10px;
      border: 0;
      margin-right: 10px;
      width: 200px;
      height: 50px;
      padding: 10px;
      color: white;
      font-size: 30px;
      background-color: ${({ $buttomColor }) => $buttomColor};
      box-shadow: 0 0 15px ${({ $buttomColor }) => $buttomColor},
        0 0 30px ${({ $buttomColor }) => $buttomColor};
      filter: brightness(1.2);
    }
    .Previous {
      border-radius: 10px;
      border: 0;
      margin-right: 10px;
      width: 200px;
      height: 50px;
      padding: 10px;
      color: white;
      font-size: 30px;
      background-color: #434343;
      box-shadow: 0 0 15px #434343, 0 0 30px #1a1a1a;
      filter: brightness(1.2);
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const HardSkills: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < hardSkillsProps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <Container
        $backgroundColor={hardSkillsProps[currentIndex].backgroundColor}
        $buttomColor={hardSkillsProps[currentIndex].buttomColor}
        $titleColor={hardSkillsProps[currentIndex].titleColor}
        id="habilidades"
      >
        <div
          className="boxBorder"
          style={{
            backgroundColor: hardSkillsProps[currentIndex].backgroundColor,
          }}
        >
          <h1>{hardSkillsProps[currentIndex].title}</h1>
          <div className="ability">
            {hardSkillsProps[currentIndex].ability.map(
              (section, sectionIndex) => (
                <div className="box-wraper" key={sectionIndex}>
                  <h2>{section.subtitle}</h2>
                  {section.item && (
                    <ul>
                      {section.item.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          {section.link ? (
                            <a
                              href={section.link[itemIndex]}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {section.icon &&
                                section.icon[itemIndex] &&
                                (() => {
                                  const IconComponent = section.icon[itemIndex];
                                  return IconComponent;
                                })()}
                              {item}
                            </a>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.subtitle === "Diferenciais" && (
                    <>
                      <p>{section.text}</p>
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
                    </>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        <div className="boxCharAndNex">
          <h2>Habilidades Técnicas</h2>
          <br />
          <ChartComponent
            data={hardSkillsProps[currentIndex].ChartComponent.data}
            type={
              hardSkillsProps[currentIndex].ChartComponent.type as
                | "bar"
                | "line"
                | "pie"
            }
          />

          <div className="groupButtom">
            {currentIndex > 0 && (
              <button className="Previous" onClick={handlePrevious}>
                Anterior
              </button>
            )}
            {currentIndex < hardSkillsProps.length - 1 && (
              <button className="Next" onClick={handleNext}>
                Próximo
              </button>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HardSkills;
