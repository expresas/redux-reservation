import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewImage } from '../features/user'

const UserProfilePage = () => {

  const user = useSelector(state => state.user.value.userLogged)

  const inputRef = useRef()
  const dispat = useDispatch()

  function changeUserImage() {
    dispat(setNewImage(inputRef.current.value))
    inputRef.current.value = ''
  }

  return (
    <div className='profile'>
      <h1>{user.email}</h1>
      <div><img src={user.image} alt="" /></div>
      <div>
        <input type="text" name="" id="" placeholder='paste image url' ref={inputRef}/>
      </div>
      <div>
        <button onClick={changeUserImage}>Change profile photo</button>
      </div>
    </div>
  )
}

export default UserProfilePage