import { createSlice } from '@reduxjs/toolkit'
import uuid from 'uuid/dist/v4';

const initialState = [
    {id: 1, text: '리액트 학습', done: true},
    {id: 2, text: '리덕스 학습', done: true},
    {id: 3, text: '썽크 학습', done: false},
]
// 기능 : addTodo, todos, findTodo, editTodo, delTodo
const todoReducer = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo(state, {payload}) { state.push({ id: uuid(), text: payload, done: false })},
        delTodo(state,{payload}) { return state.filter((todo) => todo.id !== payload)},
        delTodos(state, {payload}){
            state.splice( payload)
        },
        toggleTodo(state,{payload}) {
            const toggle = state.find((todo) => todo.id === payload);
            toggle.done = !toggle.done
            
        }
    
    }
})
const {reducer, actions} = todoReducer
export const {addTodo,delTodo ,delTodos,toggleTodo}=actions
export default reducer

