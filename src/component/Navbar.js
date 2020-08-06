import React,{useContext} from 'react'
import {todoContext} from '../Context/TodoContext'

const Navbar=()=> {
    const {todos}=useContext(todoContext)
    return (
        <div>
            <h3>Welcome to  The Todo App</h3>
            <p>Currently you have {todos.length} todo's</p>
           
        </div>
    )
}

export default Navbar
