import Products from "../components/Products";
import SideBar from "../components/Sidebar";
import {
  HomeScreenWrapper,
  MainContentWrapper,
} from "../components/ui/Home.styles";

const HomeScreen = () => {
  return (
    <HomeScreenWrapper>
      <SideBar />
      <MainContentWrapper>
        <Products />
      </MainContentWrapper>
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
