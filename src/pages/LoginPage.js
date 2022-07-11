import React from 'react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedUser } from '../features/user'

export const LoginPage = () => {

  const emailRef = useRef()
  const passRef = useRef()

  const [getError, setError] = useState('')

  const users = useSelector(state => state.user.value.users)

  const dispat = useDispatch()

  const nav = useNavigate()

  function validate() {
    // simple validation
    if (emailRef.current.value.includes('@') && passRef.current.value) {
      loginUser(emailRef.current.value, passRef.current.value)
      setError('')
    } else {
      // errorMessage
      setError('fill all required fields')
    }
  }
  
  function loginUser(mail, pass) {
    const userLogged = users.find(user => user.email === mail && user.password === pass)
    if (!userLogged) {
      console.log('no such user / bad password')
      setError('no such user / bad password')
      return 
    } else {
      setError('')
      dispat(setLoggedUser(userLogged))
      nav('/userprofile')
    }
  }

  return (
    <div>
      <h1>User login</h1>
      <div>Enter email</div>
      <input type="text" name="" id="" ref={emailRef}/>
      <div>Enter password</div>
      <input type="text" name="" id="" ref={passRef} />
      <div>
        <button onClick={validate}>Login</button>
      </div>
      {getError && <div>Error: {getError}</div>}
    </div>
  )
}
