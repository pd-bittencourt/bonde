import styled from "styled-components";
import { baseColors, breakpoints } from "../../constants/stylesBase";

const Container = styled.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 60vh;

    div {
      max-width: 700px;
    }

    h1 {
      font-family: "Six Caps", sans-serif;
      font-size: 6rem;
      font-weight: 400;
      line-height: 1;
      text-transform: uppercase;
      color: ${baseColors.white};
      margin-bottom: 0;

      @media (min-width: ${breakpoints.md}) {
        font-size: 10rem;
      }
    }

    p {
      font-family: "Poppins", sans-serif;
      font-size: 1.2rem;
      text-decoration: none;
      color: ${baseColors.white};
      margin-left: 1px;

      @media (min-width: ${breakpoints.md}) {
        margin-left: 3px;
      }
    }
  }
  a {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 8px;
    display: flex;
    align-items: center;
    line-height: 1em;
    transition: all 0.4s ease;
    color: ${baseColors.white};

    svg {
      margin-right: 8px;
      width: 32px;
      height: 32px;
      fill: ${baseColors.white};
    }
    span {
      opacity: 0;
      transition: all 0.2s ease;
    }
    &:hover {
      transform: translateX(-5px);
      span {
        opacity: 1;
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
    > div {
      width: 80%;
      max-width: 700px;

      @media (min-width: ${breakpoints.md}) {
        width: 100%;
      }
    }
    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 1.25rem;
      line-height: 1.2em;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 4px;
      margin-bottom: 1em;
    }
    p {
      line-height: 1.5em;
      margin-bottom: 1.5em;
    }
  }
  .details-title {
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    line-height: 1.2em;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 0.5em;
  }

  footer {
    background: ${baseColors.grayLightest};
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    justify-content: center;

    a {
      position: initial;
      width: 100%;
      max-width: 700px;
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      span {
        color: ${baseColors.grayDark};
        opacity: 1;
      }
      svg {
        fill: ${baseColors.grayDark};
        margin-right: 1rem;
      }
    }
  }
`;

export default Container;
