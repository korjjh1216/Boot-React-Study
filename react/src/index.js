import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
//import store from 'app/store'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { counterReducer,counterSlice } from 'counter/index'
import todoReducer from 'todos/reducer/todo.reducer'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({ counterReducer , counterSlice,todoReducer })
//const store = createStore(rootReducer)
const store =configureStore({reducer: rootReducer})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
