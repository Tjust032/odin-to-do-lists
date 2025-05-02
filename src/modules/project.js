export default function createProject(name) {
    const id = crypto.randomUUID();
    const todos = [];

    return {
        id,
        name,

        addTodo(todo) {
            todos.push(todo);
        },

        removeTodo(id) {
            const index = todos.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                todos.splice(index, 1);
            }
        },

        getTodos() {
            return JSON.parse(JSON.stringify(todos));
        },

        getCompletedTodos() {
            return todos.filter(todo => todo.completed);
        },
        
        getIncompleteTodos() {
            return todos.filter(todo => !todo.completed);
        },
        getID() {
            return this.id;
        }
    };
}