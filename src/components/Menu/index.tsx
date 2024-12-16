import styled from "styled-components";

const ContainerMenu = styled.div`
  width: 100%;
  max-width: 97%;
  padding-top: 20px;
  text-align: right;
  display: flex;
  flex-direction: row;
  gap: 15px;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  & > .text {
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 1s;
    @media (max-width: 600px) {
      width: 100%;
      flex-direction: column;
    }
  }

  & > .text > a {
    text-decoration: none;
    color: #46465e;
    transition: 1s;
    @media (max-width: 600px) {
      font-size: 16px;
      display: inline-block;
    }
  }

  & > .text > a:hover {
    color: white !important;
    background-color: #6c6c8752;
    box-shadow: -3px -7px 53px 10px #6c6c87;
  }

  & > .div70 {
    width: 100%;
    max-width: 60%;
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const Menu: React.FC = () => {
  return (
    <ContainerMenu>
      <div className="div70"></div>
      <div className="text">
        <a href="#inicio">Início</a>
      </div>
      <div className="text">
        <a href="#projetos">Projetos</a>
      </div>
      <div className="text">
        <a href="#habilidades">Habilidades </a>
      </div>
      <div className="text">
        <a href="#sobre">Sobre</a>
      </div>
      <div className="text">
        <a href="#experiencia">Experiência</a>
      </div>
    </ContainerMenu>
  );
};
