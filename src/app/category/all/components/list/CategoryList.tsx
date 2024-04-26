
import { IGetAllCategoriesResponse } from '../../../../../core/category/domain/get.all.categories'
import CategoryCard from './components/card/CategoryCard'

interface CategoryListProps {
  categories: IGetAllCategoriesResponse[] | null
}

const CategoryList = ({ categories }: CategoryListProps) => {
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
