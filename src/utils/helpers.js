export const getTaskNumbers = (tasks) => {
    return {
        active: tasks.filter(task => task.active).length,
        newTask: tasks.filter(task => task.newTask).length,
        completed: tasks.filter(task => task.completed).length,
        failed: tasks.filter(task => task.failed).length,
    }
}