import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Categories from './Categories'
import About from './About'
import Header from './Header'
import Category from './Category'
import Session from './Session'

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home title='Welcome to Red30 Tech' />}
        ></Route>
        <Route path='/categories' element={<Categories />}>
          <Route path=':categoryId' element={<Category />}>
            <Route path=':sessionId' element={<Session />} />
          </Route>
        </Route>

        <Route path='/about' element={<About />} />
        <Route
          path='*'
          element={<h1 className='not-found'>Page Not Found</h1>}
        />
      </Routes>
      <footer className='container'>
        &copy;2022 | <a href='https://red30tech.com/'>Red30 Tech</a>
      </footer>
    </div>
  )
}

export default App
