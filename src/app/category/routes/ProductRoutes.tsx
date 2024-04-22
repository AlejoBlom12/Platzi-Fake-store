import { Navigate, Route, Routes } from "react-router-dom";
import CategoryListPage from "../pages/CategoryListPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/categories" element={<CategoryListPage />} />

        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </>
  );
};
