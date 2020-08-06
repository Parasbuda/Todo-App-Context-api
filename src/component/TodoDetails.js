import React,{useContext} from 'react'
import { todoContext } from '../Context/TodoContext'

const TodoDetails=({tod})=> {
    const {removeTodo}=useContext(todoContext)
    return (
        <li onClick={()=>removeTodo(tod.id)}>
            <div >{tod.title}</div>
        </li>
    )
}

export default TodoDetails
