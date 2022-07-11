import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name: "user",
    initialState: {
        value: {
            users: [],
            userLogged: '',
        }
    },
    reducers: {
        createUser: (state, action) => {
            state.value.users.push(action.payload)
        },
        setLoggedUser: (state, action) => {
            state.value.userLogged = action.payload
        },
        setNewImage: (state, action) => {
            state.value.userLogged.image = action.payload
        },
    }
})

export const {createUser, setLoggedUser, setNewImage} = userSlice.actions
export default userSlice.reducer