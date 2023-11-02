import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 15%;
  padding: 10px 40px;
  min-width: 320px;
`;

export const SectionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-weight: 500;
    opacity: 0.75;
    &:hover {
      opacity: 1;
      cursor: pointer;
      color: #0070ff;
    }
  }
`;
