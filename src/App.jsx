import { useState } from 'react'
import './App.css'

// Array
const todoList = [
  { 
    id: 1,
    title: 'Homework' 
  },
  { 
    id: 2,
    title: 'Buy groceries' 
  },
  { id: 3,
    title: 'Make dinner'
  },
];

function App() {

  return(
  <div>
    <h1>TODO LIST</h1>
    <ul> 
         {todoList.map( function(item) {
            return (
            <li key={item.id}> 
              {item.title} 
            </li>
            );
         })}
     </ul>
  </div>
  );
}
//console.log(App());

export default App;
