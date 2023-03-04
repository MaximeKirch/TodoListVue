app.component('add-task', {
    template :
        `
        <div class='add-task'>
            <input type='text' v-model='task' placeholder='Plan your next task' class='nextTask' id="addInput"/>
            <button class='addButton' @click=pushTask(this.task)>Plan it !</button>
        </div>
        `,
        data() {
            return {
                task : ''
            }
        },
        methods : {
            pushTask() {
                if(this.task.length !== 0) {
                    let newTask = this.task
                    this.$emit('add-task-to-todo', newTask)
                    this.task=''
                } else alert("You can't add an empty task !")
            }
        }
})