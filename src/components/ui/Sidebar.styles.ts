import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  display: none;
  flex-direction: column;
  padding: 10px 40px;
  position: fixed;
  min-width: 200px;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export const SectionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1.75rem;
`;

export const Para = styled.p`
  font-weight: 500;
  opacity: 0.75;
  &:hover {
    opacity: 1;
    cursor: pointer;
    color: #0070ff;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: medium;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #007bff;
  }
`;
