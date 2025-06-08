import React, { useState } from "react";
import {
  SkillsWrapper,
  SlidesContainer,
  CardContainer,
  SkillCard,
  CarouselControls,
  NavButton,
} from "./styles";
import { SiTypescript, SiPhp, SiCoursera } from "react-icons/si";
import {
  FaReact,
  FaLaravel,
  FaRegFileCode,
  FaJs,
  FaAws,
  FaNodeJs,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";

const skillsData = [
  {
    id: 1,
    title: "Formação TypeScript",
    icon: <SiTypescript />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "http://cursos.alura.com.br/user/mps-web-tech/degree-typescript-v309729-309729/certificate",
    description:
      "Aprofundei conhecimentos em TypeScript, desde fundamentos até técnicas avançadas aplicadas ao front-end.",
    bulletPoints: [
      "Melhore sua experiência de desenvolvimento com TypeScript",
      "TypeScript Part 1: Evolving Your JavaScript",
      "TypeScript parte 2: Avançando na linguagem",
      "TypeScript parte 3: Mais técnicas e boas práticas",
    ],
    conclusion:
      "Com esta formação, desenvolvi uma base sólida para utilizar TypeScript em projetos reais com produtividade.",
  },
  {
    id: 2,
    title: "Formação Avançada TypeScript",
    icon: <SiTypescript />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-typescript-v309729-309729/certificate",
    description:
      "Aprofundei nos recursos avançados da linguagem TypeScript, como generics, decorators e interfaces.",
    bulletPoints: [
      "Um mergulho no TypeScript",
      "Avançando nos recursos da linguagem",
    ],
    conclusion:
      "Agora compreendo e aplico recursos avançados de TypeScript em sistemas complexos.",
  },
  {
    id: 3,
    title: "Formação Front-End com TypeScript",
    icon: <SiTypescript />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-typescript-desenvolva-front-end-produtividade-644154/certificate",
    description:
      "Foquei na aplicação prática de TypeScript no front-end, com orientação a objetos e paradigma funcional.",
    bulletPoints: [
      "TypeScript na prática: implemente um projeto completo",
      "TypeScript: aplicando orientação a objetos no Front-end",
      "TypeScript: o paradigma funcional no front-end",
    ],
    conclusion:
      "A formação me proporcionou experiência prática e conhecimento aprofundado em front-end com TypeScript.",
  },
  {
    id: 4,
    title: "Formação React com TypeScript",
    icon: <FaReact />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-react-ts-v581770-581770/certificate",
    description:
      "Estudei como desenvolver aplicações completas com React e TypeScript, incluindo estado, roteamento e testes.",
    bulletPoints: [
      "React: escrevendo com TypeScript",
      "React: lidando com arquivos estáticos",
      "React: conhecendo a biblioteca React Router",
      "React: integrando seu projeto React com APIs",
      "React: gerenciando estado com Recoil",
      "React: testando os seus componentes",
      "React: otimizando a performance",
    ],
    conclusion:
      "Sou capaz de criar aplicações robustas, escaláveis e bem estruturadas com React e TypeScript.",
  },
  {
    id: 5,
    title: "Formação PHP",
    icon: <SiPhp />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-linguagem-php-v597958-597958/certificate",
    description:
      "Aprendi a programar com PHP desde os fundamentos até conceitos avançados como orientação a objetos e tratamento de arquivos.",
    bulletPoints: [
      "PHP: conceitos, lidando com dados, loops e mais",
      "Avançando com PHP: Arrays, Strings, Função e Web",
      "PHP: manipulando coleções com Arrays",
      "PHP Strings: manipulando textos com PHP",
      "Orientação a Objetos com PHP: Classes, métodos e atributos",
      "Avançando com Orientação a Objetos com PHP: Herança, Polimorfismo e Interfaces",
      "PHP I/O: trabalhando com arquivos e streams",
      "PHP Exceptions: tratamento de erros",
    ],
    conclusion:
      "Com essas formações, desenvolvo aplicações completas em PHP com boas práticas e robustez.",
  },
  {
    id: 6,
    title: "Formação Laravel",
    icon: <FaLaravel />,
    company: "@Alura - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.alura.com.br/user/mps-web-tech/degree-laravel-461900/certificate",
    description:
      "Dominei o uso do framework Laravel para construir aplicações web completas, seguras e escaláveis.",
    bulletPoints: [
      "Laravel: criando uma aplicação com MVC",
      "Laravel: validando formulários, usando sessões e definindo relacionamentos",
      "Laravel: transações, service container e autenticação",
      "Laravel: e-mails, eventos assíncronos, uploads e testes",
      "Laravel: construindo APIs",
    ],
    conclusion:
      "Estou apto a desenvolver sistemas robustos com Laravel, aplicando práticas modernas de desenvolvimento web.",
  },
  {
    id: 7,
    title: "Curso Front-End Completo",
    icon: <FaJs />,
    company: "Danki Code - Cursos Online",
    date: "Formação Concluída | 2023",
    certificateLink:
      "https://cursos.dankicode.com/api/certificados/a2d88abb-6582-4210-af95-6bd1572fcebc",
    description:
      'A formação "Curso Front-End Completo" da Danki Code proporciona uma imersão em diversos tópicos essenciais para se tornar um desenvolvedor front-end altamente qualificado.',
    bulletPoints: [
      "Introdução/Conceitos e Configurando Ambiente de Trabalho - Conhecimentos iniciais sobre o front-end e configurações de ambientes de trabalho.",
      "Entendendo o HTML - Abordagem das bases do HTML e suas novidades.",
      "Iniciando com o CSS e Dominando o CSS - Exploração e domínio das funcionalidades e técnicas de design com CSS.",
      "Design Responsivo e Projeto Prático #1 - Aprendizado de design responsivo com a criação de um projeto prático.",
      "JavaScript e Lógica de Programação - Conceitos fundamentais do JavaScript, incluindo lógica de programação.",
      "Introduzindo e Dominando JQuery - Fundamentos e aplicações práticas da biblioteca JQuery.",
      "Projetos Práticos #2 a #5 - Desenvolvimento de diversos projetos práticos, aplicando os conhecimentos adquiridos.",
      "HTML5 e CSS3 Avançados - Avanços nas versões mais recentes do HTML5 e CSS3.",
      "JavaScript Avançado e Frameworks JS - Exploração dos tópicos avançados do JavaScript, bibliotecas e frameworks.",
      "Projetos Avançados #6 a #10 - Implementação de projetos completos, incluindo layouts complexos e integração de frameworks como Bootstrap, Materialize, Sass, e mais.",
      "React + Redux (Bônus) - Introdução ao React e gerenciamento de estado com Redux.",
      "Angular 7.0 + CLI - Aprendizado sobre o framework Angular 7.0.",
      'Projetos de Aplicações Práticas - Desenvolvimento de projetos como o "Projeto Netflix", "Projeto Instagram" e "Aplicativo de Anotações".',
      "WebRTC - Criando sistema de chat e vídeo - Criação de um sistema de chat e vídeo utilizando WebRTC.",
      "Aplicações Desktop com ElectronJS - Aprendizado de como desenvolver aplicações desktop com ElectronJS.",
      "Bootstrap 5 e Webpack - Exploração das últimas versões do Bootstrap e configuração do Webpack para otimização de projetos.",
      "React, Redux, Angular, TypeScript e outros - Conceitos de aplicações web modernas, como React, Redux e TypeScript.",
      "UX/UI e Design de Aplicações - Fundamentos de UX/UI, focando na experiência do usuário e design de interfaces.",
      "Projetos Finais e Conclusão - Desenvolvimento de projetos finais, incluindo um Dashboard e projetos práticos usando frameworks como React e Bootstrap.",
    ],
    conclusion:
      "Com esta formação, adquiri uma base sólida em front-end, dominando desde conceitos básicos até técnicas avançadas e projetos práticos.",
  },
  {
    id: 8,
    title: "Lógica de Programação",
    icon: <FaRegFileCode />,
    company: "Danki Code - Cursos Online",
    date: "Formação Concluída | 2023",
    certificateLink:
      "https://cursos.dankicode.com/api/certificados/21e94441-3276-49f1-b5af-ccc1cbcb79f8",
    description:
      'A formação "Lógica de Programação" da Danki Code foi projetada para introduzir os conceitos fundamentais e essenciais da lógica de programação, abordando diversos exemplos práticos e algoritmos.',
    bulletPoints: [
      "Como funciona uma linguagem de programação - Compreensão dos princípios básicos de uma linguagem de programação.",
      "Exemplos de syntaxes e linguagens - Apresentação de sintaxes e estruturas utilizadas em diferentes linguagens.",
      "Mentalidade do programador de sucesso - Formação de uma mentalidade voltada para o sucesso na programação.",
      "Situações práticas e algoritmos - Abordagem de problemas práticos e resolução de algoritmos.",
      "Exercícios práticos - C - Prática de algoritmos com a linguagem C.",
      "Exercícios práticos - Java - Exercícios focados em Java, explorando sua sintaxe e estrutura.",
      "Exercícios práticos - PHP - Desafios práticos utilizando a linguagem PHP.",
      "Exercícios práticos - JavaScript - Implementação de exercícios em JavaScript.",
      "Analisando sistemas e lógica - Estudo de sistemas e análise de suas lógicas.",
    ],
    conclusion:
      "Essa formação ajudou a desenvolver o raciocínio lógico e habilidades essenciais para programação em diversas linguagens.",
  },
  {
    id: 9,
    title: "Curso JavaScript",
    icon: <IoLogoJavascript />,
    company: "Danki Code - Cursos Online",
    date: "Formação Concluída | 2023",
    certificateLink:
      "https://cursos.dankicode.com/api/certificados/f709fd33-629b-4884-a370-09d4720a9ee2",
    description:
      "A formação em JavaScript da Danki Code abrange desde os conceitos básicos até o uso de frameworks modernos. Ao longo do curso, você aprenderá sobre manipulação do DOM, orientação a objetos, Ajax, e muito mais.",
    bulletPoints: [
      "Lógica de programação e exercícios - Exercícios práticos para consolidar sua lógica de programação.",
      "Orientação a objetos com JS - Como aplicar a orientação a objetos no JavaScript.",
      "Dominando a manipulação do DOM - Aprenda a manipular elementos HTML de forma dinâmica.",
      "JavaScript moderno - Explore recursos e boas práticas da versão mais recente do JavaScript.",
      "Ajax - Realize requisições assíncronas para melhorar a interação com o usuário.",
      "Aplicação lista de supermercado - Crie uma aplicação funcional usando JavaScript.",
      "Aplicação pedra, papel ou tesoura - Implemente o clássico jogo de lógica com JavaScript.",
      "Aplicação Pokedex + API - Utilize APIs para construir uma Pokedex interativa.",
      "Aplicação perguntas e respostas - Desenvolva uma aplicação de quiz.",
      "Projeto Instagram (React + Firebase) - Crie uma aplicação semelhante ao Instagram usando React e Firebase.",
      "Deploy Projeto Instagram - Aprenda a fazer o deploy de sua aplicação no ambiente de produção.",
      "Projeto Prático #2 (NodeJS) - Desenvolva um projeto prático utilizando Node.js.",
      "Lives Exclusivas - Acesso a conteúdos extras e interações ao vivo.",
    ],
    conclusion:
      "Este curso permitiu o domínio do JavaScript moderno, além de preparar para projetos reais com frameworks populares.",
  },
  {
    id: 10,
    title: "Desenvolvimento de Aplicativos",
    icon: <FaReact />,
    company: "Danki Code - Cursos Online",
    date: "Formação Concluída | 2024",
    certificateLink:
      "https://cursos.dankicode.com/api/certificados/f86b6310-2bc6-428c-8ad6-da83b0dd08b7",
    description:
      "O curso Desenvolvimento de Aplicativos da Danki Code oferece uma jornada completa no desenvolvimento de aplicativos móveis, utilizando tecnologias como React Native e Flutter.",
    bulletPoints: [
      "Metodologia de ensino - Conheça a metodologia utilizada para ensinar as tecnologias de desenvolvimento mobile.",
      "Tecnologias utilizadas e estudo geral - Compreenda as principais tecnologias usadas no desenvolvimento de aplicativos móveis.",
      "Configuração de ambiente para desenvolvimento mobile - Configure seu ambiente para começar a programar aplicativos móveis.",
      "Dominando React Native e exercícios - Aprenda React Native e faça exercícios práticos para consolidar o aprendizado.",
      "Criando aplicativo de anotações - Criação de um aplicativo funcional de anotações.",
      "Criando aplicativo lista de tarefas - Desenvolva um aplicativo de lista de tarefas.",
      "Criando aplicativo timer - Aprenda a criar um timer no seu aplicativo.",
      "Criando aplicativo calculadora - Criação de um aplicativo de calculadora.",
      "Criando e dominando aplicativos híbridos - Compreenda como criar aplicativos híbridos.",
      "Criando aplicativo galeria de fotos - Desenvolva uma galeria de fotos no seu aplicativo.",
      "Criando aplicativo de música - Criação de um aplicativo de música.",
      "Criando aplicativo portfólio - Aprenda a desenvolver um portfólio digital.",
      "Criando aplicativo de notícias (Online) - Criação de um aplicativo para consumo de notícias online.",
      "Consumo de APIs - Entenda como consumir APIs externas em seus aplicativos.",
      "Publicando na Google Play (Android) e macetes - Aprenda como publicar seu app na Google Play.",
      "Publicando na App Store (iOS) e macetes - Como publicar seu aplicativo na App Store.",
      "Aprendendo e criando PWA - Desenvolva Progressive Web Apps (PWAs).",
      "Criando aplicativos com Flutter - Domine a criação de aplicativos com o Flutter.",
      "Módulo adicional - Conteúdo extra para complementar o aprendizado.",
      "Criando WhatsApp Clone Nativo (Navigation, Tabs e mais) - Criação de um clone do WhatsApp utilizando navegação e abas.",
    ],
    conclusion:
      "Com este curso, adquiri habilidades completas para desenvolvimento mobile, desde a configuração até publicação nas lojas oficiais.",
  },
  {
    id: 11,
    title: "Google Project Management",
    platform: "Coursera",
    date: "Formação Concluída | Junho de 2024",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/verify/8ST7FSPYMHU4",
    icon: <SiCoursera />,
    description:
      "Durante o curso de Google Project Management, desenvolvi uma compreensão profunda das práticas e habilidades necessárias para ter sucesso em um cargo de gerenciamento de projetos de nível inicial. Além disso, aprendi a importância da comunicação estratégica, solução de problemas e gestão de stakeholders em projetos do mundo real.",
    bulletPoints: [
      "Execução do Projeto - Aprendi a gerir a execução de projetos, incluindo documentação e artefatos.",
      "Fundamentos do Gerenciamento de Projetos - Aprofundei nos fundamentos do gerenciamento de projetos, incluindo fases e metodologias.",
      "Planejamento de Projetos - Desenvolvi planos de projeto e de gestão de riscos, além de aprender a estimar e gerenciar orçamentos.",
      "Gestão Ágil de Projetos - Conhecimento de Scrum, eventos do Scrum, artefatos e papéis.",
      "Iniciação de Projetos - Definição de charters de projeto e análise de stakeholders.",
      "Fechamento de Projetos - Compreensão dos estágios de desenvolvimento de equipes e como fechar um projeto com sucesso.",
    ],
    conclusion:
      "Ao final deste curso, fui capacitado para realizar a gestão de um projeto completo desde a sua concepção até o encerramento, com foco em cada fase da vida do projeto e comunicação eficaz.",
  },
  {
    id: 12,
    title: "Applying Project Management",
    platform: "Coursera",
    date: "Formação Concluída | Junho de 2024",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/verify/8ST7FSPYMHU4",
    icon: <SiCoursera />,
    description:
      "Durante este curso, adquiri habilidades em gestão de projetos, focando na aplicação prática dos conceitos.",
    bulletPoints: [
      "Desenvolvimento do Project Charter - Criação de um documento completo e detalhado com base em pesquisa e documentos relevantes.",
      "Gerenciamento de Qualidade - Estabelecimento de padrões de qualidade e avaliação contínua para garantir o sucesso do projeto.",
      "Relatórios para Stakeholders - Desenvolvimento de relatórios eficientes, utilizando estratégias de storytelling para comunicar dados de maneira impactante.",
      "Preparação para Entrevistas de Emprego - Aplicação de habilidades de IA para se destacar em entrevistas de trabalho e aumentar a competitividade no mercado.",
    ],
    conclusion: "",
  },
  {
    id: 13,
    title: "Agile Project Management",
    platform: "Coursera",
    date: "Formação Concluída | Junho de 2024",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/verify/SLGEF4F2RYPR",
    icon: <SiCoursera />,
    description:
      "Durante o curso de Gerenciamento de Projetos Ágeis, aprendi os fundamentos e práticas essenciais para aplicar com eficácia a metodologia ágil e Scrum em equipes de desenvolvimento.",
    bulletPoints: [
      "Abordagem e Filosofia Ágil - Entendimento dos valores e princípios da gestão de projetos ágeis.",
      "Princípios do Scrum - Compreensão dos pilares do Scrum e como eles sustentam os valores dessa metodologia.",
      "Eventos do Scrum - Descrição dos cinco principais eventos do Scrum e como configurá-los adequadamente para uma equipe Scrum.",
      "Coaching para Equipes Ágeis - Aprendi a como orientar equipes ágeis e ajudar a superar desafios comuns na metodologia.",
    ],
    conclusion: "",
  },
  {
    id: 14,
    title: "Cloud Foundations",
    platform: "AWS Academy",
    date: "Concluído em Março de 2024",
    certificateLink: "https://www.credly.com/go/Mq8O7f1q",
    icon: <FaAws />,
    description:
      "Concluí o curso de AWS Academy Cloud Foundations, que proporcionou uma introdução abrangente aos fundamentos da nuvem, com foco nos principais serviços e arquitetura da AWS. O curso me capacitou com os conceitos essenciais sobre a infraestrutura da AWS e como utilizá-la para projetar, implantar e gerenciar aplicações na nuvem.",
    bulletPoints: [
      "Arquitetura da AWS - Aprofundamento em arquitetura e componentes principais da AWS.",
      "Serviços principais da AWS - Conhecimento prático dos principais serviços e como utilizá-los.",
      "Precificação da AWS - Estudo das estratégias de precificação e orçamentação de serviços da AWS.",
      "Suporte AWS - Exploração das opções de suporte e suas funcionalidades.",
    ],
    conclusion:
      "Este curso me forneceu as habilidades e conhecimentos sobre a infraestrutura da AWS, entendendo suas capacidades e suas soluções na nuvem de maneira eficaz.",
  },
  {
    id: 15,
    title: "Fundamentos do React e Next.js",
    platform: "Rocketseat",
    date: "Concluído em 21 de Fevereiro de 2025",
    certificateLink:
      "https://app.rocketseat.com.br/certificates/1311d4fd-5bd0-4d63-83d9-23aea3b682a5",
    icon: <FaReact />,
    description:
      "Este curso abordou o desenvolvimento front-end com foco no React e Next.js, abrangendo as principais ferramentas e conceitos da atualidade:",
    bulletPoints: [
      "Fundamentos do React - Compreensão da composição de componentes e conceitos essenciais do React.",
      "Fundamentos do Next.js - Aprendizado sobre roteamento, server components e client components.",
      "Estilização com Tailwind - Utilização do Tailwind CSS para criar layouts modernos e responsivos.",
      "Roteamento com App Router - Implementação de navegação eficiente nas aplicações React com o Next.js.",
      "Formulários com React Hook Form - Gerenciamento de formulários e validação de dados.",
      "Criação de Cliente HTTP com Orval - Integração de aplicações com APIs de forma eficiente.",
      "Configuração de Toolchain com Biome - Otimização do ambiente de desenvolvimento com Biome.",
      "Validação com Zod - Implementação de validações de dados e tipos no React com Zod.",
      "Tipagem com Typescript - Uso de Typescript para tipar dados e garantir maior robustez no código.",
    ],
    conclusion:
      "Com este curso, aprofundei meus conhecimentos em React e Next.js, aplicando técnicas modernas de desenvolvimento front-end.",
  },
  {
    id: 16,
    title: "Desenvolvimento de Aplicações Mobile com React Native",
    platform: "Rocketseat",
    date: "Concluído em 15 de Dezembro de 2024",
    certificateLink:
      "https://app.rocketseat.com.br/certificates/69da40c6-79a9-49a4-9c4f-a9143df07ed7",
    icon: <FaReact />,
    description:
      "Este curso focou no desenvolvimento de uma aplicação mobile utilizando React Native, abordando diversos conceitos e tecnologias modernas:",
    bulletPoints: [
      "Propriedades e Estados no React Native - Aprendizado de como gerenciar dados e interatividade em componentes.",
      "Tipagem com Typescript - Uso do Typescript para melhorar a segurança e robustez do código.",
      "Expo Framework - Utilização do Expo para facilitar o desenvolvimento e testes em dispositivos móveis.",
      "Interface com StyleSheet - Aplicação de estilos de forma modular e reutilizável em React Native.",
      "Roteamento com Expo Router - Implementação de navegação entre telas utilizando o Expo Router.",
      "Consumo de API Node.js - Integração com backends utilizando APIs em Node.js.",
      "Bottom Sheet - Implementação de uma interface de deslizar para cima com o Bottom Sheet.",
      "Leitura de QRCode com Câmera - Leitura e manipulação de códigos QR usando a câmera do dispositivo.",
      "Exibição de Mapa - Integração de mapas interativos dentro da aplicação.",
    ],
    conclusion:
      "Este curso me capacitou para desenvolver aplicações móveis robustas e modernas com React Native e ferramentas relacionadas.",
  },
  {
    id: 17,
    title: "Desenvolvimento de Back-end com Node.js",
    platform: "Rocketseat",
    date: "Concluído em 23 de Fevereiro de 2025",
    certificateLink:
      "https://app.rocketseat.com.br/certificates/dc699ba7-4427-425d-a764-dbb3add0615a",
    icon: <FaNodeJs />,
    description:
      "O curso abordou a criação de uma aplicação back-end utilizando Node.js e diversas tecnologias avançadas:",
    bulletPoints: [
      "API REST - Desenvolvimento e integração de APIs RESTful.",
      "TypeScript - Tipagem estática para melhorar a qualidade e a manutenção do código.",
      "Fastify - Utilização do Fastify como framework para garantir desempenho e escalabilidade.",
      "Drizzle ORM - Integração do Drizzle ORM para gerenciamento eficiente do banco de dados.",
      "Docker - Utilização do Docker para orquestrar containers de PostgreSQL e Redis.",
      "Zod - Implementação do Zod para validação de dados de forma segura e eficiente.",
      "Swagger - Documentação da API utilizando Swagger para facilitar o uso e integração de outros sistemas.",
    ],
    conclusion:
      "Este curso me habilitou a construir back-ends eficientes, seguros e escaláveis com Node.js e tecnologias modernas.",
  },
  {
    id: 18,
    title: "Técnico em Informática",
    platform: "José Maria Falcão",
    date: "Janeiro de 2022 - Dezembro de 2024",
    certificateLink: "",
    icon: <IoIosSchool />,
    description:
      "Durante o curso técnico em Informática, desenvolvi uma ampla gama de habilidades em áreas como desenvolvimento web, redes de computadores, lógica de programação, banco de dados e manutenção de hardware. Além disso, participei de projetos significativos, incluindo a criação de uma startup e um projeto social de ensino de programação para jovens do 9º ano da rede pública.",
    bulletPoints: [
      "Criação de Startup: Liderança em equipe para o desenvolvimento de uma startup, focando em inovação e soluções criativas.",
      "Projeto Social de Programação: Ensino de lógica de programação para estudantes do 9º ano da rede pública, promovendo inclusão digital.",
      "Gestão de Projetos: Capacitação em gestão de projetos pela Google, aprimorando a habilidade de planejar e executar projetos de forma eficaz.",
      "Participação em Eventos: Participação no Ceará Científico 2024, liderando o Projeto Mendel, uma plataforma interativa para o ensino de genética.",
      "Estágio Profissional: Estágio de 3 meses como desenvolvedor full-stack, consolidando competências em programação e desenvolvimento de software.",
    ],
    conclusion:
      "Esse curso técnico me proporcionou uma base sólida em informática e habilidades práticas aplicadas em projetos reais e estágio profissional.",
  },
  {
    id: 19,
    title: "Formação na Fábrica de Programadores",
    platform: "Fundação Democrática Rocha & UANE",
    date: "Formação Concluída em 2024",
    certificateLink: "",
    icon: <IoIosSchool />,
    description:
      "Participei da Fábrica de Programadores, promovida pela Fundação Democrática Rocha e UANE, onde desenvolvi habilidades práticas de programação e fui envolvido em projetos reais de desenvolvimento de software.",
    bulletPoints: [
      "Desenvolvimento Prático: Participação ativa em projetos de programação, aplicando as técnicas adquiridas durante a formação.",
    ],
    conclusion:
      "A formação me permitiu aplicar conhecimentos teóricos em projetos reais, reforçando minha experiência prática na área de desenvolvimento.",
  },
  {
    id: 20,
    title: "Projeto Mendel - Ceará Científico 2024",
    platform: "Ceará Científico 2024",
    date: "Participação em 2024",
    certificateLink: "https://mendel-legacy.netlify.app/",
    icon: <IoIosSchool />,
    description:
      "Durante o Ceará Científico 2024, tive a oportunidade de liderar o Projeto Mendel, um sistema educativo focado em genética, desenvolvido para apoiar o aprendizado de estudantes do ensino médio, especialmente nas leis mendelianas e outros conceitos genéticos.",
    bulletPoints: [
      "Desenvolvimento de Sistema: Criação de uma plataforma interativa para auxiliar no ensino de genética, com foco em tornar o aprendizado mais acessível.",
      "Gestão e Liderança: Coordenação de uma equipe multidisciplinar, organizando tarefas, estabelecendo prazos e garantindo o sucesso do projeto.",
    ],
    conclusion:
      "Este projeto foi uma experiência valiosa de liderança e desenvolvimento, unindo tecnologia e educação para um impacto social significativo.",
    links: {
      website: "https://mendel-legacy.netlify.app/",
      github: "https://github.com/Matheus1415/Mendel",
      instagram: "https://www.instagram.com/p/DAWf9ypP7ZT/?img_index=1",
    },
  },
];

export function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === skillsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? skillsData.length - 1 : prev - 1));
  };

  return (
    <SkillsWrapper>
      <SlidesContainer
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {skillsData.map((skill) => (
          <CardContainer key={skill.id}>
            <SkillCard>
              <div className="icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>
                <strong>{skill.company}</strong> — {skill.date}
              </p>
              <p>{skill.description}</p>
              <ul>
                {skill.bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <p>
                <em>{skill.conclusion}</em>
              </p>
              <div className="button-wrapper">
                <a
                  href={skill.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver certificado
                </a>
              </div>
            </SkillCard>
          </CardContainer>
        ))}
      </SlidesContainer>

      {/* Botões de navegação com ícones */}
      <CarouselControls>
        <NavButton onClick={prevSlide}>
          <FaArrowLeft /> Anterior
        </NavButton>
        <NavButton onClick={nextSlide}>
          Próximo <FaArrowRight />
        </NavButton>
      </CarouselControls>
    </SkillsWrapper>
  );
}
