import React from "react";
import TodoListItem from "./TodoListItem";

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

//create a function called TodoList - pass in todoList as a prop with {}
function TodoList() {

  return (
   
      <ul> 
        { todoList.map( function (todo) { 
          < TodoListItem key={todo.id} /> }) 
        }   
      </ul>
  );
}
//export TodoList as default module
export default TodoList;

// Parent component