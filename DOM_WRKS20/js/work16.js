// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <input type="checkbox" onchange="toggleTaskStatus(this)">
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(newTask);

    taskInput.value = '';
}

// Function to toggle task status (completed/uncompleted)
function toggleTaskStatus(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.classList.add('completed');
    } else {
        taskText.classList.remove('completed');
    }
}

// Function to remove a task
function removeTask(button) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement);
}

// Function to clear completed tasks
function clearCompletedTasks() {
    const taskList = document.getElementById('taskList');
    const completedTasks = taskList.querySelectorAll('.completed');

    completedTasks.forEach(function(task) {
        taskList.removeChild(task.parentElement);
    });
}
