import { Container } from "./styles";

function Intro() {
  return (
    <Container id="intro">
      <p>
        A Bonde dedica-se a projetos independentes e de linguagem inovadora.
      </p>
      <p>
        Valorizamos a ética, a transparência e as relações saudáveis ​​para
        incentivar as pessoas a serem autênticas.
      </p>
      <p className="text-dark">
        <strong>
          Acreditamos que esse é o espaço onde nascem ideias preciosas e
          histórias corajosas
        </strong>
        .
      </p>
    </Container>
  );
}

export default Intro;
