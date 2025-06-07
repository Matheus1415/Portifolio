import {
  FaDatabase,
  FaGithub,
  FaInstagram,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaUserCircle,
} from "react-icons/fa";
import {
  AboutContainer,
  LeftSection,
  RightSection,
  SectionTitle,
  Paragraph,
  TechItem,
  TechScrollWrapper,
  TestimonialCard,
  CardHeader,
  CardBody,
  SocialIcon,
} from "./styles";
import { SiMysql, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

import testimonials from "../../data/testimonials.json";

type Tech = {
  icon: JSX.Element;
  name: string;
};

const techs: Tech[] = [
  { icon: <FaReact color="#61DBFB" size={29} />, name: "React" },
  { icon: <SiTypescript color="#3178C6" size={29} />, name: "TypeScript" },
  { icon: <FaJs color="#F7DF1E" size={29} />, name: "JavaScript" },
  { icon: <FaNodeJs color="#3C873A" size={29} />, name: "Node.js" },
  { icon: <FaLaravel color="#FF2D20" size={29} />, name: "Laravel" },
  { icon: <FaPhp color="#777BB4" size={29} />, name: "PHP" },
  { icon: <SiMysql color="#00758F" size={29} />, name: "MySQL" },
  { icon: <FaDatabase color="#C0C0C0" size={29} />, name: "SQL" },
  {
    icon: <SiStyledcomponents color="#DB7093" size={29} />,
    name: "Styled Components",
  },
];

export function About() {
  return (
    <AboutContainer>
      <LeftSection>
        <SectionTitle>Sobre Mim</SectionTitle>
        <Paragraph>
          Meu nome é Matheus, e sou um desenvolvedor apaixonado por tecnologia,
          inovação e a criação de soluções que conectem pessoas e otimizem
          processos. Desde que comecei minha jornada no mundo do
          desenvolvimento, venho explorando diferentes áreas, incluindo
          Front-End, Back-End e o meu desenvolvimento interpessoal.
        </Paragraph>
        <Paragraph>
          Ao longo da minha trajetória, adquiri experiência em ferramentas e
          tecnologias como React, TypeScript, Laravel, MySQL, entre outras. Além
          disso, tenho um forte compromisso em sempre aprender, evoluir e
          colaborar em projetos que fazem a diferença na vida das pessoas.
        </Paragraph>
        <Paragraph>
          Quando não estou codificando, gosto de explorar novas metodologias, me
          engajar em projetos desafiadores e compartilhar conhecimento com a
          comunidade. Acredito que a combinação de dedicação e curiosidade é a
          chave para o sucesso no mundo da tecnologia.
        </Paragraph>

        <SectionTitle>Tecnologias</SectionTitle>
        <TechScrollWrapper>
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              width: "200%",
            }}
          >
            {techs.map((tech, index) => (
              <TechItem key={tech.name + index}>
                {tech.icon}
                <span>{tech.name}</span>
              </TechItem>
            ))}
          </motion.div>
        </TechScrollWrapper>
      </LeftSection>

      <RightSection>
        <SectionTitle>O que dizem sobre mim</SectionTitle>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index}>
            <CardHeader>
              <div className="user-info">
                <FaUserCircle size={40} className="user-icon" />
                <div>
                  <p className="username">{item.username}</p>
                  <span className="role">{item.role}</span>
                </div>
              </div>
              <a href={item.social} target="_blank" rel="noopener noreferrer">
                <SocialIcon>
                  {item.type === "instagram" ? (
                    <FaInstagram size={24} color="#E1306C" />
                  ) : (
                    <FaGithub size={24} color="#000" />
                  )}
                </SocialIcon>
              </a>
            </CardHeader>
            <CardBody>
              <p>{item.message}</p>
            </CardBody>
          </TestimonialCard>
        ))}
      </RightSection>
    </AboutContainer>
  );
}
