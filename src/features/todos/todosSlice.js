import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        add: (state, {payload}) => {
            state.push(payload)
        },
        del: (state, {payload: index}) => {
            // return state.filter(({ id }) => id !== payload)
            state.splice(index, 1)
        },
        update: (state, {payload: {index, txt}}) => {
            state[index].txt = txt
        }
    }
})


export const { add, del, update } = todoSlice.actions

export const selectTodos = ({todos}) => todos

export default todoSlice.reducer 