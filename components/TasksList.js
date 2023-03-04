app.component('task-list', {
    props: {
        tasks : {
            type:Array,
            required: true
        }
    },
    template: 
    `
    <div class='task-list'>
        <ul>
            <li v-for='(task, index) in tasks' :key=index>
               <task-inline :task='task' :key='index' @remove-task-from-list='removeTask'></task-inline>
            </li>
        </ul>
    </div>
    `,
    methods : {
        removeTask(task) {
            this.$emit('remove-task-from-list', task)
        }
    }
})