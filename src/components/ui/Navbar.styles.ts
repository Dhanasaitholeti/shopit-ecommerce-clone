import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #fff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 40px;
  box-shadow: 0 0 1px black;
`;

export const Logo = styled.a`
  color: blue;
  font-size: 2rem;
  text-decoration: none;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export const NavLink = styled.li`
  a {
    font-size: 1.2rem;
    color: #000;
    text-decoration: none;
  }
`;
