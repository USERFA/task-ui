import { Component } from '@angular/core';
import { Task4D } from './models/Task4D.model';
import { TaskServiceService } from './services/task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-UI';
  tasks!: Task4D[];
  constructor(private taskservice: TaskServiceService) { }

  //get list from task-list
  getList(t: Task4D[]) {
    console.log(t);
    this.tasks.concat(t); //tasks=t
    if(this.tasks.length==0){
      console.log("empty received array")
    }
  }
  //add
  addTask(taskI: Task4D) {
    console.log(taskI);
    this.taskservice.createTask(taskI).subscribe((taskI) => this.tasks.push(taskI));
    alert("A new task is added to the list");
    }


}
