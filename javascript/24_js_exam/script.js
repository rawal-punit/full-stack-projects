let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask() {
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const taskId = document.getElementById("taskId").value;

    if (!title || !dueDate) {
      alert("Title and Due Date are required!");
      return;
    }

    if (taskId) {
      const task = tasks.find(task => task.id === taskId);
      task.title = title;
      task.description = description;
      task.dueDate = dueDate;
      task.priority = priority;
    } else {
      const newTask = {
        id: Date.now().toString(),
        title,
        description,
        dueDate,
        priority
      };
      tasks.push(newTask);
    }

    saveTasks();
    clearForm();
    displayTasks();
  }

  function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const filterPriority = document.getElementById("priorityFilter").value;
    const searchText = document.getElementById("search").value.toLowerCase();

    const filteredTasks = tasks.filter(task => {
      const matchPriority =
        filterPriority === "all" || task.priority === filterPriority;
      const matchSearch =
        task.title.toLowerCase().includes(searchText);
      return matchPriority && matchSearch;
    });

  filteredTasks.forEach(task => {
  const div = document.createElement("div");

  const title = document.createElement("h4");
  title.innerText = task.title;

  const desc = document.createElement("p");
  desc.innerText = task.description;

  const date = document.createElement("p");
  date.innerText = "Due: " + task.dueDate;

  const priority = document.createElement("p");
  priority.innerText = "Priority: " + task.priority;

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = function () {
    editTask(task.id);
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    deleteTask(task.id);
  };

  div.append(title, desc, date, priority, editBtn, deleteBtn);
  taskList.appendChild(div);
});



  }

  function editTask(id) {
    const task = tasks.find(t => t.id === id);

    document.getElementById("taskId").value = task.id;
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("priority").value = task.priority;
  }

  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    displayTasks();
  }

  function clearForm() {
    document.getElementById("taskId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "";
  }

  displayTasks();