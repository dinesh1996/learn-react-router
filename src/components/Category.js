import { NavLink, Outlet, useParams } from 'react-router-dom'
import { getCategory } from '../api'

export default function Category() {
  const { categoryId } = useParams()
  const category = getCategory(categoryId)
  return (
    <>
      <h2>{category.name} Sessions</h2>
      {category.sessions.length > 0 && (
        <>
          <ul className='session-list'>
            {category?.sessions.map((session) => (
              <li key={session.id} className='session'>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'session-active' : null
                  }
                  to={session.id}
                >
                  <p className='session-name '>{session.name}</p>
                  <p>
                    {session.speaker.name} | {session.speaker.org}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      )}
    </>
  )
}
