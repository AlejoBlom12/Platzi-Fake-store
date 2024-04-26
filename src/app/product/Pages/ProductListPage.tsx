import { useState } from 'react';
import '../css/product.list.css';
import { Create, Filters } from '../all/components';
import ProductsAllPage from '../all';


const ProductListPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='page-container'>
          <Filters />
      <div className='content-container'>
        <h1>Products</h1>
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
  );
};

export default ProductListPage;
