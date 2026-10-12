import { createSlice } from "@reduxjs/toolkit";

interface User {
    name: string,
    age: number,
    id: number
}

interface UserInitial {
    data: User[]
}

let initialState: UserInitial = {
    data: [
        {
            name: 'Tolibjon',
            age: 17,
            id: 1
        },
        {
            name: 'Muhammad',
            age: 16,
            id: 2
        },
    ]
}

export let dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
    deleteUser: (state, {payload}) => {
    state.data = state.data.filter(el => el.id != payload)
    },
    addUser: (state, {payload}) => {
    state.data = [...state.data, payload]
    },
    }
})

export let {deleteUser, addUser} = dataSlice.actions

export default dataSlice.reducer