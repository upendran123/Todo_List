const taskInput = document.getElementById('task');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('tasks');
const taskCount = document.getElementById('taskCount');

let taskId = 0;

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <input type="checkbox" id="task${taskId}" class="task-checkbox">
        <label for="task${taskId}" class="task-label">${taskText}</label>
        <button class="delete-button" onclick="deleteTask(${taskId})">Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
    taskId++;

    updateTaskCount();
}

function deleteTask(id) {
    const taskItem = document.getElementById(`task${id}`);
    taskItem.parentElement.remove();
    updateTaskCount();
}

function updateTaskCount() {
    const totalTasks = taskList.childElementCount;
    taskCount.textContent = `Total tasks: ${totalTasks}`;
}

addButton.addEventListener('click', addTask);
