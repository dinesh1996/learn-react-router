import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Register() {
  const [emailValue, setEmailValue] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/confirmed', { state: { email: emailValue } })
  }

  return (
    <div className='container'>
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}
