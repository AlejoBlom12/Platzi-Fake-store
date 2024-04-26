import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "../Pages/ProductPage";
import ProductListPage from "../Pages/ProductListPage";
import CategoryListPage from "../../category/pages/CategoryListPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/categories" element={<CategoryListPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />

        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </>
  );
};
