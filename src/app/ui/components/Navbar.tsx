import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2 fixed-top'>
        <div className='container-fluid'>
          <a className='navbar-brand'>Shop</a>

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
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
        </form>
      </nav>
    </>
  )
}
