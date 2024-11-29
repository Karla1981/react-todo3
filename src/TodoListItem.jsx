import React from "react";


// create a new functional React component
const TodoListItem = ({title, id} ) => {

    return(
        <li> 
            {title.title} {id.id}
        </li> 
    );
}

// export default TodoListItem
export default TodoListItem;

// Child component