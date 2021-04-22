import React from 'react'
import 'todos/style/TodoStyle.css'
import { Todo } from 'todos/index'
const Todos = ({todos}) => {
    return(<>
        <div className="todo-container">
        <label htmlFor="new-task">To-Do List</label>
            {todos.map(todo => (<Todo key={todo.id} todo={todo}/>))}
        </div>
    </>)
}
export default Todos