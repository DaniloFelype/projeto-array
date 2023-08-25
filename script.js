// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma nova tarefa
function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskName = newTaskInput.value.trim();

    if (taskName !== '') {
        tasks.push(taskName);
        newTaskInput.value = '';
        displayTasks();
    }
}

// Função para exibir as tarefas na lista
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', () => removeTask(index));
        
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Função para remover uma tarefa
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Vincular o botão "Adicionar" à função addTask
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addTask);

// Exibir as tarefas iniciais
displayTasks();
