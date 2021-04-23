import React , { useState } from 'react'
import 'todos/style/TodoStyle.css'
import { useDispatch } from 'react-redux'

const AddTodo = ({addTodo}) => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTask = (value) => {
      //플럭스  - 단방향 처리를 위해 
       dispatch(addTodo(value)) // 페이로드를 통해 값이 담겨져 있음, 디스패치는 액션을 담음
      const taskInput = document.getElementById("new-task")
        taskInput.value = "";
      }
    const onSubmit = e => {
        e.preventDefault()
        addTask(input)
    }  

    return(    
    <div className="todo-container">
        
        <p>
        <form onSubmit={onSubmit}>
                <label htmlFor="new-task">Add Item</label>
                <input id="new-task" type="text"  onChange={(e) => setInput(e.target.value)} />
                <button onSubmit={addTodo}>Add</button>
                </form>
        </p>
       
    </div>
    )
}
export default AddTodo