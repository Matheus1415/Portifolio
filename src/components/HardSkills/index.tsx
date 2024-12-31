import React from "react";
import styled from "styled-components";
import { FaLightbulb, FaHandsHelping, FaUsers, FaBrain } from "react-icons/fa";


const SkillsContainer = styled.section`
  width: 100%;
  max-width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f0f19;
  padding: 50px 20px;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  & > h1 {
    font-size: 50px;
    margin-bottom: 50px;
    color: #ffffff;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 30px;
    }
  }

  & > .skillsContent {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    width: 100%;
    max-width: 1200px;
    @media (max-width: 600px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    & > .softSkills,
    & > .hardSkills {
      flex: 1;
      border-radius: 10px;
      padding: 30px;
      color: white;
      @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 10px;
      }

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
          @media (max-width: 600px) {
            width: 100%;
          }

          & > svg {
            font-size: 30px;
            color: #8257e6;
          }
        }
      }
    }
  }
`;

export const HardSkills: React.FC = () => {

  return (
    <SkillsContainer id="habilidades">
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
      </div>
    </SkillsContainer>
  );
};
