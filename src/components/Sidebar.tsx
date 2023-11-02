import { SectionsWrapper, SidebarWrapper } from "./ui/Sidebar.styles";

const SideBar = () => {
  return (
    <>
      <SidebarWrapper>
        <h3>Category</h3>
        <SectionsWrapper>
          <p>Clothing</p>
          <p>Electronics</p>
          <p>Appliances</p>
          <p>Grocery</p>
          <p>Toys</p>
        </SectionsWrapper>
        <h3>Ratings</h3>
      </SidebarWrapper>
    </>
  );
};

export default SideBar;
