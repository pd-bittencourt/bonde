import styled from "styled-components";
import { baseColors, breakpoints } from "../../constants/stylesBase";

export const FooterContainer = styled.footer`
  #contato {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: ${baseColors.grayLightest};

    @media (min-width: 800px) {
      padding-top: 10rem;
      padding-bottom: 10rem;
    }
    .wrapper {
      max-width: 700px;
      width: 80%;
      margin: 0 auto;
    }
    #email {
      margin-bottom: 3rem;
    }

    p {
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      color: ${baseColors.grayLight};
      margin-bottom: 0.25rem;

      @media (min-width: ${breakpoints.md}) {
        font-size: 1.5rem;
      }
    }
    a {
      font-family: "Libre Baskerville", serif;
      font-size: 1.5rem;
      color: ${baseColors.grayDark};

      @media (min-width: ${breakpoints.md}) {
        font-size: 3rem;
      }
    }
  }
`;

export const FooterLogo = styled.div`
  background-color: ${baseColors.white};
  display: flex;
  padding-top: 5rem;
  padding-bottom: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    @media (min-width: ${breakpoints.md}) {
      width: 140px;
    }
  }
`;
