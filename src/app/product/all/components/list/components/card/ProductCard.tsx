import React from 'react'
import { Link } from 'react-router-dom'
import '../../../../../css/product.card.css'
import { IGetAllProductsResponse } from '../../../../../../../core/product/domain/get.all.products'

interface ProductCardProps {
  product: IGetAllProductsResponse
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='col mt-3'>
      <Link
        className='product-card-link'
        to={`/product/${product.id}?`}
      >
        <div className='card text-dark bg-light mb-3 product-card'>
          <div className='row no-gutters'>
            <div className='col-4'>
              <img
                src={product.images[0]}
                alt={product.title}
                className='card-img'
              />
            </div>

            <div className='col-8'>
              <h3 className='card-title'>{product.title}</h3>
            </div>
          </div>
          <div className='card-footer d-flex justify-content-between align-items-center'>
            <small
              className='text-muted'
              style={{ fontSize: '1.25rem' }}
            >
              ${product.price}
            </small>
            <small
              className='text-muted'
              style={{ fontSize: '1.25rem' }}
            >
              {product.category.name}
            </small>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
