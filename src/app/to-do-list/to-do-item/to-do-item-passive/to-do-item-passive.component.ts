import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ToDoItem } from 'src/app/to-do-item.model';
import { ToDoItemsService } from 'src/app/to-do-items.service';

@Component({
  selector: 'app-to-do-item-passive',
  templateUrl: './to-do-item-passive.component.html',
  styleUrls: ['./to-do-item-passive.component.scss'],
})
export class ToDoItemPassiveComponent {
  @Input() toDoItem: ToDoItem;
  @Output() activateToDo = new EventEmitter<ToDoItem>();
  public isOpen = false;

  constructor(private toDoItemsService: ToDoItemsService) {}

  public deleteToDo(): void {
    this.toDoItemsService.deleteToDo(this.toDoItem);
  }

  public toggleToDoStatus(evt: Event): void {
    evt.stopImmediatePropagation();
    this.toDoItemsService.toggleToDoStatus(this.toDoItem);
  }

  public sendActiveteEvent(): void {
    this.activateToDo.emit(this.toDoItem);
  }
}
