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
`;

export const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

export const MainDescription = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme["gray-900"]};
  }

  p {
    color: ${(props) => props.theme["gray-700"]};
    font-size: 1rem;
    line-height: 1.4;
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

  &:hover {
    background-color: ${(props) => props.theme["gray-200"]};
  }
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
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
