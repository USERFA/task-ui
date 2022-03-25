import { Component, OnInit } from '@angular/core';
import { Task4D } from 'src/app/models/Task4D.model';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  Tasks_kulhum!: any[];
  // task!: Task4D;

  constructor(private taskservice:TaskServiceService) { }
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
     this.taskservice.getTasks().subscribe( (tt: any[]) => { console.log(tt) ;this.Tasks_kulhum=Object.entries(tt) });
  }

}
