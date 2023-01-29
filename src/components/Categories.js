import { getCategories } from '../api'
export default function Categories() {
  const categories = getCategories()
  return (
    <div className='container'>
      <h1>Session Categories</h1>
      {categories.length > 1 && (
        <ul className='categories'>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
