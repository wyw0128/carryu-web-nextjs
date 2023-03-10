import styled from "styled-components";
import { BodyStyles } from "../styles/mixins";
export const GridMax = styled.div`
  ${BodyStyles}
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
  gap: 2rem;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  @media screen and (min-width: 300px) and (max-width: 850px) {
    grid-template-columns: 1fr;
    margin: 2rem auto 1rem auto;
    padding: 10px;
  }
  &.imm {
    background: #f2e0c9;
    border-radius: 0.375rem;
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
      drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  }
`;

export const DynamicCol = styled.div`
  /* NOTE: This kind of grid-column is useful when the contents can fill a whole row and do not need to center the content */
  grid-column: ${(props) => `span ${props.ratio}`};
  @media screen and (min-width: 300px) and (max-width: 850px) {
    grid-column: span 1;
  }
`;
