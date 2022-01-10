var buttonEl = document.querySelector("#save-task"); // Use the DOM to find the element object representation of the but
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl); 
}

buttonEl.addEventListener("click", createTaskHandler);
    

