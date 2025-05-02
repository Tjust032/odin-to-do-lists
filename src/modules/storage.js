import createProject from './project.js';
import createTodo from './todo.js';
import ProjectManager from './projectManager.js';

const STORAGE_KEY = 'todo-projects';

function saveProjects(projects) {
    const plainProjects = projects.filter(project => project.name !== 'Your tasks')
    .map(project => {
        console.log('Saving project:', project);
        return {
            id: project.id,
            name: project.name,
            todos: ProjectManager.getProjectByID(project.id).getTodos().map(todo => ({
                id: todo.id,
                title: todo.title,
                description: todo.description,
                dueDate: todo.dueDate,
                priority: todo.priority,
                completed: todo.completed,
            })),
        };
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(plainProjects));
}

function loadProjects() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    try {
        const parsed = JSON.parse(raw);
        return parsed.map(rawProject => {
            const project = createProject(rawProject.name);
            project.id = rawProject.id;

            rawProject.todos.forEach(rawTodo => {
                const todo = createTodo(
                    rawTodo.title,
                    rawTodo.description,
                    rawTodo.dueDate,
                    rawTodo.priority
                );
                todo.id = rawTodo.id;
                todo.completed = rawTodo.completed;
                project.addTodo(todo);
            });

            return project;
        });
    } catch (error) {
        console.error('Failed to parse projects from localStorage:', error);
        return [];
    }
}

export { saveProjects, loadProjects };