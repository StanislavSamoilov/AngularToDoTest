import { Component, Input } from '@angular/core';

import { ToDoItem } from 'src/app/to-do-item.model';
import { ToDoItemsService } from 'src/app/to-do-items.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent {
  @Input() toDoItem: ToDoItem;

  constructor(private toDoItemsService: ToDoItemsService) { }

  deleteToDo(): void {
    this.toDoItemsService.deleteToDo(this.toDoItem);
  }

  toggleToDoStatus(): void {
    this.toDoItemsService.toggleToDoStatus(this.toDoItem);
  }

}
