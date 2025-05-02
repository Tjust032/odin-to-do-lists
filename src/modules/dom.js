import ProjectManager from './projectManager.js';

function getCurrentProject() {
  const currentID = ProjectManager.getCurrentProjectID();
  return ProjectManager.getProjectByID(currentID);
}

function renderProjects(projects) {
  const projectList = document.querySelector("#project-container");
  projectList.replaceChildren();

  projects.forEach((project) => {
    const projectItem = createProjectElement(project);
    projectList.appendChild(projectItem);
  });
}

function createProjectElement(project) {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");
  projectItem.dataset.id = project.id;

  const projectName = document.createElement("span");
  projectName.textContent = project.name;

  projectItem.appendChild(projectName);

  projectItem.addEventListener("click", () => {
    ProjectManager.setCurrentProjectID(project.id);
    renderTodos();
  });

  return projectItem;
}

function renderTodos() {
  const project = getCurrentProject();
  if (!project) return;

  const contentProjectName = document.querySelector(".content-project-name");
  const todoContainer = document.querySelector(".todo-container");

  contentProjectName.textContent = project.name;
  todoContainer.replaceChildren();

  project.getTodos().forEach((todo) => {
    const todoItem = createTodoElement(todo);
    todoContainer.appendChild(todoItem);
  });
}

function createTodoElement(todo) {
  const todoItemContainer = document.createElement("div");
  todoItemContainer.classList.add("todo");
  todoItemContainer.dataset.id = todo.id;

  const todoContent = document.createElement("div");
  todoContent.classList.add("todo-item-content");

  const isDoneCheckbox = createCheckbox(todo);
  const title = createTitle(todo);
  const dueDate = createDueDate(todo);
  const priority = createPriority(todo);
  const description = createDescription(todo);

  todoContent.appendChild(title);
  todoContent.appendChild(dueDate);
  todoContent.appendChild(priority);
  todoContent.appendChild(description);

  todoItemContainer.appendChild(isDoneCheckbox);
  todoItemContainer.appendChild(todoContent);

  return todoItemContainer;
}

function createCheckbox(todo) {
  const isDoneCheckbox = document.createElement("input");
  isDoneCheckbox.type = "checkbox";
  isDoneCheckbox.classList.add("todo-checkbox");
  isDoneCheckbox.checked = todo.completed;
  return isDoneCheckbox;
}

function createTitle(todo) {
  const title = document.createElement("h4");
  title.textContent = todo.title;
  if (todo.completed) {
    title.style.textDecoration = "line-through";
  }
  return title;
}

function createDueDate(todo) {
  const dueDate = document.createElement("p");
  dueDate.textContent = todo.dueDate || "No Due Date";
  return dueDate;
}

function createPriority(todo) {
  const priority = document.createElement("div");
  priority.classList.add("todo-priority");
  priority.textContent = todo.priority;
  if (todo.priority === "low") {
    priority.style.backgroundColor = "#d1ffbd";
  } else if (todo.priority === "medium") {
    priority.style.backgroundColor = "#FFDEAD";
  } else if (todo.priority === "high") {
    priority.style.backgroundColor = "#eabebe";
  }
  return priority;
}

function createDescription(todo) {
  const description = document.createElement("p");
  description.classList.add("todo-description");
  description.textContent = todo.description || "No Description";
  return description;
}

function clearAndShowTodoDetails(todoID) {
  const project = getCurrentProject();
  const todo = project.getTodos().find((item) => item.id === todoID);
  if (!todo) return;

  const dialog = document.querySelector(".todo-item-dialog");
  dialog.replaceChildren();

  const descTitle = document.createElement("h4");
  descTitle.textContent = "Description:";

  const descContent = document.createElement("p");
  descContent.textContent = todo.description || "N/A";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.classList.add("close-todo-info-btn");

  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  dialog.appendChild(descTitle);
  dialog.appendChild(descContent);
  dialog.appendChild(closeBtn);

  dialog.showModal();
}

export { renderTodos, clearAndShowTodoDetails, renderProjects };
