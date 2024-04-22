import { useSearchParams } from 'react-router-dom'
import { Create, Filters, List } from './components'

const ProductsAllPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleParams = () => {
    const params = new URLSearchParams(searchParams)

    params.set('key', 'value')
    params.set('page', '2')

    setSearchParams(params)
  }

  return (
    <div className='mt-5'>
      <div>
        <h1>Params</h1>
        <div>Key: {searchParams.get('key')}</div>
        <div>Page: {searchParams.get('page')}</div>
      </div>

      <hr />

      <Create />
      <Filters />
      <List />
      <button onClick={handleParams}>Change Params</button>
    </div>
  )
}

export default ProductsAllPage
