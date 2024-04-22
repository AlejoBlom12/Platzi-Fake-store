import React from 'react'
import { IGetAllCategoriesResponse } from '../../../core/category/domain/get.all.categories'
import '../css/category.card.css'

interface CategoryCardProps {
  category: IGetAllCategoriesResponse
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className='col animate__animated animate__fadeIn mt-3'>
      <div className='card text-dark bg-light mb-3 '>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img
              src={category.image}
              alt={category.name}
              className='card-img'
            />
          </div>

          <div className='col-8'>
            <h3 className='card-title'>{category.name}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
