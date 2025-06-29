import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 4rem;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const MainProject = styled.div`
  background-color: ${(props) => props.theme["gray-100"]};
  padding: 1rem;
  border-radius: 16px;
  max-height: 800px;

  @media (max-width: 768px) {
    max-height: none;
    padding: 1rem 0.5rem;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;

  &:hover .overlay {
    opacity: 1;
    pointer-events: all;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(18, 18, 20, 0.7);
  opacity: 0;
  transition: 0.3s ease;
  pointer-events: none;
  z-index: 2;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;

  svg {
    color: ${(props) => props.theme.white};
    font-size: 1.5rem;
    background-color: ${(props) => props.theme["purple-700"]};
    padding: 0.4rem;
    border-radius: 8px;
    transition: 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme["purple-500"]};
    }
  }
`;

export const MainDescription = styled.div`
  margin-top: 20px;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme["gray-900"]};
  }

  p {
    color: ${(props) => props.theme["gray-700"]};
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const Sidebar = styled.div`
  width: 400px;
  max-height: 498px;
  overflow-y: auto;
  border-radius: 12px;
  background-color: ${(props) => props.theme["gray-100"]};
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-200"]};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["purple-700"]};
    border-radius: 8px;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-height: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
    gap: 1rem;

    &::-webkit-scrollbar {
      height: 6px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme["purple-900"]};
  background-color: ${(props) => props.theme["purple-300"]};
  padding: 10px;
  border-radius: 5px;
  margin: 0;
  margin-bottom: 20px;
  flex-shrink: 0;
  &::selection {
    background-color: ${(props) => props.theme["purple-500"]};
  }
`;

export const ProjectItem = styled.div<{ active?: boolean }>`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.75rem;
  border-radius: 12px;
  background-color: ${(props) =>
    props.active ? props.theme["gray-200"] : props.theme["gray-100"]};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background 0.3s;
  flex: 0 0 300px;

  &:hover {
    background-color: ${(props) => props.theme["gray-200"]};
  }

  @media (max-width: 768px) {
    flex: 0 0 250px;
  }
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ProjectTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${(props) => props.theme["gray-900"]};
`;

export const ProjectMeta = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme["gray-600"]};
  margin-top: 4px;
`;
