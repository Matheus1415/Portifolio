import styled from "styled-components";

export const TechnologiesContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 4rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .info {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: flex-start;

    h1 {
      font-size: 2.5rem;
      color: ${(props) => props.theme["purple-900"]};
      background-color: ${(props) => props.theme["purple-300"]};
      max-width: 460px;
      padding: 10px;
      border-radius: 5px;
      margin: 0;
      flex-shrink: 0;
      &::selection {
        background-color: ${(props) => props.theme["purple-500"]};
      }
    }

    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      p {
        font-size: 1.2rem;
        color: ${(props) => props.theme["gray-700"]};
        line-height: 1.6;

        &::selection {
          background-color: ${(props) => props.theme["gray-200"]};
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    .info {
      flex-direction: column;

      h1 {
        font-size: 2rem;
        text-align: center;
      }

      .text {
        align-items: center;
        p {
          text-align: center;
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

interface TechBoxProps {
  variant?: "primary" | "secondary";
}

export const TechBox = styled.div<TechBoxProps>`
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme["purple-100"] : theme["gray-100"]};
  border-radius: 12px;
  max-width: 800px;
  min-height: 400px;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme, variant }) =>
    variant === "primary" ? theme["purple-900"] : theme["purple-700"]};

  box-shadow: ${({ variant }) =>
    variant === "primary"
      ? "0 4px 8px rgba(132, 100, 149, 0.15)" // sombra discreta roxa
      : "0 4px 8px rgba(0, 0, 0, 0.1)"}; // sombra discreta cinza

  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme["purple-300"] : theme["purple-100"]};
    color: ${({ theme }) => theme["purple-900"]};
    box-shadow: 0 6px 12px rgba(132, 100, 149, 0.3);
  }

  div.content {
    max-width: 60%;

    h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.3rem;
      font-weight: bold;
    }

    p {
      margin: 0;
      font-size: 1rem;
      line-height: 1.4;
      color: ${({ theme }) => theme["gray-700"]};
    }
  }

  img {
    max-width: 80px;
    max-height: 80px;
    object-fit: contain;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    div.content {
      max-width: 100%;
      margin-bottom: 1rem;
    }

    img {
      max-width: 100%;
      max-height: 150px;
      align-self: center;
    }
  }
`;


