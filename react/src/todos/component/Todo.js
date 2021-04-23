import React from 'react'
import 'todos/style/TodoStyle.css'
import { useDispatch } from 'react-redux'


const Todo =({todo ,delTodo, toggleTodo}) =>{
    const dispatch =useDispatch()

    const delclick = () => {
        console.log(todo.id)
        dispatch(delTodo(todo.id))
    }

    const toggleClick = () =>{
        alert('체크박스 체크됨 ID:' + todo.id)
        dispatch(toggleTodo(todo.id))
    }

    return(
        <div className="todo-container">
            <p>
            <label></label>
            <input type="checkbox" style={{width:100}} onClick={toggleClick}/>
            {(todo.done) ? 
            <del><span> {todo.text}</span></del> : <span> {todo.text}</span>}
            <button style={{width:100, backgroundColor:'red'}} onClick={delclick}>삭제</button>
            </p>
        </div>
    )
}
export default Todo