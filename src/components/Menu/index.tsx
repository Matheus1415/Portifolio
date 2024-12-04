import React, { useState } from "react";
import styled from "styled-components";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const ContainerMenu = styled.div`
  width: 100%;
  max-width: 97%;
  padding-top: 20px;
  text-align: right;
  display: flex;
  flex-direction: row;
  gap: 15px;

  & > .text {
    font-size: 30px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 1s;
  }

  & > .text > .line {
    height: 5px;
    width: 80px;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 2px;
    transition: 1s;
  }

  & > .text:hover > .line {
    background-color: #6c6c87;
    box-shadow: -3px -7px 53px 10px #6c6c87;
  }

  & > .div70 {
    width: 100%;
    max-width: 70%;
  }
`;


export const Menu: React.FC = () => {
  return (
    <ContainerMenu>
      <div className="div70"></div>
      <div className="text" >
        <p>Início</p>
        <div className="line"></div>
      </div>
    </ContainerMenu>
  );
};
