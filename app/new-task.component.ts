import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Meal</h1>
    <div>
      <label>Enter Meal Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Meal Details:</label>
      <input #newDetails>
    </div>
    <div>
      <label>Enter Meal Calories:</label>
      <input #newCalories>
      <button (click)="
        addClicked(newName.value, newDetails.value, newCalories.value);
        newName.value='';
        newDetails.value='';
        newCalories.value='';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newTaskToAdd: Task = new Task(name, details, calories);
    this.newTaskSender.emit(newTaskToAdd);
  }
}


// Each hashtag is creating a local variable to hold its HTML input tag. We are able to extract the values typed into each field by typing newDescription.value and newId.value

//You may wonder, why aren't we just sending the description and the id up to the App Component?
