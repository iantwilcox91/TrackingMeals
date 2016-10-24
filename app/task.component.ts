import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-display',
  template: `
  <div>
    <input *ngIf="task.done === true"/>
    <input *ngIf="task.done === false"/>
    <label>{{ task.name }}</label><br>
    <label>{{ task.details }}</label><br>
    <label>{{ task.calories }}</label>
  </div>
  `
})
export class TaskComponent {
  @Input() task: Task;
  }
