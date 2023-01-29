import { NavLink, Outlet } from 'react-router-dom'
import { getCategories } from '../api'
export default function Categories() {
  const categories = getCategories()
  return (
    <div className='container'>
      <h1>Session Categories</h1>
      {categories.length > 1 && (
        <>
          <ul className='categories'>
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'category-active' : null
                  }
                  to={category.id}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </div>
  )
}
