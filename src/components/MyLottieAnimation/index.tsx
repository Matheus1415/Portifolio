import React from "react";
import Lottie from "lottie-react";

interface MyLottieAnimationProps {
    animationData: object;
    visible: boolean;
    size?: number;
}

const MyLottieAnimation: React.FC<MyLottieAnimationProps> = ({animationData, visible, size  = 42}) => {
  return (
    <div style={{ width: size, height: size }}>
      <Lottie animationData={animationData} loop={visible} />
    </div>
  );
};

export default MyLottieAnimation;
