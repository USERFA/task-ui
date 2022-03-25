import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task4D } from 'src/app/models/Task4D.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output() formtask: EventEmitter<Task4D> = new EventEmitter(); //value to output to the parent class app/comp
  //2 way binding with the form
  label!: string;
  sdate!: Date;
  deadline!: Date;
  priority!: string;
  status!: string;
  details!: string;
  constructor() { }

  ngOnInit(): void {
  }

  submitData(): void {
    if (!this.label) {
      alert("Enter a valid label!");
    }
    if (!this.status) {
      alert("Enter a valid status!");
    }
    if (!this.priority) {
      alert("Select a valid priority!");
    }
    if (!this.details) {
      alert("Enter some details bout your task!");
    }
    //checking the difference between the dates
    if ((!this.sdate) && (!this.deadline)) {
      alert('select a date !');
    }
    else {
      if ((this.sdate) > (this.deadline)) {
        alert("Choose a valid deadline!");
        return;
      } else {
        console.log("cool");
      }
    }
    const taskform = {//storing the form's inputs as constant collection
      label: this.label,
      priority: this.priority,
      details: this.details,
      status: this.status,
      startingDate: this.sdate,
      deadline: this.deadline,
    };
    this.formtask.emit(taskform);
  }


  cancel():void{
    console.log("caaaaanceeel"),
    this.label="",
    this.deadline=new Date('0000-00-00'),
    this.status="",
    this.details="",
    this.priority="",
    this.sdate=new Date('0000-00-00')
  }
}
