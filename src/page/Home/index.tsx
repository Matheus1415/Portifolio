import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ContentWrapper,
  Description,
  LeftSection,
  MainContainer,
  SocialIconsContainer,
  Title,
  TypingText,
  SocialLink,
  AboutText,
  Overlay,
} from "./styles";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFileAlt,
} from "react-icons/fa";
import { BackgroundBubbles } from "../../components/BackgroundBubbles";
import LoadingScreen from "../../animation/LoadingScreen";

export function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BackgroundBubbles />
      <AnimatePresence>
        {loading ? (
          <LoadingScreen />
        ) : (
          <MainContainer
            key="main"
            as={motion.main}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8 }}
          >
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
                    href="https://github.com/Matheus1415"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </SocialLink>
                  <SocialLink
                    href="https://www.linkedin.com/in/matheus-pereira-da-silva-298020286/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink
                    href="https://www.instagram.com/mps_devaretado/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialLink>
                  <SocialLink
                    href="/cv.pdf"
                    target="_blank"
                    aria-label="Currículo"
                  >
                    <FaFileAlt />
                  </SocialLink>
                </SocialIconsContainer>
              </LeftSection>
              <AboutText>
                Sou um desenvolvedor web full stack apaixonado por criar
                aplicações modernas, funcionais e bem estruturadas. Gosto de
                estar onde o código encontra a experiência do usuário — seja no
                front-end com React e TypeScript, ou no back-end com Laravel e
                MySQL. O que me motiva é a oportunidade de transformar ideias em
                soluções reais, simples e eficazes.
                {"\n\n"}Atualmente, estou me aprofundando no ecossistema
                Laravel, explorando sua arquitetura robusta e as melhores
                práticas para construir APIs e sistemas escaláveis. Tenho
                experiência prática com diversas tecnologias, incluindo
                JavaScript, PHP, HTML/CSS e jQuery — sempre buscando escrever
                código limpo, compreensível e voltado à performance.
                {"\n\n"}Já desenvolvi projetos que vão de sistemas completos
                para gestão de arquivos, usuários e planos de internet, até
                ferramentas mais enxutas como temporizadores Pomodoro e
                gerenciadores de estudo. Cada um deles representa um passo na
                minha evolução como desenvolvedor — com foco em usabilidade,
                organização e valor entregue.
              </AboutText>
            </ContentWrapper>
          </MainContainer>
        )}
      </AnimatePresence>
    </>
  );
}
