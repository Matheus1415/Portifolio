import styled from "styled-components";

export const HomeContainer = styled.main`
  background-color: ${props => props.theme["gray-100"]};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
