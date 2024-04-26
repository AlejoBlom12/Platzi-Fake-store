import { useEffect } from 'react'
import { useProductsFilterForm } from './hooks'
import { useCategoryStore } from '../../../../category/store/use.category.store'
import '../../../css/buton.pagination.css'

export const Filters = () => {
  const { methods, totalProducts } = useProductsFilterForm()
  const { allCategories, loadingAllCategories, getAllCategories } =
    useCategoryStore()

  useEffect(() => {
    getAllCategories()
  }, [getAllCategories])

  const handlePriceMinChange = (e: any) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '')
    methods.setValue('price_min', newValue)
  }

  const handlePriceMaxChange = (e: any) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '')
    methods.setValue('price_max', newValue)
  }

  const handleOffsetChange = (newOffset: number) => {
    methods.setValue('offset', newOffset.toString())
  }

  const handleNextPage = () => {
    const currentOffset = parseInt(methods.getValues('offset') ?? '1')
    const nextOffset = currentOffset + 10
    handleOffsetChange(nextOffset)
  }

  const handlePreviusPage = () => {
    let currentOffset = parseInt(methods.getValues('offset') ?? '1')
    if (currentOffset > 1) {
      currentOffset -= 10
      handleOffsetChange(currentOffset)
    }
  }

  const handleFirstPage = () => {
    handleOffsetChange(1)
  }

  return (
    <div className='filters-container'>
      <form>
        <span style={{ color: 'white' }}>Filter of price: </span>
        <br />
        <input
          {...methods.register('price_min')}
          placeholder='Price min'
          type='text'
          style={{ width: '300px', padding: '5px', margin: '3px' }}
          value={methods.getValues('price_min')}
          onChange={handlePriceMinChange}
        />

        <input
          {...methods.register('price_max')}
          placeholder='Price max'
          type='text'
          style={{ width: '300px', padding: '5px', margin: '3px' }}
          value={methods.getValues('price_max')}
          onChange={handlePriceMaxChange}
        />

        <div className='mt-5'>
          <span style={{ color: 'white' }}>Filter of category: </span>
          <br />
          <select
            {...methods.register('categoryId')}
            style={{ width: '300px', padding: '5px', margin: '3px' }}
          >
            <option value=''>All categories</option>
            {loadingAllCategories ? (
              <option value=''>Loading...</option>
            ) : (
              allCategories?.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))
            )}
          </select>
        </div>

        <hr />
      </form>
      <div>
        <span style={{ color: 'white' }}>Page: </span>
        <input
          {...methods.register('offset')}
          placeholder='Offset'
          type='text'
          style={{ width: '100px', padding: '5px', margin: '3px' }}
          value={methods.getValues('offset')}
          readOnly
        />
      </div>

      <div className='bottom-buttons'>
        <button
          className='btn btn-light'
          onClick={handleFirstPage}
          style={{ width: '80px', height: '50px' }}
        >
          First
        </button>
        <button
          className='btn btn-light'
          onClick={handlePreviusPage}
          style={{ marginLeft: '5px', width: '80px', height: '50px' }}
        >
          Previus
        </button>
        <button
          className='btn btn-light'
          onClick={handleNextPage}
          style={{ marginLeft: '5px', width: '80px', height: '50px' }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
