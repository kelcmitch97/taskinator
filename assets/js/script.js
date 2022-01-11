var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    

    // Create list item 
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // Create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info"; // give class name

    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>"; // Add HTML content to div
    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl); // Add entire list item to the parent ul which is tasksToDoEl
};

formEl.addEventListener("submit", createTaskHandler);
    

