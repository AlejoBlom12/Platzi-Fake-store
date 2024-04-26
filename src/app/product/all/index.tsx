import List from './components/list/ProductList'
import { useProductsStore } from '../store/use.product.store';

const ProductsAllPage = () => {
  const { allProducts, loadingAllProducts } = useProductsStore();

  

  return (
    <div className='mt-5'>
      {loadingAllProducts ? (
          <div>Loading...</div>
        ) : (
          <>
            <List products={allProducts || []} />
          </>
        )}
    </div>
  )
}

export default ProductsAllPage
