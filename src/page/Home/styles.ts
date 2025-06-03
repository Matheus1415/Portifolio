import styled from "styled-components";

export const MainContainer = styled.main`
  overflow-x: hidden;
  max-width: 1280px;
  width: 87%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 700px;
  padding: 40px 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LeftSection = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  color: #c084fc;
  background-image: linear-gradient(
    to right,
    rgba(42, 0, 85, 0.55),
    transparent
  );

  @media (max-width: 640px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-size: 28px;
  color: #a78bfa;
  margin-top: 10px;

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

export const TypingText = styled.p`
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  color: #8b5cf6;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 24px;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 50%;
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
`;

export const TechName = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: #d8b4fe;
`;

export const SocialIconsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;
  padding: 0 10px;
`;

export const SocialLink = styled.a`
  font-size: 30px;
  color: rgb(255, 255, 255);
  transition: transform 0.3s ease, color 0.3s;

  &:hover {
    color: #c084fc;
    transform: scale(1.2);
  }
`;
