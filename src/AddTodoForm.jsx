//create a function called AddTodoForm
function AddTodoForm(props) {
//Add props as a parameter in the AddTodoForm function

    //handleAddTodo form submit
    function handleAddTodo(event){

        //prevent the default behavior of the for submit
        event.preventDefault()
    
        //retrieve the Value of the title from the event target 
        //and store it in a variable called: todoTitle
        const todoTitle = event.target.title.value;
        console.log(todoTitle)

        props.onAddTodo(todoTitle)

        event.target.reset();
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label text="title" htmlFor="todoTitle">Title: </label>
            <input type="text" name="title" id="todoTitle" />   
            <button text="add" type="submit">Add</button>
        </form>
    )
}
//export AddTodoForm function as default module
export default AddTodoForm;

