import React, { useContext } from 'react'
import { todoContext } from '../Context/TodoContext'
import TodoDetails from "./TodoDetails"
const TodoList=()=> {
    const {todos}=useContext(todoContext)
    return (
        <div>
            <ul>
            {
                todos.map(todo=>{
                    return(
                        <TodoDetails key={todo.id} tod={todo}/>
                    )
                })
            }
            </ul> 
        </div>
    )
}

export default TodoList
