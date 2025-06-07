import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #9f7aea;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;

export const SkillsContainer = styled(motion.div)`
  max-height: 650px;  
  overflow-y: auto;
  display: grid;
  max-width: 60%;
  grid-template-columns: 1fr; 
  gap: 1.5rem;
  padding-right: 0.5rem; 

  scrollbar-width: thin;
  scrollbar-color: #9f7aea transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9f7aea;
    border-radius: 12px;
    transition: background-color 0.3s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #c4b5fd;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Card = styled(motion.div)`
  background: #1e1f2a;
  border-radius: 16px;
  padding: 1.8rem 2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  outline: none;

  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 1.5rem;
    color: #d1d5db;
    font-weight: 700;
    font-size: 1.3rem;
  }

  p {
    margin: 0;
  }

  &:hover,
  &:focus {
    transform: translateY(-5px);
    box-shadow: 0 10px 1px rgba(159, 122, 234, 0.3);
    background: #292b45;
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(20, 20, 35, 0.85);
  z-index: 999;
`;

export const DetailsModal = styled(motion.div)`
  position: fixed;
  transform: translate(-50%, -50%);
  max-width: 680px;
  width: 90vw;
  max-height: 85vh;
  overflow-y: auto;
  background: #1f2233;
  color: #e0e7ff;
  padding: 2.5rem 3rem;
  border-radius: 20px;
  z-index: 1000;
  box-shadow: 0 0 25px rgba(159, 122, 234, 0.6);

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9f7aea;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  scrollbar-width: thin;
  scrollbar-color: #9f7aea transparent;

  p {
    margin-top: 1rem;
    line-height: 1.6;
    font-weight: 300;
    color: #d1d5db;
  }

  ul {
    margin-top: 1rem;
    padding-left: 1.25rem;
    list-style-type: disc;
    color: #c4b5fd;

    li {
      margin-bottom: 0.5rem;
      font-weight: 300;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.8rem;
  font-size: 2.3rem;
  background: transparent;
  border: none;
  color: #9f7aea;
  cursor: pointer;
  font-weight: 800;
  line-height: 1;
  transition: color 0.3s ease;

  &:hover {
    color: #c4b5fd;
  }
`;
