
import {getList,signup} from 'user/service/user.service'
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUserList = createAsyncThunk('users/fetch', 
async () => {
    //const res = await axios.get('http://localhost:8080/users/fetch')
    const res = await getList()
    //alert(`2. 겟리스트까지 들어옴`)
    console.log(JSON.stringify(res.data));
    return res.data;
});

const isRejectedAction = action => (action.type.endsWith('rejected'))
const userSlice = createSlice({
    name: 'users',
    initialState:[],
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUserList.fulfilled ,(state,{ payload }) =>{
            //alert(`회원 목록 조회 성공 ${payload}`)
            return [...payload]
        })
        .addMatcher(isRejectedAction,()=>{})
        .addDefaultCase((state,action)=>{})
    }
})

const { actions, reducer } = userSlice
export const {} = actions
export default reducer
