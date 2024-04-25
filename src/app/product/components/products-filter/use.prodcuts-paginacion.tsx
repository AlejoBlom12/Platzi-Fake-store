import { useSearchParams } from 'react-router-dom'
import { useProductsFilterForm } from './hooks'
import { useProductsStore } from '../../store/use.product.store'

const PaginationProducts = () => {
  const { methods, totalProducts } = useProductsFilterForm()
  const { limit, offset } = methods.getValues()
  const { allProducts } = useProductsStore()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleFirstPage = () => {
    const params = new URLSearchParams(searchParams)
    params.set('offset', '0')
    params.set('limit', limit || '10')
    setSearchParams(params.toString())
  }

  const setPage = (newOffset: number) => {
    methods.setValue('offset', String(newOffset))
  }

  const totalPages = Math.ceil(totalProducts / (parseInt(limit || '10') || 10))

  const paginationLinks = []
  for (let i = 1; i <= totalPages; i++) {
    const calculatedOffset = (i - 1) * (parseInt(limit || '10') || 10)
    const isCurrent = Number(offset) === calculatedOffset

    paginationLinks.push(
      <li key={i}>
        <button
          href={`?limit=${limit}&offset=${calculatedOffset}`}
          className={`pagination-link ${isCurrent ? 'is-current' : ''}`}
          aria-label={`Goto page ${i}`}
          onClick={() => setPage(calculatedOffset)}
        >
          {i}
        </button>
      </li>
    )
  }

  return (
    <nav
      className='pagination is-centered'
      role='navigation'
      aria-label='pagination'
    >
      <button onClick={handleFirstPage}>First Page</button>

      <a
        href={`?limit=${limit}&offset=${Number(offset) - 10}`}
        className='pagination-previous'
      >
        Previous
      </a>
      <a
        href={`?limit=${limit}&offset=${Number(offset) + 10}`}
        className='pagination-next'
      >
        Next page
      </a>
      <ul className='pagination-list'>{paginationLinks}</ul>

      {/* {allProducts?.length > 0 && (
        <button onClick={handleNextPage}>Next Page</button>
      )} */}
    </nav>
  )
}

export default PaginationProducts
