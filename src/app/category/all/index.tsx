import { useCategoryStore } from "../store/use.category.store";
import CategoryList from "./components/list/CategoryList";


const CategoriesAllPage = () => {
  const { allCategories, loadingAllCategories } = useCategoryStore();

  

  return (
    <div className='mt-5'>
      {loadingAllCategories ? (
          <div>Loading...</div>
        ) : (
          <>
            <CategoryList categories={allCategories || []} />
          </>
        )}
    </div>
  )
}

export default CategoriesAllPage
