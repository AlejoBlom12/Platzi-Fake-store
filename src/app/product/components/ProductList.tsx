import React from 'react'
import ProductCard from './ProductCard'
import { IGetAllProductsResponse } from '../../../core/product/domain/get.all.products'

interface ProductListProps {
  products: IGetAllProductsResponse[] | null
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='row rows-cols-1 row-cols-md-2 g-3'>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductList
