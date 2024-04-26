import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../../../css/product.card.css';
import { IGetAllProductsResponse } from '../../../../../../../core/product/domain/get.all.products';
import fallbackImage from '../../../../../../../assets/imagen-no-found.jpg'; 

interface ProductCardProps {
  product: IGetAllProductsResponse;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageSrc, setImageSrc] = useState(product.images[0]);
  
  const handleImageError = () => {
    setImageSrc(fallbackImage);
  };

  return (
    <div className='col mt-3'>
      <Link className='product-card-link' to={`/product/${product.id}?`}>
        <div className='card text-dark bg-light mb-3 product-card'>
          <div className='row no-gutters'>
            <div className='col-4'>
              <img
                src={imageSrc}
                alt={product.title}
                className='card-img'
                style={{ width: "200px", height: "100px"}}
                onError={handleImageError}
              />
            </div>

            <div className='col-8'>
              <h3 className='card-title'><strong>{product.title}</strong></h3>
            </div>
          </div>
          <div className='card-footer d-flex justify-content-between align-items-center'>
            <small style={{ fontSize: '1.25rem', color: "blue" }}>
              ${product.price}
            </small>
            <small className='text-muted' style={{ fontSize: '1.25rem' }}>
              {product.category.name}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
