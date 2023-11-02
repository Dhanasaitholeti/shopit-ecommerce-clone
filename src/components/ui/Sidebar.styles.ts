import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
  position: fixed;
  min-width: 200px;
`;

export const SectionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1.75rem;
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
