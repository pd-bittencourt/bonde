import { ReactNode } from "react";

import { Container } from "./styles";

function Hero() {
  return (
    <Container id="hero">
      <div>
        <h2 className="title">Entre no</h2>
        <a href="#intro">
          <img
            id="logo"
            src="imgs/logo/logo-bonde-light.svg"
            alt="logo Bonde Filmes"
          />
        </a>
        <div id="line"></div>
      </div>
    </Container>
  );
}

export default Hero;
