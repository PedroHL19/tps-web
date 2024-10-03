document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const completedCount = document.getElementById('completed-count');
    const totalCount = document.getElementById('total-count');
    const filterButtons = document.querySelectorAll('.filters button');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks(filter = 'all') {
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            if (filter === 'completed') return task.completed;
            if (filter === 'pending') return !task.completed;
            return true;
        });

        filteredTasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            li.innerHTML = `
                <span>${task.text}</span>
                <button onclick="toggleTask(${index})">✓</button>
                <button onclick="deleteTask(${index})" class="delete-btn">X</button>
            `;
            taskList.appendChild(li);
        });

        completedCount.textContent = tasks.filter(task => task.completed).length;
        totalCount.textContent = tasks.length;
    }

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = '';
            saveTasks();
            renderTasks();
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            renderTasks(filter);
        });
    });

    window.toggleTask = function(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    };

    window.deleteTask = function(index) {
        tasks.splice(index, 1); // Remove a tarefa da lista
        saveTasks();
        renderTasks();
    };

    renderTasks(); // Renderizar as tarefas ao carregar a página
});
