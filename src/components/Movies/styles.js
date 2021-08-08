import styled from "styled-components";
import { baseColors, breakpoints } from "../../constants/stylesBase";

export const Container = styled.section`
  background-color: teal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    transition: all 0.2s ease;
    &:hover {
      transform: translateX(5px);
    }
    p {
      font-family: "Poppins", sans-serif;
      text-decoration: none;
      color: ${baseColors.white};
      margin-left: 1px;

      @media (min-width: ${breakpoints.md}) {
        margin-left: 3px;
      }
    }
  }

  .movie {
    height: 50vh;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 2rem;

    @media (min-width: ${breakpoints.md}) {
      height: 100vh;
      background-attachment: fixed;
      padding-bottom: 5rem;
    }

    h2 {
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
  }

  .movie-content {
    max-width: 700px;
    width: 80%;
    p {
      transition: all 0.2s ease;
      opacity: 1;

      @media (min-width: ${breakpoints.md}) {
        opacity: 0;
      }
    }
    &:hover p {
      opacity: 1;
    }
  }
`;
