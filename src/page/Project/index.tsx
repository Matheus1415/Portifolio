import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { SiSass, SiTypescript } from "react-icons/si";
import { IoLogoJavascript, IoTimeOutline } from "react-icons/io5";
import { FiFigma } from "react-icons/fi";
import { FaFileCode, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import { BsTrello } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { GoServer } from "react-icons/go";
import { IconType } from "react-icons";

const projetos = [
  {
    id: 1,
    title: "Restaurant Web App",
    subtitle: "Front-end | UI",
    description:
      "O Restaurant App é uma aplicação web moderna e interativa, desenvolvida com React e TypeScript, que permite aos usuários explorar um vasto cardápio de pratos disponíveis em um restaurante, aplicar filtros e visualizar detalhes de cada prato, proporcionando uma experiência agradável e prática.",
    groupBottom: [
      {
        button: "Repositório",
        icon: <FaGithub />,
        url: "https://github.com/Matheus1415/restaurante",
      },
    ],
    text: "O sistema foi projetado para proporcionar uma navegação fluida, com uma interface limpa e funcional, utilizando os melhores recursos do React para criar componentes reutilizáveis e dinâmicos. A aplicação é responsiva e otimizada para diferentes dispositivos.",
    images: ["Carousel images"],
    summary:
      "Desenvolvi uma aplicação web moderna e otimizada, que melhora a experiência de explorar cardápios de restaurantes.",
    boxIcon: [
      {
        icon: <SiSass />,
        name: "Sass",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
    ],
  },
  {
    id: 2,
    title: "NearbyApp",
    subtitle: "Front-end | UI | Mobile",
    description:
      "NearbyApp é um aplicativo móvel desenvolvido com React Native e Expo, permitindo aos usuários localizar estabelecimentos próximos, visualizar suas informações e até resgatar cupons por meio de QR Codes. A aplicação oferece uma experiência fluida e responsiva tanto para iOS quanto para Android.",
    groupBottom: [
      {
        button: "Repositório",
        icon: <FaGithub />,
        url: "https://github.com/Matheus1415/NearbyApp",
      },
      {
        button: "Figma",
        icon: <FiFigma />,
        url: "https://www.figma.com/community/file/1448070647757721748/nlw-pocket-mobile-nearby",
      },
    ],
    text: "O aplicativo foi construído com foco em performance e usabilidade, utilizando as funcionalidades avançadas do Expo e React Native. Ele também possui integração com QR Codes, permitindo uma interação rápida e sem esforço entre usuários e comerciantes.",
    images: ["Carousel images"],
    summary:
      "A aplicação foi projetada para conectar usuários a comércios locais, proporcionando uma experiência única de localização e cupons.",
    boxIcon: [
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
      {
        icon: <FaCss3Alt />,
        name: "CSS3",
      },
    ],
  },
  {
    id: 3,
    title: "Space Explorer",
    subtitle: "Front-end | UI",
    description:
      "Space Explorer é um site com uma interface dedicada a explorar imagens de galáxias, luas e planetas, usando filtros e funcionalidades de pesquisa para aprimorar a experiência do usuário. Desenvolvido com React, a aplicação traz uma experiência de navegação interativa e visualmente impactante.",
    groupBottom: [
      {
        button: "Repositório",
        icon: <FaGithub />,
        url: "https://github.com/Matheus1415/siteEspacial",
      },
    ],
    text: "Com um design minimalista e focado na exploração espacial, o projeto proporciona uma navegação intuitiva, permitindo que os usuários explorem o vasto universo de imagens espaciais de forma simples e imersiva.",
    images: ["Carousel images"],
    summary:
      "Criei um site interativo e educativo, permitindo aos usuários explorar imagens do espaço de maneira dinâmica.",
    boxIcon: [
      {
        icon: <SiSass />,
        name: "Sass",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
    ],
  },
  {
    id: 4,
    title: "Pomodoro",
    subtitle: "Front-end | Lógica",
    description:
      "O Pomodoro é um aplicativo simples para gerenciamento de tarefas baseado na técnica Pomodoro. Desenvolvido com HTML, CSS, TypeScript e JavaScript, permite aos usuários adicionar tarefas e controlar o tempo dedicado a cada uma delas através de um cronômetro.",
    groupBottom: [
      {
        button: "Repositório",
        icon: <FaGithub />,
        url: "https://github.com/Matheus1415/Comodoro",
      },
    ],
    text: "O projeto visa melhorar a produtividade dos usuários, combinando o gerenciamento de tarefas com o acompanhamento de tempo em intervalos específicos, proporcionando um foco contínuo nas atividades.",
    images: ["Carousel images"],
    summary:
      "Criei uma aplicação simples que ajuda usuários a melhorar sua produtividade usando a técnica Pomodoro.",
    boxIcon: [
      {
        icon: <FaHtml5 />,
        name: "HTML5",
      },
      {
        icon: <FaCss3Alt />,
        name: "CSS3",
      },
      {
        icon: <IoLogoJavascript />,
        name: "JavaScript",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
    ],
  },
  {
    id: 5,
    title: "Gerenciador de Estudos",
    subtitle: "Front-end | UI | Lógica",
    description:
      "O Gerenciador de Estudos é uma aplicação single-page onde os usuários podem controlar seus tempos de estudo, adicionar tópicos e configurar alertas. Desenvolvido com React, TypeScript e Sass, o aplicativo oferece uma interface fluida e recursos para otimização do estudo.",
    groupBottom: [
      {
        button: "Repositório",
        icon: <FaGithub />,
        url: "https://github.com/Matheus1415/gerenciador-de-estudo",
      },
    ],
    text: "Com um foco em produtividade e organização, o aplicativo permite que o usuário defina sua rotina de estudos, controle o tempo dedicado a cada atividade e visualize seu progresso.",
    images: ["Carousel images"],
    summary:
      "Desenvolvi um sistema que ajuda no gerenciamento do tempo de estudo, aumentando a produtividade do usuário.",
    boxIcon: [
      {
        icon: <SiSass />,
        name: "Sass",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
    ],
  },
  {
    id: 6,
    title: "Gerenciador de Evento",
    subtitle: "Front-end | UI | Lógica | Recoil",
    description:
      "O Gerenciador de Eventos é uma aplicação single-page que permite o gerenciamento de eventos, incluindo a criação, edição e filtragem de eventos por data. Desenvolvido com React, TypeScript, Sass e Recoil, a aplicação é altamente interativa e fácil de usar.",
    groupBottom: [
      {
        button: "Repositório",
        icon: <FaGithub />,
        url: "https://github.com/Matheus1415/Gerenciador-de-eventos",
      },
    ],
    text: "Este sistema oferece uma interface de fácil uso para administrar múltiplos eventos, com suporte a filtros e personalizações dinâmicas para o gerenciamento de datas e detalhes de cada evento.",
    images: ["Carousel images"],
    summary:
      "Criei um sistema para gerenciamento de eventos, com funcionalidades dinâmicas de calendário e filtragem.",
    boxIcon: [
      {
        icon: <SiSass />,
        name: "Sass",
      },
      {
        icon: <SiTypescript />,
        name: "TypeScript",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
    ],
  },
  {
    id: 7,
    title: "Tech Innovation Hub",
    subtitle: "Back-end | Lógica | API-REST",
    description:
      "O Tech Innovation Hub é uma API RESTful desenvolvida com Laravel que permite o gerenciamento de usuários, startups e propostas de investimentos, fornecendo endpoints para o registro e consulta de dados essenciais para a gestão de inovações tecnológicas.",
    groupBottom: [
      {
        button: "Repositório",
        icon: <FaGithub />,
        url: "https://github.com/Matheus1415/TechInnovationHub",
      },
    ],
    text: "A API foi projetada para gerenciar dados de forma eficaz e escalável, com um sistema robusto de autenticação e autorização para garantir a segurança e integridade das informações.",
    images: ["Carousel images"],
    summary:
      "Desenvolvi uma API RESTful para gerenciar startups, investimentos e usuários no ecossistema de inovação.",
    boxIcon: [
      {
        icon: <TbBrandLaravel />,
        name: "Laravel",
      },
      {
        icon: <SiMysql />,
        name: "MySQL",
      },
    ],
  },
  {
    id: 8,
    title: "Mendel",
    subtitle: "Front-end | Back-end | Lógica | Tech Lead | Project management",
    description:
      "Este projeto de genética interativa foi desenvolvido para proporcionar uma experiência educacional rica em conceitos genéticos, utilizando um design interativo e visualmente atraente.",
    groupBottom: [
      {
        button: "Repositório",
        icon: <FaGithub />,
        url: "https://github.com/Matheus1415/Mendel",
      },
      {
        button: "Mendel",
        icon: <FaGithub />,
        url: "https://mendel-legacy.netlify.app/",
      },
    ],
    text: "O projeto foi desenvolvido para proporcionar uma experiência educacional rica em conceitos genéticos, utilizando um design interativo e visualmente atraente, com tecnologias modernas e práticas educacionais inovadoras.",
    images: ["Carousel images"],
    summary:
      "Este projeto interativo de genética visa oferecer um aprendizado mais envolvente e acessível sobre os conceitos genéticos.",
    boxIcon: [
      {
        icon: <SiChakraui />,
        name: "Chakra UI",
      },
      {
        icon: <IoLogoJavascript />,
        name: "JavaScript",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
    ],
  },
];

const colors = [
  "#D4A5E4",
  "#9C7AC5",
  "#B87CE6",
  "#7D4CC7",
  "#A64DDB",
  "#B569E5",
  "#9A4CC0",
  "#6A3D8E",
];

const colorFunction = () => {
  let numberSort = Math.floor(Math.random() * (8 - 0) + 0);
  return colors[numberSort];
};

const Container = styled.section`
  min-height: 100vh;
  background-color: #1b1b2c;
  min-width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  & > .header {
    background-color: #2e2e4b;
    min-width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 0 15px;

    & > .title {
      font-family: "Roboto", sans-serif;
      width: 100%;
      max-width: 49%;
      color: white;
      font-weight: bold;
      padding: 15px;
      font-size: 45px;
      text-align: center;
    }

    & > .info {
      background-color: #fff;
      box-shadow: 1px 2px 15px 5px #00000016;
      border-radius: 10px;
      width: 450px;
      max-width: 49%;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      padding: 10px;

      & > .topicos {
        width: 100%;
        & > span {
          font-family: "Roboto", sans-serif;
          font-size: 30px;
          font-weight: bold;
          color: #525c65;
        }
        & > .group-topc {
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          border-radius: 5px;
          color: white;
          gap: 5px;
          flex-wrap: wrap;

          & > p {
            border-radius: 5px;
            padding: 10px;
          }
        }
      }

      & > .dates {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        justify-items: center;

        & > .summary-time {
          flex: 0 0 48%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 20px;
          color: #525c65;
          padding: 10px;

          & > .time {
            font-size: 20px;

            & > span {
              font-size: 24px;
              padding-top: 8px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  & > .content {
    min-width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;

    & > .description {
      max-width: 1560px;
      text-align: justify;
      font-size: 18px;
      line-height: 1.6;
      color: #ffffff;
      margin-bottom: 20px;
      & > h2 {
        font-family: "Roboto", sans-serif;
        font-size: 35px;
        font-weight: bold;
      }
      & > h3 {
        font-family: "Roboto", sans-serif;
        font-size: 22px;
        font-weight: regular;
        color: #525c65;
      }
    }

    & > .group-bottom {
      width: 100%;
      padding: 15px 0;
      display: flex;
      gap: 20px;

      & > button {
        border: 0;
        padding: 10px 20px;
        border-radius: 10px;
        background-color: transparent;
        color: white;
        border: 1px solid white;
        font-size: 25px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: transform 0.2s, box-shadow 0.2s;

    }
    & > button:hover {
      border: none;
      transform: scale(1.05);
      color: #000000;
      background-color: #ffffff;
      box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.3);
    }
    }

    & > .inforProject {
      width: 100%;
      padding: 15px 0;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;

      & > .w50 {
        width: 100%;
        max-width: 49%;
        color: white !important;

        .impact-info {
          .boxIcon {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 10px;

            .icon {
              display: flex;
              align-items: center;
              gap: 8px;
              font-size: 16px;
              padding: 10px;
              background-color: #000000;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease;

              &:hover {
                transform: scale(1.1);
              }

              svg {
                font-size: 30px;
                color: #ffffff;
              }

              span {
                color: #ffffff;
                font-size: 22px;
                font-weight: 500;
              }
            }
          }
          h2 {
            font-size: 24px;
            margin-bottom: 10px;
            color: #333;
          }

          p {
            font-size: 20px;
            margin-bottom: 8px;
            line-height: 1.5;

            strong {
              color: #a646ea;
              font-size: 25px;
            }
          }
        }
      }
    }
  }
`;

type ProjetoType = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  groupBottom: {
    button: string;
    icon: JSX.Element; // Mudando para JSX.Element diretamente
    url: string;
  }[];
  text: string;
  images: string[];
  summary: string;
  boxIcon: {
    icon: JSX.Element; // Mudando para JSX.Element diretamente
    name: string;
  }[];
  githubUrl?: string;
  figmaUrl?: string;
  html_url?: string;
};

interface RepoData {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  language: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  topics: string[];
}

export const ProjetPage = () => {
  const { id } = useParams();
  const projeto: ProjetoType | undefined = projetos.find(
    (proj) => proj.id === parseInt(id || "0")
  );
  const [repoData, setRepoData] = useState<RepoData | null>(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        if (projeto?.groupBottom[0]?.url) {
          const repoName = projeto.groupBottom[0]?.url.split("/").pop();
          const response = await fetch(
            `https://api.github.com/repos/Matheus1415/${repoName}`
          );

          const data = await response.json();
          setRepoData(data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchRepoData();
  }, [projeto?.groupBottom]);

  const createdAt = repoData ? new Date(repoData.created_at) : null;
  const updatedAt = repoData ? new Date(repoData.updated_at) : null;

  const formattedCreatedAt = createdAt ? createdAt.toLocaleDateString() : "";
  const formattedUpdatedAt = updatedAt ? updatedAt.toLocaleDateString() : "";

  return (
    <Container>
      <div className="header">
        <div className="title">
          <h1>{repoData?.name}</h1>
        </div>
        <div className="info">
          <div className="topicos">
            <span>Tópicos</span>
            <div className="group-topc">
              {repoData?.topics.length ? (
                repoData.topics.map((topic) => (
                  <p key={topic} style={{ background: "#f0f0f0" }}>
                    {topic}
                  </p>
                ))
              ) : (
                <p>Sem tópicos definidos</p>
              )}
            </div>
          </div>
          <div className="dates">
            <div className="summary-time">
              <div className="icon">
                <IoTimeOutline size={40} />
              </div>
              <div className="time">
                Criado em <br /> <span>{formattedCreatedAt}</span>
              </div>
            </div>
            <div className="summary-time">
              <div className="icon">
                <IoTimeOutline size={40} />
              </div>
              <div className="time">
                Atualizado em <br /> <span>{formattedUpdatedAt}</span>
              </div>
            </div>
            <div className="summary-time">
              <div className="icon">
                <FaFileCode size={40} />
              </div>
              <div className="time">
                Linguagem principal <br /> <span>{repoData?.language}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="group-bottom">
          {projeto?.groupBottom?.map((item, index) => (
            <button
              key={index}
              id={item.button.toLowerCase()}
              onClick={() => window.open(item.url, "_blank")}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.button}
            </button>
          ))}
        </div>

        <div className="description">
          <h2>Sobre o Projeto</h2>
          <h3>Front-end | Logica</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            sequi optio vel iusto numquam aut suscipit fugiat fuga dolore
            laborum harum odio velit ipsam, aliquid officia. Fugit voluptatum
            culpa repudiandae! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit, quo sint nulla quidem possimus et,
            ipsam laboriosam dolorum rem, nemo voluptatibus suscipit adipisci
            minus assumenda! Amet perferendis illum consequatur. Tempora! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            laudantium impedit molestiae nisi deleniti repellendus quisquam
            placeat nihil dicta, eum aliquid! Nihil voluptatem accusantium dolor
            ducimus, sed magni nostrum qui?
          </p>
        </div>
        <div className="inforProject">
          <div className="w50">
            {/* <Carousel images={projeto?.images}/> */}
          </div>
          <div className="w50">
            <div className="impact-info">
              <p>
                <strong>Resumo:</strong> Desenvolvi um sistema inovador que
                automatiza e otimiza processos, aumentando a eficiência em 30%.
              </p>
              <p className="ferramenta">
                <strong>Ferramentas Utilizadas:</strong>
              </p>
              <div className="boxIcon">
                {projeto?.boxIcon.map((tool, index) => (
                  <div className="icon" key={index}>
                    {tool.icon}
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
