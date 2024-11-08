//import?

//create a function called AddTodoForm
function AddTodoForm() {

    return (
        <form>
            <label text="title" htmlFor="todoTitle">Title: </label>
            <input id="todoTitle" />
            <spam> <button text="add">Add</button> </spam>
        </form>
    )
}

//export AddTodoForm function as default module
export default AddTodoForm;