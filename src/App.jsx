import { useState } from 'react'
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  return(
  <div>
    <h1>TODO LIST</h1>
    <AddTodoForm />
    <TodoList />
  </div>
  );
}

export default App;
