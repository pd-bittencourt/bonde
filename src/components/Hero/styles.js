import styled from "styled-components";
import { baseColors, breakpoints } from "../../constants/stylesBase";

export const Container = styled.section`
  background-image: url("/imgs/where_is_nihon.jpg");
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${baseColors.white};

  > div {
    transform: translateY(-30px);
  }

  .title {
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    text-align: center;
    margin-left: 12px;
  }

  #logo {
    width: 200px;
    @media (min-width: ${breakpoints.md}) {
      width: 240px;
    }
  }

  #line {
    position: absolute;
    top: calc(100% + 3rem);
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 136px;
    background: ${baseColors.white};
  }
`;
