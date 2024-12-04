import React, { useState } from "react";
import styled from "styled-components";
import { FaLightbulb, FaHandsHelping, FaUsers, FaBrain } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiMysql,
  SiLaravel,
  SiPhp,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

const SkillsContainer = styled.section`
  width: 100%;
  max-width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f0f19;
  padding: 50px 20px;

  & > h1 {
    font-size: 50px;
    margin-bottom: 50px;
    color: #ffffff;
    text-align: center;
  }

  & > .skillsContent {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    width: 100%;
    max-width: 1200px;

    & > .softSkills,
    & > .hardSkills {
      flex: 1;
      border-radius: 10px;
      padding: 30px;
      color: white;

      & > h2 {
        font-size: 30px;
        margin-bottom: 25px;
        color: #8257e6;
        text-align: center;
      }
    }

    & > .softSkills {
      ul {
        list-style: none;
        padding: 0;

        & > li {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 20px;
          margin: 15px 0;

          & > svg {
            font-size: 30px;
            color: #8257e6;
          }
        }
      }
    }

    & > .hardSkills {
      display: flex;
      flex-direction: column;
      gap: 25px;

      & > .skill {
        display: flex;
        align-items: center;
        gap: 20px;

        & > svg {
          font-size: 50px;
          color: #fff;
        }

        & > .progressContainer {
          position: relative;
          width: 100%;
          height: 20px;
          background-color: #333;
          border-radius: 10px;
        }

        .progressBar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 10px;
          transition: width 1s ease;
        }

        #progressBar-js {
          background-color: #f7df1e;
          box-shadow: 0 0 15px #f7df1e, 0 0 30px #f7df1e;
          filter: brightness(1.2);
        }

        #progressBar-react {
          background-color: #61dafb;
          box-shadow: 0 0 15px #61dafb, 0 0 30px #61dafb;
          filter: brightness(1.2);
        }

        #progressBar-ts {
          background-color: #007acc;
          box-shadow: 0 0 15px #007acc, 0 0 30px #007acc;
          filter: brightness(1.2);
        }

        #progressBar-html {
          background-color: #e34c26;
          box-shadow: 0 0 15px #e34c26, 0 0 30px #e34c26;
          filter: brightness(1.2);
        }

        #progressBar-css {
          background-color: #264de4;
          box-shadow: 0 0 15px #264de4, 0 0 30px #264de4;
          filter: brightness(1.2);
        }

        #progressBar-mysql {
          background-color: #00758f;
          box-shadow: 0 0 15px #00758f, 0 0 30px #00758f;
          filter: brightness(1.2);
        }

        #progressBar-git {
          background-color: #f05032;
          box-shadow: 0 0 15px #f05032, 0 0 30px #f05032;
          filter: brightness(1.2);
        }

        #progressBar-laravel {
          background-color: #ff2d20;
          box-shadow: 0 0 15px #ff2d20, 0 0 30px #ff2d20;
          filter: brightness(1.2);
        }

        #progressBar-php {
          background-color: #8993be;
          box-shadow: 0 0 15px #8993be, 0 0 30px #8993be;
          filter: brightness(1.2);
        }

        #progressBar-jquery {
          background-color: #5afa82;
          box-shadow: 0 0 15px #5afa82, 0 0 30px #5afa82;
          filter: brightness(1.2);
        }
      }
    }
  }
`;

