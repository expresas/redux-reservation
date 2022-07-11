import React from 'react'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Day from '../components/Day'
import { bookThis } from '../features/reservation'
import { deleteBooking } from '../features/reservation'
import ShowInfo from '../components/ShowInfo'

const IndexPage = () => {

  const reservations = useSelector(state => state.reservation.value.reservations)
  const loggedUser = useSelector(state => state.user.value.userLogged)

  const [getIndex, setIndex] = useState('')
  const [getInfo, setInfo] = useState('')

  const wrapperRef = useRef()

  const dispat = useDispatch()

  function selectedReservation(index) {
    if (reservations[index]) {
      setInfo(reservations[index])
    } else {
      setInfo('')
    }
    removeSelections()
    setIndex(index)
  }

  function bookThisDay() {
    if (loggedUser) {
      if (reservations[getIndex] === loggedUser.id) {
        dispat(deleteBooking(getIndex))
      } 
      if (!reservations[getIndex]) {
        dispat(bookThis({index: getIndex, id: loggedUser.id}))
      }
      removeSelections()
    } else {
      // todo
      console.log('Please login to make reservations')
      alert('Please login to make reservations')
    }
  }

  function removeSelections() {
    wrapperRef.current.childNodes.forEach(element => {
      element.removeAttribute('style')
    })
  }

  return (
    <div>
      <div className='wrapper' ref={wrapperRef}>
        {reservations.map((reservation, index) => <Day key={index} index={index} reservation={reservation} selectedReservation={selectedReservation}/>)}
      </div>
      <div className='wrapper'>
        <div><button onClick={bookThisDay}>{reservations[getIndex] === loggedUser.id ? 'Delete booking' : 'Book this date'}</button></div>
      </div>
      <div className='wrapper'>
        {getInfo && reservations[getIndex] !== loggedUser.id && <ShowInfo id={getInfo} />}
      </div>
    </div>
  )
}

export default IndexPage