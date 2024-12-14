import './App.css';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  //create a new state var: newTodo, setNewTodo
  const [newTodo, setNewTodo] = useState(" ");

  return(
    <div>
      <h1>TODO LIST</h1>
      <AddTodoForm setNewTodo={setNewTodo} />
      <p><strong>New todo:</strong> {newTodo}</p>
      <TodoList />
    </div>
  );
}
export default App;
