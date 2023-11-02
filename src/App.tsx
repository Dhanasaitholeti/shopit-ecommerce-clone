import RootLayout from "./Layout";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import CartScreen from "./pages/CartScreen";
import NotFoundScreen from "./pages/NotFoundScreen";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
