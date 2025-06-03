import styled from "styled-components";

interface MenuItemProps {
  isActive?: boolean;
}

export const Sidebar = styled.ul`
  width: 60px;
  height: 100vh;
  background-color: ${({ theme }) => theme["gray-900"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 0;
  list-style: none;
`;

export const MenuItem = styled.li<MenuItemProps>`
  color: ${({ isActive, theme }) =>
    isActive ? theme["purple-100"] : theme.white};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme["purple-700"] : "transparent"};
  border-left: ${({ isActive, theme }) =>
    isActive ? `3px solid ${theme["purple-100"]}` : "none"};

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  padding: 20px 10px;
  transition: color 0.3s, transform 0.2s;
  text-decoration: none;

  &:hover {
    color: ${({ isActive, theme }) =>
      isActive ? theme["purple-100"] : theme["gray-500"]};
  }
`;
