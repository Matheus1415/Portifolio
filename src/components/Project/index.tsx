import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import Tooltip from "../Tooltip";
import { GoServer } from "react-icons/go";
import { IconType } from 'react-icons'; 

interface TooltipProps {
  title: string;
  subtitle: string;
  description: string;
  tools: IconType[]; 
  githubUrl: string;
  githubMessage: string;
  figmaUrl?: string; 
  figmaMessage?: string; 
  siteUrl?: string; 
  siteMessage?: string; 
}

const Project: React.FC<TooltipProps> = ({
  title,
  subtitle,
  description,
  tools,
  githubUrl,
  githubMessage,
  figmaUrl = '', 
  figmaMessage = '',
  siteUrl = '', 
  siteMessage = '',
}) => {
  return (
    <div className="boxProject">
      <div className="headerProject">
        <div className="titleProject">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div className="github">
          <Tooltip icon={<FaGithub />} message={githubMessage} url={githubUrl} />
          {figmaUrl && (
            <Tooltip icon={<IoLogoFigma />} message={figmaMessage} url={figmaUrl} />
          )}
          {siteUrl && (
            <Tooltip icon={<GoServer />} message={siteMessage} url={siteUrl} />
          )}
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Project;
