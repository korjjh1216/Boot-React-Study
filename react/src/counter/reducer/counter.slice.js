import { createSlice } from '@reduxjs/toolkit'

const counterSlice =createSlice({
    name: 'counter',
    initialState: { number: 0 },
    reducers: {
        increase :  (state, action) => ({ number: state.number + 1 }),
        decrease : (state, action) => ({ number: state.number - 1 }),
    }
   
})

const {  actions,reducer } = counterSlice
export const { increase, decrease } =actions
export default reducer