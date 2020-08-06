import React,{useState,useEffect} from 'react'
import uuid from "uuid"
export const todoContext=React.createContext()
const TodoContext=(props)=> {
   const [todos,setTodos]=useState(()=>{
       const localData=localStorage.getItem("todos")
       return (localData?JSON.parse(localData):[])
   })

    const addTodo=(title)=>{
        setTodos([...todos,{title,id:uuid()}])
    
    }

    const removeTodo=(id)=>{
        setTodos(todos.filter(todo=>{
            return(todo.id!==id)
        }))
    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

 
  
    return (
        <div>
        <todoContext.Provider value={{todos,addTodo,removeTodo}}>

            {props.children}
            </todoContext.Provider>
        
            
        </div>
    )
}

export default TodoContext
