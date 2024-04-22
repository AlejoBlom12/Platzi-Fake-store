import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../ui/components/Navbar'
import CategoryListPage from '../category/pages/CategoryListPage'
import ProductListPage from '../product/Pages/ProductListPage'
import ProductPage from '../product/Pages/ProductPage'
import ProductsAllPage from '../product/all'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/products'
          element={<ProductListPage />}
        />
        <Route
          path='/new-products'
          element={<ProductsAllPage />}
        />
        <Route
          path='/categories/'
          element={<CategoryListPage />}
        />
        <Route
          path='/product/:productId'
          element={<ProductPage />}
        />
        <Route
          path='/'
          element={<Navigate to='/products' />}
        />
      </Routes>
    </>
  )
}
