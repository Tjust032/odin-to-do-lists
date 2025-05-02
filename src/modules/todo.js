import { parseISO, isValid } from 'date-fns';


export default function createTodo(title, description, dueDate, priority) {
    const id = crypto.randomUUID();
    const completed = false;

    function isStrictISODate(dateStr) {
        const isoRegex = /^\d{4}-\d{2}-\d{2}$/;
        return isoRegex.test(dateStr) && isValid(parseISO(dateStr));
    }

    if (!isStrictISODate(dueDate)) {
        dueDate = new Date().toISOString().split('T')[0];
    }


    return {
        id,
        title,
        description,
        dueDate,
        priority,
        completed,

        toggleCompleted() {
            this.completed = !this.completed;
            console.log(`Todo ${this.id} completed status: ${this.completed}`);
        },

        update(updates) {
            const validKeys = ['title', 'description', 'dueDate', 'priority', 'completed'];
            Object.keys(updates).forEach((key) => {
                if (!validKeys.includes(key)) return; // Ignore invalid keys

                if (key === 'dueDate') {
                    const parsed = parseISO(updates.dueDate);
                    if (!isValid(parsed)) {
                      console.warn('Invalid dueDate:', updates.dueDate);
                      return;
                    }
                } // Validate dueDate

                this[key] = updates[key];
            });
        },
    };
}