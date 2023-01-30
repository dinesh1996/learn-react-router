import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

export default function Confirmation() {
  const { state } = useLocation()
  console.log(useLocation())
  return (
    <div className='container'>
      {state ? (
        <>
          <h1>
            Thank You <strong>{state.name}</strong>!
          </h1>
          <p>You're now registered for Red30 Tech.</p>

          <p>
            We've sent more details to <strong>{state.email}</strong>
          </p>
        </>
      ) : (
        <div>
          <p> Did you get lost ?</p>
          <Link to={'/'}>Bring me back Home</Link>
        </div>
      )}
    </div>
  )
}
