const todoInput = document.getElementById("todo-input");
const addTaskBtn =  document.getElementById("add-task-btn");
const todoList =  document.getElementById("todo-list");

let tasks = []

addTaskBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    
    if(taskText === "") return

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
    }
    
    tasks.push(newTask);
    todoInput.value = "" //Cleaning the input field
    console.log(tasks);
    
})