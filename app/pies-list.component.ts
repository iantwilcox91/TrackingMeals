import { Component } from '@angular/core';

@Component({
  selector: 'pies',
  template: `
  <h3 class="red">Here are my favorite pies!</h3>
  <hr />
  <div *ngFor="let currentPie of favoritePies">
    <p class="blue">{{currentPie}}</p><hr />
  </div>
  `
})

export class PiesListComponent {
  favoritePies: string[] = ["rhubarb", "Banana Cream", "Blackberry"];
}
