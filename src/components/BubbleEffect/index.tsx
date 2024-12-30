import { motion } from "framer-motion";
import styled from "styled-components";

const Bubble = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #8257e6c0;
  position: absolute;
`;

const Container = styled.div`
  position: relative;
  min-height: 910px;
  min-width: 100%;
  max-width: 1200px;
  overflow: hidden;
  background-color: #08080d;
`;

export default function BubbleEffect() {
  const handlePop = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const target = e.currentTarget as HTMLDivElement;
    const numberSort = Math.floor(Math.random() * (8 - 0) + 0);

    const colors = [
      "#D4A5E4", 
      "#9C7AC5", 
      "#B87CE6", 
      "#7D4CC7", 
      "#A64DDB", 
      "#B569E5",
      "#9A4CC0", 
      "#6A3D8E",      
    ];

    target.style.backgroundColor = colors[numberSort];
    target.style.boxShadow = `1px 2px 15px 5px ${colors[numberSort]}`;
    target.style.transform = "scale(0)";
    target.style.opacity = "0";
    target.style.transition = "1s linear backgroundColor";
  };

  return (
    <Container>
      {Array.from({ length: 30 }).map((_, i) => (
        <Bubble
          key={i}
          onClick={(e) => handlePop(e, i)}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight - 10,
            opacity: 0.9,
            transition: { duration: 30, repeat: Infinity },
          }}
        />
      ))}
    </Container>
  );
}
