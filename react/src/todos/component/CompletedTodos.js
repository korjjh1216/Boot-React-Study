import React from 'react'
import 'todos/style/TodoStyle.css'

const CompletedTodos =() =>{
    const taskCompleted =()=>{
        console.log("Task Complete...")

    }
    return(
    <div className="todo-container">
        <h3>Completed</h3>
        <ul id="completed-tasks">
                <li>
                    <input type="checkbox" checked="" />
                    <label>See the Doctor</label>
                    <input type="text" />
                    <button className="edit" >Edit</button>
                    <button className="delete" >Delete</button>
                </li>
            </ul>
    </div>
    )
}
export default CompletedTodos