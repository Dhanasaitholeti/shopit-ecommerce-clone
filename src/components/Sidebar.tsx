import { useNavigate } from "react-router-dom";
import { SectionsWrapper, SidebarWrapper } from "./ui/Sidebar.styles";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <SidebarWrapper>
        <h3>Category</h3>
        <SectionsWrapper>
          <p onClick={() => navigate("?category=Clothing")}>Clothing</p>
          <p onClick={() => navigate("?category=Electronics")}>Electronics</p>
          <p onClick={() => navigate("?category=Appliances")}>Appliances</p>
          <p onClick={() => navigate("?category=Grocery")}>Grocery</p>
          <p onClick={() => navigate("?category=Toys")}>Toys</p>
        </SectionsWrapper>
      </SidebarWrapper>
    </>
  );
};

export default SideBar;
