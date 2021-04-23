import React from 'react'
import 'todos/style/TodoStyle.css'
import { Todo } from 'todos/index'
import { useDispatch } from 'react-redux'
const Todos = ({todos, delTodo,delTodos,toggleTodo}) => {
    
    const dispatch =useDispatch()

    const delclick = () => {
        dispatch(delTodos())
    }

    return(<>
        <div className="todo-container">
        
        <label htmlFor="new-task">To-Do List</label>
            {todos.map(todo => (<Todo key={todo.id} todo={todo} delTodo= {delTodo} toggleTodo={toggleTodo} />))}
            <button style={{width:100, backgroundColor:'red'}} onClick ={delclick}> 전체삭제</button>
        </div>
    </>)
}
export default Todos