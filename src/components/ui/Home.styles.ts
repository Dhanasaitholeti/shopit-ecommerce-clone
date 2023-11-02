import styled from "styled-components";

export const HomeScreenWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 1vw 10vw;
  height: 100vh;
  /* border: 1px solid black; */
`;

export const MainContentWrapper = styled.main`
  grid-column: 2 / span 3;
`;

