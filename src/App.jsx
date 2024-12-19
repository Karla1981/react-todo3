import './App.css';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {

  //Create new state var: todoList with 
  //setter setTodoList and default value of an empty Array
  const [todoList, setTodoList] = useState( [] );

  //create a new state var: newTodo, setNewTodo
  const [newTodo, setNewTodo] = useState(" ");

  // Pass setNewTodo as a callback handler prop
  // named onAddTodo to the AddTodoForm component
  return(
    <div>
      <h1>TODO LIST</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p><strong>New todo:</strong>{newTodo}</p>
      <TodoList />
    </div>
  );
}
export default App;
