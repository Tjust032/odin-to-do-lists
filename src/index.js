import ProjectManager from './modules/projectManager.js';
import createProject from './modules/project.js';
import createTodo from './modules/todo.js';
import { renderTodos, renderProjects } from './modules/dom.js';
import { saveProjects, loadProjects } from './modules/storage.js'; // ✅ NEW

// --------- INIT APP ---------
function init() {
  // ✅ Load projects from localStorage
  const savedProjects = loadProjects();

  if (savedProjects.length > 0) {
    savedProjects.forEach(project => ProjectManager.addProject(project));
    ProjectManager.setCurrentProjectID(savedProjects[0].getID());
  } else {
    // Create default project if no saved data
    const defaultProject = createProject('Your tasks');
    ProjectManager.addProject(defaultProject);
    ProjectManager.setCurrentProjectID(defaultProject.id);
  }

  renderProjects(ProjectManager.getProjects());
  renderTodos();
}

// --------- ADD TODO BUTTON FUNCTIONALITY ---------
function showAddTodoForm() {
  const title = prompt("Todo Title:");
  if (!title) return;

  const dueDate = prompt("Due Date (YYYY-MM-DD):", "");
  const priority = prompt("Priority (low / medium / high):", "medium");
  const description = prompt("Description:", "");

  const newTodo = createTodo(title, description, dueDate, priority);

  const currentProject = ProjectManager.getProjectByID(ProjectManager.getCurrentProjectID());
  currentProject.addTodo(newTodo);

  saveProjects(ProjectManager.getProjects()); // ✅ Save after adding
  renderTodos();
}

function showAddProjectForm() {
  const projectName = prompt("Project Name:");
  if (!projectName) return;

  const newProject = createProject(projectName);
  console.log("New project created:", newProject);
  ProjectManager.addProject(newProject);
  ProjectManager.setCurrentProjectID(newProject.id);

  saveProjects(ProjectManager.getProjects()); // ✅ Save after adding
  renderProjects(ProjectManager.getProjects());
  renderTodos();
}

// --------- EVENT LISTENERS ---------
function bindUIEvents() {
  const addTodoBtn = document.getElementById("add-todo-btn");
  if (addTodoBtn) {
    addTodoBtn.addEventListener("click", showAddTodoForm);
  }

  const addProjectBtn = document.getElementById("add-project-btn");
  if (addProjectBtn) {
    addProjectBtn.addEventListener("click", showAddProjectForm);
  }
}

// --------- START ---------
init();
bindUIEvents();
