import { motion } from "framer-motion";
import styled from "styled-components";

export const ServicesContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme["gray-100"]};
  text-align: center;
  position: relative;

  padding-top: 150px;

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme["purple-900"]};
    margin-bottom: 3rem;
  }
  @media (max-width: 960px) {
    margin-top: 120px;
  }
`;

export const ContainerFloating = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 20px;
  width: 900px;
  height: 290px;
  position: absolute;
  top: -300px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    width: 90%;
    height: auto;
  }
`;

export const SlideArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;
export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 3rem;
  color: ${(props) => props.theme["purple-700"]};
  cursor: pointer;
  position: absolute;
  top: 80%;
  transform: translateY(-50%);
  z-index: 2;

  &:hover {
    color: ${(props) => props.theme["purple-500"]};
  }

  &.left {
    left: -2rem;
  }

  &.right {
    right: -2rem;
  }

  @media (max-width: 950px) {
    top: 60%;
  }

  @media (max-width: 768px) {
    top: 50%;
    font-size: 2rem;
    &.left {
      left: 0.5rem;
    }
    &.right {
      right: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ServiceCard = styled(motion.div)`
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  width: 100%;
  max-width: 600px;
  transition: transform 0.3s ease;

  svg {
    color: ${(props) => props.theme["purple-700"]};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    h2 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.95rem;
    }
  }
`;

export const Bullets = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;

  button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: ${(props) => props.theme["gray-400"]};
    cursor: pointer;
    transition: background 0.3s;
    outline: none;

    &.active {
      background: ${(props) => props.theme["purple-700"]};
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;
