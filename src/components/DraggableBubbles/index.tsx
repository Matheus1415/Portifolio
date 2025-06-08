import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Bubble = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #8257e6c0;
  position: absolute;
  cursor: grab;
  z-index: -1;

  &:active {
    cursor: grabbing;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export function DraggableBubbles() {
  const handlePop = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const target = e.currentTarget;
    const colors = [
      "#D4A5E4", "#9C7AC5", "#B87CE6", "#7D4CC7",
      "#A64DDB", "#B569E5", "#9A4CC0", "#6A3D8E",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    target.style.backgroundColor = color;
    target.style.boxShadow = `1px 2px 15px 5px ${color}`;
    target.style.transform = "scale(0)";
    target.style.opacity = "0";
    target.style.transition = "1s ease-out";
  };

  return (
    <Container>
      {Array.from({ length: 25 }).map((_, i) => (
        <Bubble
          key={i}
          drag
          dragMomentum={true}
          dragElastic={0.6}
          style={{
            left: Math.random() * 1000,
            top: Math.random() * 800,
            pointerEvents: "auto",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.5, delay: i * 0.05 }}
        />
      ))}
    </Container>
  );
}
