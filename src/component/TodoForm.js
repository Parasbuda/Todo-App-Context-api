import React,{useState, useContext} from 'react'
import { todoContext } from '../Context/TodoContext'

const TodoForm=()=> {
    const [todo,setTodo]=useState("")
    const {addTodo}=useContext(todoContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(todo)
        setTodo("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter the Todo" required value={todo}
            onChange={e=>setTodo(e.target.value)}/>
            <button >Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm
