import { motion } from "framer-motion";
import {
  ContentWrapper,
  Description,
  LeftSection,
  MainContainer,
  SocialIconsContainer,
  TechGrid,
  TechIcon,
  TechItem,
  TechName,
  Title,
  TypingText,
  SocialLink,
} from "./styles";

import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaJs,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFileAlt,
} from "react-icons/fa";
import { BackgroundBubbles } from "../../components/BackgroundBubbles";

const techs = [
  { icon: <FaReact />, name: "React", color: "#61DBFB" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#3C873A" },
  { icon: <FaLaravel />, name: "Laravel", color: "#FF2D20" },
  { icon: <FaPhp />, name: "PHP", color: "#777BB4" },
  { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
];

export function Home() {
  return (
    <>
      <BackgroundBubbles />
      <MainContainer>
        <ContentWrapper>
          <LeftSection>
            <TypingText>Hi all. I am</TypingText>
            <Title
              as={motion.h1}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Matheus Pereira
            </Title>

            <Description
              as={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Full-Stack Developer
            </Description>

            <SocialIconsContainer>
              <SocialLink
                href="https://github.com/seuusuario"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/seuusuario"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="https://instagram.com/seuusuario"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialLink>
              <SocialLink href="/cv.pdf" target="_blank" aria-label="Currículo">
                <FaFileAlt />
              </SocialLink>
            </SocialIconsContainer>
          </LeftSection>

          <TechGrid
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {techs.map((tech, index) => (
              <TechItem
                key={index}
                as={motion.div}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <TechIcon style={{ color: tech.color }}>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
              </TechItem>
            ))}
          </TechGrid>
        </ContentWrapper>
      </MainContainer>
    </>
  );
}
