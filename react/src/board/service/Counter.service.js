import { createSlice } from '@reduxjs/toolkit'

const counterService = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        add: (i) => (i.value = +1),
        sub: (i) => (i.value = -1),
    },
})
export const { add, sub } = counterService.actions
export default counterService.reducer
