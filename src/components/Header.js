import { Link } from 'react-router-dom'
import logo from '../assets/red30-tech-logo.png'

export default function Header() {
  return (
    <header className='container'>
      <img
        className='logo'
        src={logo}
        alt='Red30 Tech logo'
        title='Red30 Tech | Home'
      />
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/categories'}>Categories</Link>
        <Link to={'/about'}>About</Link>
      </nav>
    </header>
  )
}
