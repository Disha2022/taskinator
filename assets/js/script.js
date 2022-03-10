var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#task-to-do"); 

// console.dir(buttonE1);
// buttonE1.addEventListener("click", function () {
// var listItemE1 = document.createElement("li");
// listItemE1.className="task-item";
// listItemE1.textContent = "This is a new task."
// tasksToDoE1.appendchild(listItemE1);

// });

var createTaskHandler = function (event) {
    event.preventDefault();

var listItemE1 = document.createElement("li");
listItemE1.className="task-item";
listItemE1.textContent="This is a new task.";
tasksToDoE1.appendChild(listItemE1)
 

}

formE1.addEventListener("click", createTaskHandler);
// tasksToDoE1.appendChild(listItemE1);