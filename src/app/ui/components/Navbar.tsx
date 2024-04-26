import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useProductsFilterForm } from '../../product/all/components/filters/hooks'

export const Navbar = () => {
  const { methods } = useProductsFilterForm()
  const searchParams = useProductsFilterForm()

  useEffect(() => {}, [searchParams])

  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark p-2 fixed-top'>
        <div className='container-fluid'>
          <a className='navbar-brand'>Fake Store</a>

          <div className='navbar-collapse'>
            <div className='navbar-nav'>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? 'active' : ''}`
                }
                to='/products'
              >
                Products
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? 'active' : ''}`
                }
                to='/categories'
              >
                Categories
              </NavLink>
            </div>
          </div>
        </div>
        <form
          className='d-flex'
          role='search'
        >
          <input
            {...methods.register('title')}
            placeholder='Title'
            className='form-control me-2'
            type='text'
            aria-label='Search'
          />
        </form>
      </nav>
    </>
  )
}
