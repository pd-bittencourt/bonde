import styled from "styled-components";
import { baseColors, breakpoints } from "../../constants/stylesBase";

export const Container = styled.section`
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: ${baseColors.grayDark};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: ${breakpoints.md}) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      width: 80%;
      max-width: 1200px;
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  p {
    color: ${baseColors.white};
    font-size: 1rem;
    line-height: 1.8;
    max-width: 700px;
    width: 80%;
    @media (min-width: ${breakpoints.md}) {
      font-size: 1.2rem;
      line-height: 1.5;
      padding-left: 3rem;
    }
  }

  img {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 2rem;

    @media (min-width: ${breakpoints.md}) {
      width: 200px;
      height: 200px;
    }
  }

  @media (min-width: 1000px) {
    #lorena img {
      width: 300px;
      height: 300px;
    }
    #lorena p {
      font-size: 1.5rem;
      padding-left: 3.6rem;
    }
  }
`;
