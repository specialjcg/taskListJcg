// task.model.ts

export interface Task {
  description: string;
  completed: boolean;
}
export interface TaskList {
  tasks: TaskRest[];
}
export interface TaskRest {
  name: string;
  completed: boolean;
}
export function toTaskList(tasks: TaskRest[]): Task[] {
  let taskList: Task[] = [];
  tasks.forEach(task => {
    taskList.push({
      description: task.name,
      completed: task.completed
    })
  })
  
  return taskList;
} 