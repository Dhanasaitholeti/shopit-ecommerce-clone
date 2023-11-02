import { Logo, NavLink, NavLinks, NavbarContainer } from "./ui/Navbar.styles";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Logo href="/"> Logo</Logo>
        <NavLinks>
          <NavLink>
            <a href="/home">Home</a>
          </NavLink>
          <NavLink>
            <a href="/cart">Cart</a>
          </NavLink>
        </NavLinks>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
