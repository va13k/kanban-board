export default class Stage {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }

    getName() {
        return this.name;
    }

    getTasks() {
        return this.tasks;
    }

    addTask(newTask) {
        return new Stage(
            this.name,
            [...this.tasks, newTask]
        );
    }

    removeTask(index) {
        return new Stage(
            this.name,
            this.tasks.filter(
                (el, idx) => index !== idx
            )
        )
    }
}