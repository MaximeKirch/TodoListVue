app.component('task-inline', {
    props : {
        task : {
        type: String,
        required: true
        }
    },

    template :
    `
    <div class='inline-task'>
        <input type='checkbox' v-model='complete'/>
            <p :class="[complete ?  completedTask: null]">{{ task }}</p>
        <button class='removeBtn' @click='removeTask(task)'> Remove </button>
    </div>
    `,
    data() {
        return {
            complete : false,
            completedTask : 'completedTask'
        }
    },
    methods : {
        toggleCheck() {
            this.isChecked = !this.isChecked
        },
        removeTask(task) {
            this.$emit('remove-task-from-list', task)
        }
    }
})