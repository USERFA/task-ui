import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task4D } from '../models/Task4D.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private t: Task4D[] = [];

  constructor(private apicall: HttpClient) { }
  private URL = 'http://localhost:80/Rest/Task'
  //getting tasks from the api
  getTasks(): Observable<Task4D[]> {
    // return this.apicall.put<any[]>(`${this.URL}/all_records`, this.t);
    return this.apicall.put<any[]>('http://localhost:80/Rest/Task/all_records', this.t);
  }

  //removing a task using delete api
  removeTask(): void {

  }

  //modify a task using update api
  updateTask(): void {

  }

  //add a new task using create api
  createTask(): void {

  }

}
