import { Container, Image, MainContainer, Title } from "./styles";

export function Presentation() {
  return (
    <>
      <MainContainer>
        <Container>
          <div>
            <Title>
              SIMPLIFICANDO O DIA <br /> A DIA COM CRIATIVIDADE
              <br /> E CÓDIGO.
            </Title>
            <p>
              Não programo só pra resolver problemas — meu foco é criar soluções
              que realmente fazem a diferença. Gosto de transformar ideias em
              ferramentas que economizam tempo, facilitam o dia a dia e tornam a
              tecnologia mais acessível. Pra mim, cada linha de código é uma
              chance de inovar e abrir novas possibilidades. <br />
              <span>
                “O sucesso é a soma de pequenos esforços repetidos dia após
                dia.” – Robert Collier
              </span>
            </p>
          </div>

          <Image
            src="./logo-mp.png"
            alt="Logo MP"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </Container>
      </MainContainer>
      <Container></Container>
    </>
  );
}
