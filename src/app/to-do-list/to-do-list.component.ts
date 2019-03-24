import { Component } from '@angular/core';

import { ToDoItemsService } from '../to-do-items.service';
import { ToDoItem } from '../to-do-item.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  constructor(private toDoItemsService: ToDoItemsService) { }

  getToDoItems(): ToDoItem[] {
    return this.toDoItemsService.getToDoList();
  }
}
