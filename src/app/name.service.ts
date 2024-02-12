
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task, TaskList, TaskRest } from './task';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  private baseUrl = 'http://127.0.0.1:4000/';  // Assurez-vous que cette URL correspond à votre backend.

  constructor(private http: HttpClient) {}

  getTaskList(): Observable<TaskList> {
    return this.http.get<TaskList>(`${this.baseUrl}api/teams`);
  }
  getTaskLisChoose(): Observable<TaskList> {
    return this.http.get<TaskList>(`${this.baseUrl}api/teamsChoose`);
  }
  postTaskList(taskList: TaskRest[]) {
    return this.http.post(`${this.baseUrl}api/teamspost`, JSON.stringify(taskList));
  }
}
