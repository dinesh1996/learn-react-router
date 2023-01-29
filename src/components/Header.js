import { NavLink } from 'react-router-dom'
import logo from '../assets/red30-tech-logo.png'

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? 'nav-active' : null)
  return (
    <header className='container'>
      <img
        className='logo'
        src={logo}
        alt='Red30 Tech logo'
        title='Red30 Tech | Home'
      />
      <nav>
        <NavLink className={getClass} to={'/'}>
          Home
        </NavLink>
        <NavLink className={getClass} to={'/categories'}>
          Categories
        </NavLink>
        <NavLink className={getClass} to={'/about'}>
          About
        </NavLink>
      </nav>
    </header>
  )
}
