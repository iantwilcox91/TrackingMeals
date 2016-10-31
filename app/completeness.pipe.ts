import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], desiredCompleteness) {

    var output: Task[] = [];

    if(desiredCompleteness === "over500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredCompleteness === "under500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 501) {
          output.push(input[i]);
        }
      }
      return output;

    } else {
      return input;
    }
  }
}

// By setting pure to true, our pipe becomes stateless. This means it transforms input to output, but doesn't do anything else or store any information until we explicitly tell it to.
// Conversely, we can make our pipe stateful by setting pure to false. This tells Angular to check if the output has changed after each change detection cycle, causing it to update as soon as we change something about a task - not just when the menu changes.
