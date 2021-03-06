import React from 'react'
import AddTodo from 'todos/component/AddTodo'
import Todos from 'todos/component/Todos'
import CompletedTodos from 'todos/component/CompletedTodos'
//import Todo from 'todos/component/Todo'
import { addTodo, delTodo ,delTodos,toggleTodo } from 'todos/reducer/todo.reducer'
import { useSelector } from 'react-redux'

const TodoApp = () =>{
    const todos = useSelector(state => (state.todoReducer))

    return(<>        
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} delTodo={delTodo} delTodos={delTodos} toggleTodo={toggleTodo}/>
        <CompletedTodos/>
    </>)
}
export default TodoApp