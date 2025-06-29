import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.main`
  background: white url("./bg/session-home.png") no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  min-height: 1000px;
  display: flex;
  padding-top: 80px;
  align-items: start;
  justify-content: center;

  @media (max-width: 768px) {
    background-attachment: scroll;
    padding: 2rem 1rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1480px;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem 1rem;
  }

  & > div,
  & > p,
  & > h1 {
    max-width: 60%;
  }

  & > div {
    & > p {
      color: ${(props) => props.theme["gray-800"]};
      margin-top: 10px;
      max-width: 700px;
      text-align: justify;
      font-size: 24px;
      line-height: 1.6;

      &::selection {
        background-color: ${(props) => props.theme["purple-100"]};
      }

      @media (max-width: 1024px) {
        font-size: 22px;
      }

      @media (max-width: 768px) {
        font-size: 18px;
        text-align: left;
      }

      @media (max-width: 480px) {
        font-size: 16px;
      }

      & > span {
        font-size: 18px;
        padding-left: 4px;
        border-left: 3px solid ${(props) => props.theme["gray-600"]};
        &::selection {
          background-color: ${(props) => props.theme["gray-400"]};
        }
        background-image: linear-gradient(
          to right,
          ${(props) => props.theme["gray-400"]},
          transparent
        );
      }
    }
  }
`;

export const Image = styled(motion.img)`
  max-width: 40%;
  height: auto;
  object-fit: contain;
`;


export const Title = styled.h1`
  color: ${(props) => props.theme["purple-900"]};
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;

  &::selection {
    background-color: ${(props) => props.theme["purple-100"]};
  }

  @media (max-width: 1024px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;
