import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme["gray-900"]};
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  hr {
    width: 100%;
    border: none;
    height: 1px;
    background-color: ${({ theme }) => theme["gray-600"]};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.6rem;

  a {
    color: ${({ theme }) => theme.white};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme["purple-500"]};
    }
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  p {
    font-size: 0.95rem;
    margin: 0;
    color: ${({ theme }) => theme.white};
  }
`;

export const BackToTop = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.3s ease;
  background-color:${({ theme }) => theme["purple-500"]} ;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    color: ${({ theme }) => theme["purple-400"]};
  }
  &:focus{
    outline: none;
    box-shadow: none;
  }
`;
