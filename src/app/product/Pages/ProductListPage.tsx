import { useState } from 'react'
import '../../product/css/product.list.css'
import { Create, Filters } from '../all/components'
import ProductsAllPage from '../all'

const ProductListPage = () => {
  const [showForm, setShowForm] = useState(false)

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <>  
    <div>
          <div className='title text-center'>ALL PRODUCTS</div>
    </div>
      <div className='page-container'>
        <Filters />
        <div className='content-container'>
          <div className=''>
            <button
              className='btn btn-outline-success btn-light'
              onClick={handleToggleForm}
            >
              Create Product
            </button>
          </div>
          <hr />

          {showForm && <Create />}

          <ProductsAllPage />
        </div>
      </div>
    </>
  )
}

export default ProductListPage
