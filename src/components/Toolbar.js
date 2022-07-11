import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setLoggedUser } from '../features/user'

const Toolbar = () => {

  const loggedUser = useSelector(state => state.user.value.userLogged)

  const dispat = useDispatch()

  const nav = useNavigate()

  function logOutUser() {
    dispat(setLoggedUser(''))
    nav('/login')
  }

  return (
    <div>
      {loggedUser 
      ? 
      <div className='toolbar'>
        <Link to={'/userprofile'}>User profile</Link>
        <Link to={'/'}>Reservations</Link>
        <button onClick={logOutUser}>Logout</button>
      </div>
      :
      <div className='toolbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/login'}>Login</Link>
      </div>
      }
    </div>
  )
}

export default Toolbar