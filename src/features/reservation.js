import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name: "reservation",
    initialState: {
        value: {
            reservations: Array(30).fill(0),
            userLogged: '',
        }
    },
    reducers: {
        bookThis: (state, action) => {
            state.value.reservations[action.payload.index] = action.payload.id
        },
        deleteBooking: (state, action) => {
            state.value.reservations[action.payload] = 0
        },
    }
})

export const {bookThis, deleteBooking} = userSlice.actions
export default userSlice.reducer