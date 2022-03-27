import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task4D } from 'src/app/models/Task4D.model';
import { TaskServiceService } from 'src/app/services/task-service.service';
// import{fa-edit} from '@fortawesome/fontawesome-svg-core'
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Output() out:EventEmitter<Task4D[]>=new EventEmitter();//to send the value of the list to the parent it'll push the new object in it
  Tasks_kulhum!:any[];
  // task!: Task4D;

  constructor(private taskservice:TaskServiceService) { }
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks():void{
     this.taskservice.getTasks().subscribe( (tt: any[]) => { console.log(tt) ;this.Tasks_kulhum=tt;console.log(this.Tasks_kulhum)});
     this.out.emit(this.Tasks_kulhum);
  }

  update():void{
    // this.task=t;
    // this.taskservice.updateTask(task);
    alert("modify");
  }
  remove():void{
      // this.task=t;
    // this.taskservice.removeTask(task);
    alert("delete");
  }

}
