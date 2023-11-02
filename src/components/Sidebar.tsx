import { useNavigate, useLocation } from "react-router-dom";
import { Para, SectionsWrapper, SidebarWrapper } from "./ui/Sidebar.styles";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  console.log(queryparams.getAll("category"));
  // const currentCategory = queryparams.get("category");

  return (
    <>
      <SidebarWrapper>
        <h3>Category</h3>
        <SectionsWrapper>
          <Para onClick={() => navigate("?category=Clothing")}>Clothing</Para>
          <Para onClick={() => navigate("?category=Electronics")}>
            Electronics
          </Para>
          <Para onClick={() => navigate("?category=Appliances")}>
            Appliances
          </Para>
          <Para onClick={() => navigate("?category=Grocery")}>Grocery</Para>
          <Para onClick={() => navigate("?category=Toys")}>Toys</Para>
        </SectionsWrapper>
      </SidebarWrapper>
    </>
  );
};

export default SideBar;
