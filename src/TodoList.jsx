//import?

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

//create a function called TodoList
function TodoList() {

    return (
        <ul> 
            {todoList.map( function(item) {
                return (
                    <li key={item.id}> 
                    {item.title} 
                    </li>
                );  
            })}
        </ul>
    );
}

//export TodoList as default module
export default TodoList;