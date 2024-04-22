import React from 'react'
import CategoryCard from './CategoryCard'
import { IGetAllCategoriesResponse } from '../../../core/category/domain/get.all.categories'

interface CategoryListProps {
  categories: IGetAllCategoriesResponse[] | null
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className='row rows-cols-1 row-cols-md-2 g-3'>
      {categories?.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  )
}

export default CategoryList
