import { useEffect } from 'react'
import { useProductsFilterForm } from './hooks'
import { useCategoryStore } from '../../../category/store/use.category.store'

export const ProductsFilterForm = () => {
  const { methods } = useProductsFilterForm()
  const searchParams = useProductsFilterForm()
  const { allCategories, loadingAllCategories, getAllCategories } =
    useCategoryStore() // Obtener las categorías disponibles

  useEffect(() => {
    getAllCategories() // Obtener todas las categorías al montar el componente
  }, [])

  useEffect(() => {}, [searchParams])

  const handlePriceMinChange = (e: any) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '')
    methods.setValue('price_min', newValue)
  }

  const handlePriceMaxChange = (e: any) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '')
    methods.setValue('price_max', newValue)
  }

  return (
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
        <span style={{ color: "black"}}>Filtrar por categoria: </span>
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
      <hr />
    </form>
  )
}
