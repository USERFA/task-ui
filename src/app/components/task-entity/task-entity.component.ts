import { Component, Input, OnInit } from '@angular/core';
import { Task4D } from 'src/app/models/Task4D.model';

@Component({
  selector: 'app-task-entity',
  templateUrl: './task-entity.component.html',
  styleUrls: ['./task-entity.component.scss']
})
export class TaskEntityComponent implements OnInit {
  @Input() task!: Task4D;
  constructor() { }

  ngOnInit(): void {
  }

}
