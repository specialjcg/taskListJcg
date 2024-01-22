
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  private baseUrl = 'http://localhost:8080';  // Assurez-vous que cette URL correspond à votre backend.

  constructor(private http: HttpClient) {}

  getTaskList(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks/list`);
  }
}
