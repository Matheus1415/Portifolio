import { motion } from "framer-motion";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: #0d1117;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  gap: 1rem;
`;

const bounceTransition = {
  repeat: Infinity,
  duration: 0.8,
  ease: "easeInOut",
};

const dotVariants = {
  animate: (i: number) => ({
    scale: [1, 1.5, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      ...bounceTransition,
      delay: i * 0.2,
    },
  }),
};

const Dot = styled(motion.div)`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  gap:10px;
`;

const LoadingScreen = () => (
  <Overlay>
    {[0, 1, 2].map((i) => (
      <Dot key={i} custom={i} variants={dotVariants} animate="animate" />
    ))}
  </Overlay>
);

export default LoadingScreen;
