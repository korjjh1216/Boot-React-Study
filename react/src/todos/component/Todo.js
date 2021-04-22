import React from 'react'
import 'todos/style/TodoStyle.css'

const Todo =({todo}) =>{
    return(
        <div className="todo-container">
            <p>
            <label></label>
            <input type="checkbox" style={{width:100}}/>
            <span> {todo.text}</span>
            <button style={{width:100, backgroundColor:'red'}}>삭제</button>
            </p>
        </div>
    )
}
export default Todo