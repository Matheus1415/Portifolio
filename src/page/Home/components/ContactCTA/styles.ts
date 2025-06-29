import styled from "styled-components";
import { motion } from "framer-motion";

export const CTAContainer = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  position: relative;
  background-color: ${(props) => props.theme["gray-400"]};
  overflow: hidden;
`;

export const CTAContent = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

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
    animation: pulse 10s linear infinite;
    z-index: 0;
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

export const CTAInfo = styled.div`
  flex: 1;
  z-index: 1;
`;

export const CTAHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme["gray-500"]};
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  color: ${(props) => props.theme["gray-100"]};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const CTAText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme["gray-900"]};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${(props) => props.theme["purple-700"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 1rem;
  padding: 0.9rem 1.8rem;
  border-radius: 18px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme["purple-500"]};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;
