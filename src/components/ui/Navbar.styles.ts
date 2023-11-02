import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px 5px 20px;
`;

export const Logo = styled.a`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavLink = styled.li`
  margin-left: 10px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;
