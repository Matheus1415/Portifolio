import { motion } from "framer-motion";
import styled from "styled-components";

export const TimelineContainer = styled.section`
  color: ${({ theme }) => theme.white};
  font-family: "Roboto", sans-serif;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme["purple-900"]};
  background-color: ${(props) => props.theme["purple-300"]};
  padding: 10px;
  border-radius: 5px;
  margin: 0;
  flex-shrink: 0;
  &::selection {
    background-color: ${(props) => props.theme["purple-500"]};
  }
`;

export const TimelineWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  position: relative;
  padding: 40px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: ${(props) => props.theme["purple-300"]};;
    transform: translateX(-50%);
    z-index: 1;
    border-radius: 2px;
    opacity: 0.6;

    @media (max-width: 768px) {
      top: 50%;
      left: 0;
      right: 0;
      width: 100%;
      height: 4px;
      transform: translateY(-50%);
    }
  }
`;

export const TimelineItem = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 40px 0;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &.reverse {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .content {
      align-items: flex-end;
      text-align: right;

      @media (max-width: 768px) {
        text-align: center;
        align-items: center;
      }
    }
  }
`;

export const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme["gray-800"]};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
  padding: 14px;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  z-index: 2;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme["purple-700"]};
  }

  @media (max-width: 768px) {
    position: relative;
    transform: none;
    left: auto;
    margin-bottom: 1rem;
  }
`;

export const TimelineContent = styled.div`
  background: ${({ theme }) => theme["gray-900"]};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  flex: 0 0 45%;
  z-index: 2;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    margin-top: 20px;
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme["purple-500"]};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme["gray-200"]};
    text-align: justify;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;

    .tag {
      background: ${({ theme }) => theme["purple-700"]};
      color: ${({ theme }) => theme.white};
      padding: 6px 14px;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 500;
      transition: background 0.3s ease;

      &:hover {
        background: ${({ theme }) => theme["purple-500"]};
      }
    }
  }
`;
