import { Card } from './components'

export const List = () => {
  // const products = [
  //   {
  //     name: 'Product 1',
  //     price: 100
  //   },
  //   {
  //     name: 'Product 2',
  //     price: 200
  //   }
  // ]

  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index} />
      ))}

      {/* {products.map((product, index) => (
        <div key={index}>
          <h2>Name: {product.name}</h2>
          <h3>Price: {product.price}</h3>
          <h4>Array Index: {index}</h4>
        </div>
      ))} */}
    </div>
  )
}
