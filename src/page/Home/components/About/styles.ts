import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 4rem;
`;

export const Container = styled(motion.section)`
  width: 100%;
  background-color: ${(props) => props.theme["gray-400"]};
  min-height: 400px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme["gray-900"]};
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: justify;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.05),
      transparent 70%
    );
    animation: pulse 8s linear infinite;
    z-index: 0;
  }

  h2 {
    font-size: 1.8rem;
    color: ${(props) => props.theme["gray-900"]};
    background-color: ${(props) => props.theme["gray-500"]};
    max-width: 600px;
    padding: 10px 15px;
    border-radius: 5px;
    margin: 0 0 15px 0;
    z-index: 1;
  }

  p {
    margin-bottom: 10px;
    font-size: 1.2rem;
    z-index: 1;
  }

  span {
    font-weight: bold;
  }

  img {
    width: 100%;
    max-width: 40%;
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    text-align: left;

    h2 {
      font-size: 1.5rem;
      max-width: 100%;
      text-align: center;
    }

    p {
      font-size: 1rem;
    }

    img {
      max-width: 100%;
      margin-top: 1rem;
    }
  }

  @keyframes pulse {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    100% {
      transform: translate(0, 0) rotate(360deg);
    }
  }
`;

export const GitHubButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: ${(props) => props.theme["purple-700"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  border-radius: 18px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: ${(props) => props.theme["purple-500"]};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
  }
`;