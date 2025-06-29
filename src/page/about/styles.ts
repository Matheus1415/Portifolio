import styled from "styled-components";
import { motion } from "framer-motion";

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

  @media (max-width: 768px) {
    padding: 0 12px;
    justify-content: center;
    max-height: 100vh;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  gap: 2rem;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem;
    overflow-y: auto;

    /* Scrollbar personalizada */
    scrollbar-width: thin;
    scrollbar-color: #6a4f9a transparent;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #6a4f9a;
      border-radius: 8px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  color: #c084fc;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Paragraph = styled.p`
  color: rgb(255, 255, 255);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const TechList = styled(motion.div)`
  display: flex;
  gap: 1rem;
  width: fit-content;
  padding-bottom: 0.5rem;
  cursor: grab;
  flex-wrap: wrap;

  &:active {
    cursor: grabbing;
  }
`;

export const TechScrollWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 1rem 0;
  position: relative;
  border: none;
`;

export const TechItem = styled(motion.div)<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ bgColor }) => bgColor || "#2e1065"};
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  border: none;
  font-size: 1rem;
  white-space: nowrap;
  user-select: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;

export const TestimonialCard = styled.div`
  max-width: 700px;
  background-color: #13131f;
  color: white;
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .user-icon {
      color: #607b96;
      font-size: 1.4rem;
    }

    .username {
      font-weight: bold;
      color: #7c3aed;
    }

    .role {
      color: #607b96;
      font-size: 0.875rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const SocialIcon = styled.div`
  cursor: pointer;
  color: #c084fc;

  &:hover {
    color: #a855f7;
  }
`;

export const CardBody = styled.div`
  margin-top: 0.8rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e0e0ff;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const TestimonialsList = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 1rem;

  scrollbar-width: thin;
  scrollbar-color: #6a4f9a transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6a4f9a;
    border-radius: 8px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
`;
