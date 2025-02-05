import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import BubbleEffect from "../BubbleEffect";
import Tooltip from "../Tooltip";
import { InteractiveFace } from "../InteractiveFace";
import linkedin from '../../assets/icon/linkedin.json';
import insta from '../../assets/icon/insta.json';
import donwload from '../../assets/icon/donwload.json';

const Container = styled.section`
  min-height: 910px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  & > .box50 {
    color: white;
    width: 50%;
    min-height: 400px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    z-index: 1; 

    @media (max-width: 600px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    & > h1 {
      font-size: 70px!important;
      font-weight: 400 !important;
      text-align: center;
      color: #9069ec;
      
      @media (max-width: 600px) {
        font-size: 30px;
      }

      & > span {
        font-size: 80px!important;
        font-weight: 900!important;
        color: #ffffff;

        &::selection {
          background-color: #6846b5;
          color: white;
        }
      }

      &::selection {
        background-color: #8257e6;
        color: white;
      }
    }

    & > h2 {
      font-size: 40px;
      color: #bda5f4;

      @media (max-width: 600px) {
        font-size: 25px;
      }

      font-family: "Anton", sans-serif;

      &::selection {
        color: #ffffff;
        background-color: #8257e6;
      }
    }

    & > .boxIcon {
      padding: 5px;
      font-size: 45px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    @media (max-width: 900px) {
      width: 100%;
      align-items: center;
      text-align: center;
    }
  }
`;

  const BubbleContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-height: 910px;
    min-width: 100%;
    z-index: 0; 
    overflow: hidden; 
  `;

export default function HeroSection() {
  return (
    <Container id="inicio">
      <BubbleContainer>
        <BubbleEffect /> 
      </BubbleContainer>
      <div className="box50">
        <h1>
          Olá, me chamo <span>Matheus</span>
        </h1>
        <h2>Desenvolvedor Full Stack</h2>
        <div className="boxIcon">
          <Tooltip
            icon={<FaGithub />}
            message="matheus1415"
            url="https://github.com/Matheus1415"
          />
          <Tooltip
            lottie_react={insta}
            size={50}
            message="@mps_devaretado"
            url="https://www.instagram.com/mps_devaretado/"
          />
          <Tooltip
            lottie_react={linkedin}
            message="matheus-pereira-da-silva"
            url="https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/"
          />
          <Tooltip
            lottie_react={donwload}
            size={50}
            message="Currículo"
            url="https://drive.google.com/file/d/1GwXc4K0uACo_WlaBZIXF7Vtw-jLgAIaj/view?usp=sharing"
          />
        </div>
      </div>
      <div className="box50">
        <InteractiveFace />
      </div>
    </Container>
  );
}
