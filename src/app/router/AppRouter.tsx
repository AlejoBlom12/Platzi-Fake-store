import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../ui/components/Navbar";
import ProductListPage from "../product/Pages/ProductListPage";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products/*" element={<ProductListPage />} />
        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </>
  );
};
