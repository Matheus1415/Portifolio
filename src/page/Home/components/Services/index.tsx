import {
  ContainerFloating,
  ServiceCard,
  ArrowButton,
  Bullets,
  SlideArea,
  ServicesContainer,
} from "./styles";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  FaCode,
  FaWrench,
  FaCogs,
  FaExchangeAlt,
  FaServer,
  FaDatabase,
  FaFileAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={40} />,
    title: "Desenvolvimento de Sistemas",
    description: "Criação de sistemas personalizados, eficientes e sob medida.",
  },
  {
    icon: <FaWrench size={40} />,
    title: "Manutenção",
    description: "Correções, ajustes e melhorias em sistemas existentes.",
  },
  {
    icon: <FaCogs size={40} />,
    title: "Automação",
    description: "Automatize processos e ganhe produtividade.",
  },
  {
    icon: <FaExchangeAlt size={40} />,
    title: "Conversão de Layout",
    description: "Transformação de layouts para novos padrões ou tecnologias.",
  },
  {
    icon: <FaServer size={40} />,
    title: "Criação de APIs",
    description: "Integrações modernas e seguras para seu sistema.",
  },
  {
    icon: <FaFileAlt size={40} />,
    title: "Landing Pages",
    description: "Criação de landing pages modernas, responsivas e otimizadas.",
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Banco de Dados",
    description: "Estruturação eficiente e segura de bancos de dados.",
  },
];
export function Services() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  const goTo = (index: number) => {
    setCurrent(index);
  };

  return (
    <ServicesContainer>
      <ContainerFloating>
        <SlideArea>
          <ArrowButton className="left" onClick={prev}>
            <FaChevronLeft />
          </ArrowButton>
          <AnimatePresence mode="wait">
            <ServiceCard
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              {services[current].icon}
              <h2>{services[current].title}</h2>
              <p>{services[current].description}</p>
            </ServiceCard>
          </AnimatePresence>
          <ArrowButton className="right" onClick={next}>
            <FaChevronRight />
          </ArrowButton>
        </SlideArea>
        <Bullets>
          {services.map((_, index) => (
            <button
              key={index}
              className={index === current ? "active" : ""}
              onClick={() => goTo(index)}
            />
          ))}
        </Bullets>
      </ContainerFloating>
    </ServicesContainer>
  );
}
