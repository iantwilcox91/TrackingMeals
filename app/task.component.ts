import { Component, Input } from '@angular/core';
import { Food } from './task.model';

@Component({
  selector: 'task-display',
  template: `
  <div>
    <input *ngIf="food.done === true"/>
    <input *ngIf="food.done === false"/>
    <label>{{ food.name }}</label><br>
    <label>{{ food.details }}</label><br>
    <label>{{ food.calories }}</label>
  </div>
  `
})
export class TaskComponent {
  @Input() food: Food;
  }
