import React from 'react'
import { useSelector } from 'react-redux'

const ShowInfo = ({id}) => {

  const users = useSelector(state => state.user.value.users)
  const userInfo = users.find(user => user.id === id)

  return (
    <div className='showShortUserInfo'>
      <div>User booked: {userInfo.email}</div>
      <div><img src={userInfo.image} alt="" /></div>
      <div>User id: {userInfo.id}</div>    
    </div>
  )
}

export default ShowInfo