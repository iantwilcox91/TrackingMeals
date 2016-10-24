import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
     ></task-list>

    <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>

    <new-task
        (newTaskSender)="addTask($event)"
      ></new-task>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("hamburger", "didnt get a soda", 354),
      new Task("fries", "only ate half", 565),
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
      this.masterTaskList.push(newTaskFromChild);
    }
  }


// We used [ ] to signify an input - the child component's job here is to display a list of tasks. It can't do that job unless we pass in an array of tasks to display. And we use () to signify that we are expecting an output from the child component - it will emit an event when an edit button has been clicked. The $event is what will hold our clicked task. It seems a little weird - I'm sorry, I dislike memorizing things, and this is something to memorize, but Angular doesn't have many of them. There are two rules with custom event listeners:
// We are only allowed to send one piece of data at a time: it is a one lane event emitter bridge. If we need multiple pieces of data, we need to store them in an array, or as key-value pairs in an object.
// Whatever we send along the event emitter bridge pops out in the parent component inside that $event variable.
