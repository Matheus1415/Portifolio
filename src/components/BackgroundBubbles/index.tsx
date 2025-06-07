import { useState } from "react";
import styled, { keyframes } from "styled-components";

// Paleta roxa
const bubbleColors = ["#c084fc", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9"];

export function BackgroundBubbles() {
  const [colors] = useState(
    Array.from({ length: 35 }, () =>
      bubbleColors[Math.floor(Math.random() * bubbleColors.length)]
    )
  );

  return (
    <BubblesContainer>
      {colors.map((color, index) => {
        const top = Math.random() * 90;
        const left = Math.random() * 90;
        const duration = 15 + Math.random() * 10;
        const delay = Math.random() * 5;
        return (
          <Bubble
            key={index}
            color={color}
            top={top}
            left={left}
            duration={duration}
            delay={delay}
          />
        );
      })}
    </BubblesContainer>
  );
}

const BubblesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const floatAnimation = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-20px, -30px) scale(1.1);
  }
  50% {
    transform: translate(10px, 20px) scale(1);
  }
  75% {
    transform: translate(25px, -15px) scale(1.05);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`;

const Bubble = styled.div<{
  color: string;
  top: number;
  left: number;
  duration: number;
  delay: number;
}>`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  opacity: 0.15;
  pointer-events: auto; 

  cursor: default;
  transition: opacity 0.4s ease, box-shadow 0.4s ease, transform 0.3s;
  box-shadow: ${({ color }) => `0 0 12px 3px ${color}55`};

  animation: ${floatAnimation} ${({ duration }) => duration}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;

  &:hover {
    opacity: 0.25;
    transform: scale(1.2);
    box-shadow: ${({ color }) => `0 0 18px 6px ${color}aa`};
  }
`;
