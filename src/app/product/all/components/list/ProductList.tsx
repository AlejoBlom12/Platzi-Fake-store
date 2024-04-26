import { IGetAllProductsResponse } from '../../../../../core/product/domain/get.all.products'
import ProductCard from './components/card/ProductCard'

interface ProductListProps {
  products: IGetAllProductsResponse[] | null
}

const List = ({ products }: ProductListProps) => {
  return (
    <>
      <div className='row rows-cols-1 row-cols-md-2 g-3'>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}

export default List
