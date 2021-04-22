import React from 'react'
import 'todos/style/TodoStyle.css'
import { useDispatch } from 'react-redux'

const AddTodo = ({addTodo}) => {

    
    const dispatch = useDispatch()
    const addTask =(value) => {
        dispatch(AddTodo(value))
        console.log("Add task...")
        const taskInput =document.getElementById("new-task")
        taskInput.value = "";
    }
    const submit = e => {
        e.preventDefault()
        alert(`입력값: ${e.target.value}`)
        addTask(e.target.value)
    }  
    return(    
    <div className="todo-container">
        
        <p>
                <label htmlFor="new-task">Add Item</label>
                <input id="new-task" type="text" />
                <button onSubmit={submit}>Add</button>
        </p>
    </div>
    )
}
export default AddTodo