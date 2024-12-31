import React, { useState } from "react";
import styled from "styled-components";

interface MenuProps {
  isOpen: boolean;
}

const ContainerMenu = styled.div<MenuProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-250px")};
  height: 100%;
  width: 250px;
  background-color: ${(props) => (props.isOpen ? "#2c2c54" : "")};
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
`;

const Hamburger = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1100;
  cursor: pointer;

  & div {
    width: 30px;
    height: 4px;
    background-color: #fff;
    margin: 5px 0;
    transition: 0.3s;
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 60px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: #f39c12;
    }
  }
`;

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamburger onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Hamburger>

      <ContainerMenu isOpen={isOpen}>
        <MenuItems>
          <a href="#inicio" onClick={toggleMenu}>
            Início
          </a>
          <a href="#projetos" onClick={toggleMenu}>
            Projetos
          </a>
          <a href="#habilidades" onClick={toggleMenu}>
            Habilidades
          </a>
          <a href="#sobre" onClick={toggleMenu}>
            Sobre
          </a>
          <a href="#experiencia" onClick={toggleMenu}>
            Experiência
          </a>
        </MenuItems>
      </ContainerMenu>
    </>
  );
};
