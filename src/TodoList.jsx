import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    { id: 1, title: "Homework" },
    { id: 2, title: "Buy groceries" },
    { id: 3, title: "Make dinner" },
];

function TodoList() {//todoList.map()...
    return (
        <ul>
            {todoList.map((todo) => (//todoList={setTodoList} Pass todoList state 
            // as a prop named todoList to the TodoList component
              <TodoListItem key={todo.id} id={todo.id} title={todo.title}/>
            ))}
        </ul>
    );
}
export default TodoList;
