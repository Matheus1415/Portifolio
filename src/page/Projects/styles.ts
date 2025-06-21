import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  min-height: 100vh;
  max-height: 800px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7c3aed;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  scrollbar-width: thin;
  scrollbar-color: rgba(124, 58, 237, 0.5) transparent;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`;

export const ProjectCard = styled.div`
  perspective: 1000px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardInner = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  height: 230px;
  display: flex;
  flex-direction: column;
  position: relative;
  transform-style: preserve-3d;
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  background-color: rgb(29, 0, 50);
  border-radius: 12px;
  overflow: hidden;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: rgb(43, 21, 82);
  color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1.3rem;
    color: rgb(255, 255, 255);
  }

  p {
    font-size: 0.95rem;
    margin: 1rem 0;
    flex-grow: 1;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  background-position: left center;
  background-size: cover;
  object-fit: cover;
  border-radius: 12px;
`;

export const TechnologyTag = styled.span<{ technology: string }>`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: ${({ technology }) =>
    technology === "React"
      ? "#86E1F9"
      : technology === "Laravel"
      ? "#f98686"
      : technology === "TypeScript"
      ? "#8693f9"
      : technology === "php"
      ? "#c786f9"
      : "#ccc"};
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  color: #000;
  font-weight: bold;
  font-size: 0.8rem;
`;

export const StyledButton = styled.button`
  background: linear-gradient(135deg, #6a4f9a, #482d8a);
  color: #fff;
  border: none;
  padding: 0.6rem 1.6rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 0.5rem 0.25rem;
  box-shadow: 0 6px 15px rgba(106, 79, 154, 0.5);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #7c59b3, #5936a9);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(124, 89, 179, 0.7);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(106, 79, 154, 0.4);
  }
`;

export const FullscreenModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: #0d1117;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
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

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SectionTitle = styled.h3`
  color: rgb(143, 65, 192);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #cdd9e5;
`;

export const LinkButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #6a4f9a, #482d8a);
  color: #fff;
  padding: 0.6rem 1.6rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(106, 79, 154, 0.5);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #7c59b3, #5936a9);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(124, 89, 179, 0.7);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(106, 79, 154, 0.4);
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const SectionBlock = styled.div`
  background-color: #161b22;
  border-radius: 16px;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  border: 1px solid #30363d;
`;

export const ImagePlaceholder = styled.div`
  background-color: #0d1117;
  border: 1px dashed #6a4f9a;
  border-radius: 12px;
  padding: 1rem;
  color: #8b949e;
  font-style: italic;
  text-align: center;
`;

export const AuthorsList = styled.ul`
  margin-top: 1rem;
  padding-left: 1.25rem;
  list-style-type: disc;
`;

export const AuthorItem = styled.li`
  margin-bottom: 0.75rem;
  color: #cdd9e5;
`;

export const AuthorName = styled.strong`
  font-size: 1.1rem;
  color: #e1e8ff;
`;

export const GithubLink = styled.a`
  color: #8ab4f8;
  margin-left: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;

  &:hover {
    color: #5c81f9;
    text-decoration: underline;
  }
`;

export const Roles = styled.div`
  font-size: 0.95rem;
  color: #aab9d6;
  margin-top: 0.15rem;
`;

export const Description = styled.div`
  font-style: italic;
  font-size: 0.9em;
  color: #8f9fc0;
  margin-top: 0.25rem;
  line-height: 1.3;
`;

