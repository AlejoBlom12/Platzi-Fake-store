import { useState } from 'react';
import ProductList from '../components/ProductList';
import { useProductsStore } from '../store/use.product.store';
import ProductForm from '../components/FormCreateProduct/ProductForm';
import '../css/product.list.css';
import { ProductsFilterForm } from '../components'; 


const ProductListPage = () => {
  const { allProducts, loadingAllProducts } = useProductsStore();
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='page-container'>
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

        {showForm && <ProductForm />}

        <ProductsFilterForm />

        {loadingAllProducts ? (
          <div>Loading...</div>
        ) : (
          <>
            <ProductList products={allProducts || []} />
          </>
        )}

      </div>
    </div>
  );
};

export default ProductListPage;
