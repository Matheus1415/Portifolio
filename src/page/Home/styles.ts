import styled from "styled-components";

export const MainContainer = styled.main`
  overflow-x: hidden;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 700px;
  padding: 0 20px; 
`;


export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgb(30, 30, 47);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  gap: 24px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const AboutText = styled.div`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.8;
  color: #e9d5ff;
  max-width: 50%;
  white-space: pre-line;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  color: #c084fc;
  background-image: linear-gradient(to right, rgba(42, 0, 85, 0.55), transparent);

  @media (max-width: 768px) {
    font-size: 56px;
  }

  @media (max-width: 640px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 28px;
  color: #a78bfa;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const TypingText = styled.p`
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  color: #8b5cf6;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TechIcon = styled.div`
  font-size: 64px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 640px) {
    font-size: 48px;
  }
`;

export const TechName = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: #d8b4fe;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const SocialIconsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 10px;
`;

export const SocialLink = styled.a`
  font-size: 30px;
  color: rgb(255, 255, 255);
  transition: transform 0.3s ease, color 0.3s;
  text-decoration: none;
  border: none;

  &:hover {
    color: #c084fc;
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
