import Link from "next/link";
import Image from "next/image";

import { FooterContainer, FooterLogo } from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <div id="contato">
        <div className="wrapper">
          <div id="email">
            <p className="text-light">Manda um e-mail</p>
            <a
              href="mailto:hello@bondefilmes.com"
              target="_blank"
              rel="noreferrer"
            >
              hello@bondefilmes.com
            </a>
          </div>
          <div id="zap">
            <p className="text-light">Manda uma mensagem</p>
            <a href="tel:+5521987624001" target="_blank" rel="noreferrer">
              +55 21 98762.4001
            </a>
          </div>
        </div>
      </div>
      <FooterLogo>
        <img src="/imgs/logo/logo-bonde-dark.svg" alt="logo Bonde Filmes" />
      </FooterLogo>
    </FooterContainer>
  );
}

export default Footer;
