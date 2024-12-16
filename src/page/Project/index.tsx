import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import Tooltip from "../../components/Tooltip";
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
}

const Project: React.FC<TooltipProps> = ({
  title,
  subtitle,
  description,
  tools,
  githubUrl,
  githubMessage,
  figmaUrl = '', 
  figmaMessage = ''
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
        </div>
      </div>
      <p>{description}</p>
      <p className="ferramenta">Ferramentas:</p>
      <div className="boxIcon">
        {tools.map((Tool, index) => (
          <Tool key={index} />
        ))}
      </div>
    </div>
  );
};

export default Project;
