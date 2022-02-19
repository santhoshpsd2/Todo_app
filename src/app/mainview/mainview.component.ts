import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/columns.model';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss']
})
export class MainviewComponent {

  constructor() {
    console.log(this.board);


   }

  board:Board = new Board('Todo App',[
    new Column('Ideas', ["Random Idea", "Another Random idea", "lorem ipsum"]),
    new Column('Research', ['Research Data', 'Lorem Foo']),
    new Column('Todo', ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']),
    new Column('Done', ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'])
  ])




  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
