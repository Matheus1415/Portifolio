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
  TechList,
  MainContainer,
  TestimonialsList,
} from "./styles";
import { SiMysql, SiStyledcomponents, SiTypescript } from "react-icons/si";
import testimonials from "../../data/testimonials.json";
import { useEffect, useRef, useState } from "react";

export function About() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const techs = [
    { icon: <FaReact size={29} />, name: "React" },
    { icon: <SiTypescript size={29} />, name: "TypeScript" },
    { icon: <FaJs size={29} />, name: "JavaScript" },
    { icon: <FaNodeJs size={29} />, name: "Node.js" },
    { icon: <FaPhp size={29} />, name: "PHP" },
    { icon: <FaLaravel size={29} />, name: "Laravel" },
    { icon: <SiMysql size={29} />, name: "MySQL" },
    { icon: <FaDatabase size={29} />, name: "SQL" },
    { icon: <SiStyledcomponents size={29} />, name: "Styled Components" },
  ];

  const colors = [
    "#6D28D9",
    "#2563EB",
    "#059669",
    "#D97706",
    "#9333EA",
    "#DC2626",
    "#0EA5E9",
  ];

  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [constraints, setConstraints] = useState({ left: -20, right: 50 });

  useEffect(() => {
    if (wrapperRef.current && contentRef.current) {
      const wrapperWidth = wrapperRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;

      const left = Math.min(0, wrapperWidth - contentWidth);
      setConstraints({ left, right: 0 });
    }
  }, [techs.length]);

  return (
    <MainContainer>
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
          <TechScrollWrapper ref={wrapperRef}>
            <TechList ref={contentRef}>
              {techs.map((tech, index) => (
                <TechItem
                  key={tech.name}
                  bgColor={colors[index % colors.length]}
                  drag="x"
                  dragConstraints={constraints}
                  dragElastic={0.15}
                  onDragStart={() => setDraggingIndex(index)}
                  onDragEnd={() => setDraggingIndex(null)}
                  style={{
                    filter:
                      draggingIndex === index
                        ? "brightness(1.3)"
                        : "brightness(1)",
                    cursor: draggingIndex === index ? "grabbing" : "grab",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </TechItem>
              ))}
            </TechList>
          </TechScrollWrapper>
        </LeftSection>
        <RightSection>
          <SectionTitle>O que dizem sobre mim</SectionTitle>
          <TestimonialsList>
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.username + index}>
                <CardHeader>
                  <div className="user-info">
                    <FaUserCircle size={40} className="user-icon" />
                    <div>
                      <p className="username">{item.username}</p>
                      <span className="role">{item.role}</span>
                    </div>
                  </div>
                  <a
                    href={item.social}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
          </TestimonialsList>
        </RightSection>
      </AboutContainer>
    </MainContainer>
  );
}
