import { useState } from 'react'

export default function Register() {
  const [emailValue, setEmailValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
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
