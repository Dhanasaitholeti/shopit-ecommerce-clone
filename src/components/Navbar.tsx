import { Logo, NavLink, NavLinks, NavbarContainer } from "./ui/Navbar.styles";
import logo from "../assets/images/Navbarimage.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Link to={"/"}>
          <Logo src={logo} />
        </Link>
        <NavLinks>
          <NavLink>
            <a href="/cart">cart</a>
          </NavLink>
        </NavLinks>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
