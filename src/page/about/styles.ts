import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const RightSection = styled.div`
  flex: 1;
  padding: 1rem;
  max-height: 800px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(124, 58, 237, 0.5);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  scrollbar-width: thin;
  scrollbar-color: rgba(124, 58, 237, 0.5) transparent;
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  color: #c084fc;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  color: rgb(255, 255, 255);
  line-height: 1.6;
  margin-bottom: 2rem;
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
`;

export const TestimonialCard = styled(motion.div)`
  max-width: 700px;
  background-color: #13131f;
  color: white;
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
`;
