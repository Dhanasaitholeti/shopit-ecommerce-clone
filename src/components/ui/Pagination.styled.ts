import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: "transparent";
  color: "#0070ff";
  border: 1px solid #0070ff;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #0070ff;
    color: #fff;
  }
`;

/* ${(props) => (props.isActive ? "#0070ff" : "transparent")}; */

/* ${(props) => (props.isActive ? "#fff" : "#0070ff")}; */
