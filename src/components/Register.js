import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Register() {
  const [emailValue, setEmailValue] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/confirmed', {
      state: { email: emailValue, name: `${firstName} ${lastName}` },
    })
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
          First Name:
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type='text'
            name='name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
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
