const addTaskButton = document.getElementById("addTaskButton");
const taskTitleInput = document.getElementById("taskTitle");
const taskPrioritySelect = document.getElementById("taskPriority");
const taskList = document.getElementById("taskList");
const taskDateTimeInput = document.getElementById("taskDateTime");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Função para salvar tarefas no localStorage
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Função para mapear prioridade de inglês para português
const priorityMap = {
  low: "Baixa",
  medium: "Média",
  high: "Alta",
};
const mapPriorityToPortuguese = (priority) => priorityMap[priority] || "Baixa";

// Função para criar uma nova tarefa e adicionar ao HTML
const createTaskElement = (task) => {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  if (task.completed) {
    taskItem.classList.add("completed");
  }

  // Formatar data para exibir apenas hora e minuto
  const formattedDate = new Date(task.datetime);
  const dateString = formattedDate.toLocaleDateString("pt-BR");
  const timeString = formattedDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  taskItem.innerHTML = `
      <span class="task-title">${task.title}</span>
      <span class="task-datetime">${dateString} ${timeString}</span>
      <span class="priority ${task.priority}">${mapPriorityToPortuguese(
    task.priority
  )}</span>
      <div class="task-actions">
        <button class="complete-btn" onclick="toggleTaskComplete(${
          task.id
        })">Concluir</button>
        <button class="edit-btn" onclick="editTask(${task.id})">Editar</button>
        <button class="remove-btn" onclick="removeTask(${
          task.id
        })">Remover</button>
      </div>
    `;
  return taskItem;
};

// Função para adicionar uma tarefa nova
const addTask = () => {
  const taskTitle = taskTitleInput.value.trim();
  const taskPriority = taskPrioritySelect.value;
  const taskDateTime = taskDateTimeInput.value;

  if (taskTitle !== "" && taskDateTime !== "") {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      priority: taskPriority,
      datetime: taskDateTime,
      completed: false,
    };
    tasks.push(newTask);
    taskList.appendChild(createTaskElement(newTask));
    saveTasks();
    taskTitleInput.value = "";
    taskDateTimeInput.value = "";
    taskPrioritySelect.value = "";
  } else {
    alert("Preencha todos os campos.");
  }
};

// Função para habilitar ou desabilitar o botão de adicionar tarefa
const toggleAddTaskButton = () => {
  addTaskButton.disabled =
    taskTitleInput.value.trim() === "" || taskDateTimeInput.value === "";
};

taskTitleInput.addEventListener("input", toggleAddTaskButton);
taskDateTimeInput.addEventListener("input", toggleAddTaskButton);
toggleAddTaskButton(); // Inicializa no estado correto

// Função para alternar o status de concluída da tarefa
const toggleTaskComplete = (taskId) => {
  const task = tasks.find((t) => t.id === taskId);
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
};

// Função para remover uma tarefa
const removeTask = (taskId) => {
  if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
    tasks = tasks.filter((t) => t.id !== taskId);
    saveTasks();
    renderTasks();
  }
};

// Função para editar uma tarefa
const editTask = (taskId) => {
  const task = tasks.find((t) => t.id === taskId);
  const taskItem = document.querySelector(`.task-item span.task-title`);
  const taskElement = taskList
    .querySelector(`.task-item .edit-btn[onclick="editTask(${taskId})"]`)
    .closest(".task-item");

  taskElement.innerHTML = `
      <div class="task-edit">
        <input type="text" value="${task.title}" id="editTitle-${taskId}" />
        <select id="editPriority-${taskId}">
          <option value="low" ${
            task.priority === "low" ? "selected" : ""
          }>Baixa</option>
          <option value="medium" ${
            task.priority === "medium" ? "selected" : ""
          }>Média</option>
          <option value="high" ${
            task.priority === "high" ? "selected" : ""
          }>Alta</option>
        </select>
        <input type="datetime-local" id="editDateTime-${taskId}" value="${
    task.datetime
  }" />
        <button onclick="saveTask(${taskId})">Salvar</button>
        <button onclick="renderTasks()">Cancelar</button>
      </div>
    `;
};

// Função para salvar a edição da tarefa
const saveTask = (taskId) => {
  const task = tasks.find((t) => t.id === taskId);
  const editTitleInput = document.getElementById(`editTitle-${taskId}`);
  const editPrioritySelect = document.getElementById(`editPriority-${taskId}`);
  const editDateTimeInput = document.getElementById(`editDateTime-${taskId}`);

  task.title = editTitleInput.value;
  task.priority = editPrioritySelect.value;
  task.datetime = editDateTimeInput.value;
  saveTasks();
  renderTasks();
};

// Função para renderizar todas as tarefas na tela
const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));
  });
};

// Função de arrastar e soltar com Sortable.js
new Sortable(taskList, {
  onEnd(evt) {
    const movedTask = tasks.splice(evt.oldIndex, 1)[0];
    tasks.splice(evt.newIndex, 0, movedTask);
    saveTasks();
  },
});

// Adiciona a tarefa ao clicar no botão ou pressionar Enter
addTaskButton.addEventListener("click", addTask);
taskTitleInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Inicializa as tarefas na página
renderTasks();
