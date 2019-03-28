import { Component } from '@angular/core';

import { ToDoItemsService } from '../to-do-items.service';
import { ToDoItem } from '../to-do-item.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  public activeToDo: ToDoItem;

  constructor(private toDoItemsService: ToDoItemsService) {
    this.activeToDo = new ToDoItem('', '');
  }

  public getToDoItems(): ToDoItem[] {
    return this.toDoItemsService.getToDoList().reverse();
  }

  public trackByIndex(index): number {
    return index;
  }

  public makeActive(newActiveToDo: ToDoItem): void {
    this.activeToDo = newActiveToDo;
  }

  public makePassive(makePassiveToDo: ToDoItem): void {
    this.activeToDo = new ToDoItem('', '');
  }
}
