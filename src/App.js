import "./App.css";
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, ProductList, Cart, WishList } from "./pages/";
import { Navigation } from "./components";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store" element={<ProductList />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;