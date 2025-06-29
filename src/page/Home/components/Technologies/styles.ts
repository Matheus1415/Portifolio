import { motion } from "framer-motion";
import styled from "styled-components";

export const TechnologiesContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .info {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: flex-start;

    h1 {
      font-size: 2.5rem;
      color: ${(props) => props.theme["purple-900"]};
      background-color: ${(props) => props.theme["purple-300"]};
      max-width: 460px;
      padding: 10px;
      border-radius: 5px;
      margin: 0;
      flex-shrink: 0;
      &::selection {
        background-color: ${(props) => props.theme["purple-500"]};
      }
    }

    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      p {
        font-size: 1.2rem;
        color: ${(props) => props.theme["gray-700"]};
        line-height: 1.6;

        &::selection {
          background-color: ${(props) => props.theme["gray-200"]};
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    .info {
      flex-direction: column;

      h1 {
        font-size: 2rem;
        text-align: center;
      }

      .text {
        align-items: center;
        p {
          text-align: center;
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  align-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

interface TechBoxProps {
  variant?: "primary" | "secondary";
}
export const TechBox = styled.div<TechBoxProps>`
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  min-height: 400px;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme["purple-900"] : theme["gray-900"]};
  color: ${({ theme }) => theme.white};

  box-shadow: 7px 7px 3px rgba(0, 0, 0, 0.32);
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

  div.content {
    flex: 1 1 55%;
    h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.8rem;
      font-weight: bold;
      padding: 5px;
      border-radius: 5px;
      background-color: ${({ theme, variant }) =>
        variant === "primary" ? theme["purple-300"] : theme.white};
      color: ${({ theme }) => theme["gray-900"]};
    }

    p {
      margin: 0;
      margin-top: 15px;
      text-align: justify;
      font-size: 1rem;
      line-height: 1.5;
      color: ${({ theme }) => theme.white};
    }

    .tech-icons {
      margin-top: 25px;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      font-size: 2rem;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    padding: 1.5rem;

    div.content {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;

export const Image = styled(motion.img)`
  flex: 1 1 40%;
  max-width: 200px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    display: none;
  }
`;

