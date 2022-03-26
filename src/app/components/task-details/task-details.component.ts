import { Component, OnInit } from '@angular/core';
import { Task4D } from 'src/app/models/Task4D.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  t!:Task4D;
  constructor() { }

  ngOnInit(): void {
  }

}
