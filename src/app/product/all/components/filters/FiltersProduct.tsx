import { useEffect } from 'react'
import { useProductsFilterForm } from './hooks'
import { useCategoryStore } from '../../../../category/store/use.category.store'

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

  const handleFirstPage = () => {
    handleOffsetChange(1)
  }

  const handleNextPage = () => {
    const currentOffset = parseInt(methods.getValues('offset') ?? '1')
    const nextOffset = currentOffset + 1
    handleOffsetChange(nextOffset)
  }

  return (
    <>
      <form>
        <span style={{ color: 'black' }}>Filtrar por precio: </span>
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

        <div>
          <span style={{ color: 'black' }}>Filtrar por categoría: </span>
          <select
            {...methods.register('categoryId')}
            style={{ width: '200px', padding: '5px', margin: '3px' }}
          >
            <option value=''>Todas las categorías</option>
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

        <div>
          <span style={{ color: 'black' }}>Offset: </span>
          <input
            {...methods.register('offset')}
            placeholder='Offset'
            type='text'
            style={{ width: '100px', padding: '5px', margin: '3px' }}
            value={methods.getValues('offset')}
            readOnly
          />
        </div>

        <hr />
      </form>
      <button
        onClick={handleFirstPage}
        style={{ marginLeft: '5px' }}
        disabled={parseInt(methods.getValues('offset') ?? '1') === 1}
      >
        First
      </button>
      <button
        onClick={handleNextPage}
        style={{ marginLeft: '5px' }}
        disabled={
          parseInt(methods.getValues('offset') ?? '1') ===
          Math.ceil(totalProducts / 6)
        }
      >
        Next
      </button>
    </>
  )
}
