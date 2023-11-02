import { Logo, NavLink, NavLinks, NavbarContainer } from "./ui/Navbar.styles";
import logo from "../assets/images/Navbarimage.png";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Logo src={logo} />
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
