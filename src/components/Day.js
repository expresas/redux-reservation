import React from 'react'
import { useState } from 'react'
// import { useSelector } from 'react-redux'

const Day = ({reservation, index, selectedReservation}) => {
  
  const [getSelected, setSelected] = useState('')

  // const loggedUser = useSelector(state => state.user.value.userLogged)

  function selectDay() {
    if (!getSelected) {
      setSelected('red')
    } else {
      setSelected('')
    }
    selectedReservation(index)
  }

  return (
    <div className='reservation' onClick={selectDay} style={{backgroundColor: getSelected}}>
      {!reservation ? <div>{index + 1}</div> : <div>X</div>}
    </div>
  )
}

export default Day