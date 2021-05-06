import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk('GET_USERS', async () => {
    const response = await axios.get('http://localhost:8080/users')
    return response.data
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

const { actions, reducer } = userSlice
export const {} = actions
export default reducer
