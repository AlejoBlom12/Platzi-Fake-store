import { useEffect, useState } from 'react'
import { useCategoryStore } from '../store/use.category.store'
import CategoryList from '../components/CategoryList'
import CategoryForm from '../components/FormCreateCategory/CategoryForm'

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
    <div className='page-container'>
      <div className='content-container'>
        <h1>Categories</h1>
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
  )
}

export default CategoryListPage
