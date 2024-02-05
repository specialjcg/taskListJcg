import {Component, OnInit} from '@angular/core';
import {NameService} from "../name.service";
import {Task, TaskList, TaskRest, toTaskList} from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent  implements OnInit{
  taskList: Task[] | undefined;

  constructor(private nameService: NameService) {}

  ngOnInit(): void {
    this.fetchTaskList();
  }

  fetchTaskList(): void {
    this.nameService.getTaskList().subscribe(
      (tasks: TaskList) => {
        this.taskList = toTaskList(tasks.tasks);
      },
      (error) => {
        console.error('Error fetching task list', error);
      }
    );
  }
}
