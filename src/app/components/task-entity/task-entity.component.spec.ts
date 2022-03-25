import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEntityComponent } from './task-entity.component';

describe('TaskEntityComponent', () => {
  let component: TaskEntityComponent;
  let fixture: ComponentFixture<TaskEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
