import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './task.model';


@Component({
  selector: 'task-list',
  template: `
  <h3 class="red">select the meals you want to see</h3>
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="under500">Show under 500</option>
      <option value="over500">Show over 500</option>
    </select>
    <hr />
    <div class="blue" *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness">
      <task-display [food]="currentTask"></task-display>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
      <hr />
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Food[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(taskToEdit: Food) {
    this.clickSender.emit(taskToEdit);
  }
}
