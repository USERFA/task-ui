import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task4D } from '../models/Task4D.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private t: Task4D[] = [];
  id_task: number = 0;

  constructor(private apicall: HttpClient) { }
  private URL = 'http://localhost:80/Rest/Task'
  //getting tasks from the api
  getTasks(): Observable<Task4D[]> {
    // return this.apicall.put<any[]>(`${this.URL}/all_records`, this.t);
    return this.apicall.put<any[]>('http://localhost:80/Rest/Task/all_records', this.t);
  }

  //removing a task using delete api
  removeTask(t:Task4D): void {
    const url = `http://localhost:80/Rest/Task('${t.id})/remove_by_ID`;
    this.apicall.delete(url);
    alert("Task deleted!");
  }

  //modify a task using update api
  updateTask(t:Task4D): Observable<Task4D>{
    const url = `http://localhost:80/Rest/Task('${t.id})/update_by_ID`;
    alert("Your task was modified!");
    return this.apicall.put<Task4D>(url, t);
  }

  //add a new task using create api
  createTask(t:Task4D): Observable<Task4D> {
    alert("Your task was created successfully!");
    return this.apicall.post<Task4D>('http://localhost:80/Rest/Task/create', t);

  }

}
