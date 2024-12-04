import React, { useState } from "react";
import "./Tooltip.css";

interface TooltipAttributes {
    icon: React.ReactNode;
    message: string;
    url?: string;
}

const Tooltip: React.FC<TooltipAttributes> = ({icon, message, url}) => {
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
      {icon}
      <div className={`tooltip ${visible ? "visible" : ""}`}>
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
