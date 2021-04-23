import React from 'react'
import 'todos/style/TodoStyle.css'
import { useDispatch } from 'react-redux'


const Todo =({todo ,delTodo}) =>{
    const dispatch =useDispatch()

    const delclick = () => {
        console.log(todo.id)
        dispatch(delTodo(todo.id))
    }
    return(
        <div className="todo-container">
            <p>
            <label></label>
            <input type="checkbox" style={{width:100}}/>
            <span> {todo.text}</span>
            <button style={{width:100, backgroundColor:'red'}} onClick={delclick}>삭제</button>
            </p>
        </div>
    )
}
export default Todo