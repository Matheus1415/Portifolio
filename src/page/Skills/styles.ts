import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerColumn = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
`;

export const SkillsWrapper = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const SlidesContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const CardContainer = styled(motion.div)`
  min-width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

export const SkillCard = styled(motion.div)`
  max-height: 600px;
  max-width: 1400px;
  padding: 2rem 2.5rem;
  border-radius: 16px;
  color: #e0d7ff;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
  }

  scrollbar-color: #a78bfa rgba(255, 255, 255, 0.05);
  scrollbar-width: thin;

  .icon {
    color: #d6bcfa;
    font-size: 2rem;
    transition: color 0.3s ease;
  }

  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 1.6rem;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p,
  ul,
  a {
    color: #e0d7ff;
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }

  .button-wrapper {
    margin-top: auto;
    padding-top: 1rem;
    display: flex;
    justify-content: flex-start;
    @media (max-width: 768px) {
      margin: 0;
      font-size: 0.75rem;
    }
  }

  a {
    display: inline-block;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 6px;
    background-color: rgb(48, 27, 95);
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: rgb(43, 24, 88);
    }
  }

  ul {
    padding-left: 1.5rem;
    list-style-type: disc;
    margin: 0;
  }

  &:hover {
    .icon {
      color: #ede9fe;
    }
  }
`;

export const CarouselControls = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavButton = styled.button`
  background-color: #5b21b6;
  border: none;
  outline: none;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.2s ease;

  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    
    margin-left: 9px;
    padding: 8px 12px;
  }

  &:hover {
    background-color: #4c1d95;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.4);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    border: none;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background: #222;
  color: #fff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &.active {
    background: ${(thema) => thema.theme["purple-300"]};
  }

  &:hover {
    background: ${(thema) => thema.theme["purple-500"]};
  }
`;
