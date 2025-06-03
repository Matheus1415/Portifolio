import React from "react";
import { Sidebar, MenuItem } from "./styles";
import { FaHome, FaProjectDiagram, FaCode, FaInfoCircle , FaBriefcase } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Menu: React.FC = () => {
  const location = useLocation(); 
  return (
    <Sidebar>
      <MenuItem isActive={location.pathname === "/"}>
        <FaHome size={28} />
      </MenuItem>
      <MenuItem isActive={location.pathname === "/sobre"}>
        <FaInfoCircle  size={28} />
      </MenuItem>
      <MenuItem isActive={location.pathname === "/projetos"}>
        <FaProjectDiagram size={28} />
      </MenuItem>
      <MenuItem isActive={location.pathname === "/habilidades"}>
        <FaCode size={28} />
      </MenuItem>
      <MenuItem isActive={location.pathname === "/experiencia"}>
        <FaBriefcase size={28} />
      </MenuItem>
    </Sidebar>
  );
};
