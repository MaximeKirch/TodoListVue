app.component('todo-container', {
    template: 
    `<div class='todo-container'>
        <h1 class='title'>What would you want to plan ?</h1>
        <add-task @add-task-to-todo="addTask"></add-task>
        <task-list :tasks='tasks' v-if='tasks.length' @remove-task-from-list="removeTask"></task-list>
    </div>
    `,
    data() {
        return {
            tasks: [],
        }
    },
    methods: {
        addTask(t) {
            this.$emit('add-task-to-todo', this.tasks.push(t))
        },
        removeTask(value) {
            this.tasks = this.tasks.filter(task => task !== value)
        }
    }
})