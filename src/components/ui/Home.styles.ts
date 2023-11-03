import styled from "styled-components";

export const HomeScreenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 1vw 1vw;
  @media screen and (min-width: 1300px) {
    /* Adjust the margin for larger screens (lg screen) */
    margin: 1vw 5vw; /* Change the margin values to your preference */
  }
`;

export const MainContentWrapper = styled.main`
  grid-column: 1 / span 4;
  @media screen and (min-width: 900px) {
    grid-column: 2 / span 3;
  }
`;
