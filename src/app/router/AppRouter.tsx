import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../ui/components/Navbar";
import ProductListPage from "../product/Pages/ProductListPage";
import ProductPage from "../product/Pages/ProductPage";
import CategoryListPage from "../category/pages/CategoryListPage";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/categories" element={<CategoryListPage />} />
        <Route path="/products/*" element={<ProductListPage />} />
        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </>
  );
};
