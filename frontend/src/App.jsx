import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Recommendation from "./pages/Recommendation";
import ProductDetail from "./pages/ProductDetail";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/look/:id" element={<Products />} />

        <Route path="/recommend" element={<Recommendation />} />

        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;