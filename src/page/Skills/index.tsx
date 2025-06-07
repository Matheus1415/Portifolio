import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaravel } from "react-icons/fa";
import {
  SkillsWrapper,
  Title,
  SkillsContainer,
  Card,
  Overlay,
  DetailsModal,
  CloseButton,
} from "./styles";


interface Skill {
  id: number;
  title: string;
  icon: React.ReactNode;
  company: string;
  date: string;
  certificateLink: string;
  description: string;
  bulletPoints: string[];
  conclusion: string;
}

const skillsData: Skill[] = [
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
  {
    id: 1,
    title: "Formação Laravel",
    icon: <FaLaravel size={40} className="text-[#607B96]" />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Durante esta formação, aprendi a desenvolver aplicações web com Laravel, passando por conceitos fundamentais como MVC, validação de formulários, gerenciamento de sessões e a criação de relacionamentos. Também aprofundei em técnicas mais avançadas, como transações, autenticação, envio de e-mails, eventos assíncronos e construção de APIs.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC - Aprendi a estrutura MVC do Laravel, criando uma aplicação do zero com a arquitetura do framework.",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos - Explorei como validar formulários, trabalhar com sessões e definir relacionamentos entre modelos no Laravel.",
      "Laravel: transações, service container e autenticação - Aprofundei a criação de transações no Laravel, entendi como usar o service container e implementei autenticação de usuários.",
      "Laravel: e-mails, eventos assíncronos, uploads e testes - Aprendi como enviar e-mails, lidar com eventos assíncronos, fazer uploads de arquivos e realizar testes em aplicações Laravel.",
      "Laravel: construindo APIs - Concluí a formação com a construção de APIs REST, explorando práticas de modelagem e comunicação com o Laravel e o Eloquent ORM.",
    ],
    conclusion:
      "Com essa formação, sou capaz de criar aplicações robustas e escaláveis em Laravel, aplicando tanto a arquitetura MVC quanto as melhores práticas para desenvolvimento de APIs e recursos avançados como autenticação e testes.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.6, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  function closeModal() {
    setSelectedSkill(null);
  }

  return (
    <>
      <SkillsWrapper>
        <Title>Habilidades e Formações</Title>

        <SkillsContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, i) => (
            <Card
              key={skill.id}
              custom={i}
              variants={cardVariants}
              onClick={() => setSelectedSkill(skill)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedSkill(skill);
              }}
              aria-label={`Abrir detalhes da habilidade ${skill.title}`}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {skill.icon}
                <div>
                  <p style={{ color: "#5565E8", margin: 0 }}>{skill.company}</p>
                  <span style={{ color: "#607B96", fontSize: "0.9rem" }}>
                    {skill.date}
                  </span>
                </div>
              </div>
              <h3 style={{ marginTop: "1rem" }}>{skill.title}</h3>
            </Card>
          ))}
        </SkillsContainer>
      </SkillsWrapper>

      <AnimatePresence>
        {selectedSkill && (
          <>
            <Overlay
              onClick={closeModal}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
            />
            <DetailsModal
              key="modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <CloseButton onClick={closeModal} aria-label="Fechar modal">
                &times;
              </CloseButton>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  {selectedSkill.icon}
                  <div>
                    <p style={{ color: "#5565E8", margin: 0 }}>{selectedSkill.company}</p>
                    <span style={{ color: "#607B96", fontSize: "0.9rem" }}>
                      {selectedSkill.date}
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href={selectedSkill.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#5565E8", textDecoration: "underline" }}
                  >
                    Certificado Alura
                  </a>
                </div>
              </div>

              <p style={{ marginTop: "1rem" }}>{selectedSkill.description}</p>

              <ul
                style={{
                  marginTop: "1rem",
                  paddingLeft: "1.25rem",
                  listStyleType: "disc",
                }}
              >
                {selectedSkill.bulletPoints.map((point, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                    {point}
                  </li>
                ))}
              </ul>

              <p style={{ marginTop: "1rem" }}>{selectedSkill.conclusion}</p>
            </DetailsModal>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
