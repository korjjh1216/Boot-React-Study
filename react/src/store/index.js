import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { counterReducer, counterSlice } from 'counter/index'
import todoReducer from 'todos/reducer/todo.reducer'
import userReducer from 'user/reduser/user.reducer'
import logger from 'redux-logger'

const rootReducer = combineReducers({ counterReducer, counterSlice, todoReducer, userReducer })

export default configureStore({
    rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
})
