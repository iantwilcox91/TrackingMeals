import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-display',
  template: `
  <div>
    <input *ngIf="task.done === true" type="checkbox" checked/>
    <input *ngIf="task.done === false" type="checkbox"/>
    <label>{{ task.name }}</label><br>
    <label>{{ task.details }}</label><br>
    <label>{{ task.calories }}</label>
  </div>
  `
})
export class TaskComponent {
  @Input() task: Task;
  }
