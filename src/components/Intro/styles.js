import styled from "styled-components";
import { breakpoints } from "../../constants/stylesBase";

export const Container = styled.section`
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (min-width: ${breakpoints.md}) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  p {
    max-width: 700px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 1.5em;
  }
`;
