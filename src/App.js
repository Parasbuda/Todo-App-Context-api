import React from 'react';
import Navbar from './component/Navbar';
import TodoContext from "./Context/TodoContext"
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

const App=()=> {

  return (
    <div>
      <TodoContext>
        <Navbar/>
        <TodoList/>
        <TodoForm/>
      </TodoContext>
    </div>
    
  );
}

export default App;
