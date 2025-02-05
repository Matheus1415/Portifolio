import React, { useState } from "react";
import "./Tooltip.css";
import MyLottieAnimation from "../MyLottieAnimation";

interface TooltipAttributes {
    icon?: React.ReactNode;
    message: string;
    url?: string;
    lottie_react?: object;
    size?: number;
}

const Tooltip: React.FC<TooltipAttributes> = ({icon, message, url, lottie_react, size}) => {
  const [visible, setVisible] = useState(false);
  const handleClick = ():void => {
    window.open(url, "_blank");
    setVisible(false);
  }
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={handleClick}
    >
      {lottie_react == undefined || lottie_react == null?
       icon: <MyLottieAnimation animationData={lottie_react} visible={visible} size={size}/>
      }
      <div className={`tooltip ${visible ? "visible" : ""}`}>
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