const Skills: React.FC = () => {
  const [progress, setProgress] = useState({
    js: 0,
    react: 0,
    jquery: 0,
    ts: 0,
    html: 0,
    css: 0,
    mysql: 0,
    git: 0,
    laravel: 0,
    php: 0,
  });

  const handleMouseEnter = (skill: string, value: number) => {
    setProgress((prev) => ({ ...prev, [skill]: value }));
  };

  const handleMouseLeave = (skill: string) => {
    setProgress((prev) => ({ ...prev, [skill]: 0 }));
  };

  return (
    <SkillsContainer>
      <h1>Minhas Habilidades</h1>
      <div className="skillsContent">
        <div className="softSkills">
          <h2>Soft Skills</h2>
          <ul>
            <li>
              <FaLightbulb />
              Criatividade para resolver problemas
            </li>
            <li>
              <FaHandsHelping />
              Trabalho em equipe e colaboração
            </li>
            <li>
              <FaUsers />
              Comunicação interpessoal
            </li>
            <li>
              <FaBrain />
              Pensamento crítico e analítico
            </li>
            <li>
              <FaHandsHelping />
              Colaboração
            </li>
            <li>
              <FaUsers />
              Flexibilidade
            </li>
            <li>
              <FaBrain />
              Capacidade de trabalhar sob pressão
            </li>
            <li>
              <FaLightbulb />
              Resiliência e inteligência emocional
            </li>
          </ul>
        </div>

        <div className="hardSkills">
          <h2>Hard Skills</h2>
          <div
            className="skill"
            onMouseEnter={() => handleMouseEnter("js", 90)}
            onMouseLeave={() => handleMouseLeave("js")}
          >
            <SiJavascript />
            <div className="progressContainer">
              <div
                id="progressBar-js"
                className="progressBar"
                style={{ width: `${progress.js}%` }}
              ></div>
            </div>
          </div>
          <div
            className="skill"
            onMouseEnter={() => handleMouseEnter("react", 85)}
            onMouseLeave={() => handleMouseLeave("react")}
          >
            <SiReact />
            <div className="progressContainer">
              <div
                id="progressBar-react"
                className="progressBar"
                style={{ width: `${progress.react}%` }}
              ></div>
            </div>
          </div>
          <div
            className="skill"
            onMouseEnter={() => handleMouseEnter("jquery", 85)}
            onMouseLeave={() => handleMouseLeave("jquery")}
          >
            <SiJquery />
            <div className="progressContainer">
              <div
                id="progressBar-jquery"
                className="progressBar"
                style={{ width: `${progress.jquery}%` }}
              ></div>
            </div>
          </div>
          <div
            className="skill"
            onMouseEnter={() => handleMouseEnter("ts", 65)}
            onMouseLeave={() => handleMouseLeave("ts")}
          >
            <SiTypescript />
            <div className="progressContainer">
              <div
                id="progressBar-ts"
                className="progressBar"
                style={{ width: `${progress.ts}%` }}
              ></div>
            </div>
          </div>
          <div
            className="skill"
            onMouseEnter={() => handleMouseEnter("html", 95)}
            onMouseLeave={() => handleMouseLeave("html")}
          >
            <FaHtml5 />
            <div className="progressContainer">
              <div
                id="progressBar-html"
                className="progressBar"
                style={{ width: `${progress.html}%` }}
              ></div>
            </div>
          </div>
          <div
            className="skill"
            onMouseEnter={() => handleMouseEnter("css", 85)}
            onMouseLeave={() => handleMouseLeave("css")}
          >
            <FaCss3Alt />
            <div className="progressContainer">
              <div
                id="progressBar-css"
                className="progressBar"
                style={{ width: `${progress.css}%` }}
              ></div>
            </div>
          </div>
          <div
            className="skill"
            onMouseEnter={() => handleMouseEnter("mysql", 70)}
            onMouseLeave={() => handleMouseLeave("mysql")}
          >
            <SiMysql />
            <div className="progressContainer">
              <div
                id="progressBar-mysql"
                className="progressBar"
                style={{ width: `${progress.mysql}%` }}
              ></div>
            </div>
          </div>
          <div
            className="skill"
            onMouseEnter={() => handleMouseEnter("git", 40)}
            onMouseLeave={() => handleMouseLeave("git")}
          >
            <FaGitAlt />
            <div className="progressContainer">
              <div
                id="progressBar-git"
                className="progressBar"
                style={{ width: `${progress.git}%` }}
              ></div>
            </div>
          </div>
          <div
            className="skill"
            onMouseEnter={() => handleMouseEnter("laravel", 85)}
            onMouseLeave={() => handleMouseLeave("laravel")}
          >
            <SiLaravel />
            <div className="progressContainer">
              <div
                id="progressBar-laravel"
                className="progressBar"
                style={{ width: `${progress.laravel}%` }}
              ></div>
            </div>
          </div>
          <div
            className="skill"
            onMouseEnter={() => handleMouseEnter("php", 85)}
            onMouseLeave={() => handleMouseLeave("php")}
          >
            <SiPhp />
            <div className="progressContainer">
              <div
                id="progressBar-php"
                className="progressBar"
                style={{ width: `${progress.php}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
