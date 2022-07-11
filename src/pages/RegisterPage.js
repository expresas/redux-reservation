import React from 'react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/user'

const RegisterPage = () => {

  const emailRef = useRef()
  const pass1Ref = useRef()
  const pass2Ref = useRef()

  const [getError, setError] = useState('')

  const nav = useNavigate()

  const dispat = useDispatch()

  function validate() {
    // simple validation
    if (emailRef.current.value.includes('@') && pass1Ref.current.value && pass2Ref.current.value) {
      if (pass1Ref.current.value === pass2Ref.current.value) {
        registerUser(emailRef.current.value, pass1Ref.current.value)
        setError('')
      }
    } else {
      // errorMessage
      setError('fill all required fields')
    }
  }

  function registerUser(mail, pass) {
    const user = {id: Date.now(), email: mail, password: pass, image: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'}
    dispat(createUser(user))
    nav('/login')
  }

  return (
    <div>
      <h1>User registration</h1>
      <div>Enter email</div>
      <input type="text" name="" id="" ref={emailRef}/>
      <div>Enter password</div>
      <input type="text" name="" id="" ref={pass1Ref}/>
      <div>Repeat password</div>
      <input type="text" name="" id="" ref={pass2Ref}/>
      <div>
        <button onClick={validate}>Register</button>
      </div>
      {getError && <div>Error: {getError}</div>}
    </div>
  )
}

export default RegisterPage