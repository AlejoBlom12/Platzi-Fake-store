import { useEffect, useState } from 'react'
import { useCategoryStore } from '../store/use.category.store'
import CategoryForm from '../all/components/create/CategoryForm'
import CategoryList from '../all/components/list/CategoryList'

const CategoryListPage = () => {
  const { loadingAllCategories, allCategories, getAllCategories } =
    useCategoryStore()
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    getAllCategories()
  }, [getAllCategories])

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <>
       <div>
          <div className='title text-center'>ALL CATEGORIES</div>
    </div>
      <div className='page-container'>
        <div className='content-container'>
          <div className=''>
            <button
              className='btn btn-outline-success btn-light'
              onClick={handleToggleForm}
            >
              Create Category
            </button>
          </div>
          <hr />

          {showForm && <CategoryForm />}

          {loadingAllCategories ? (
            <div>Loading...</div>
          ) : (
            <CategoryList categories={allCategories || []} />
          )}
        </div>
      </div>
    </>
  )
}

export default CategoryListPage
