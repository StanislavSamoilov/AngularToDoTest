import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { ToDoItem } from 'src/app/to-do-item.model';
import { ToDoItemsService } from 'src/app/to-do-items.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do-item-active',
  templateUrl: './to-do-item-active.component.html',
  styleUrls: ['./to-do-item-active.component.scss'],
})
export class ToDoItemActiveComponent implements OnInit {
  @Input() toDoItem: ToDoItem;
  @Output() deactivateToDo = new EventEmitter<ToDoItem>();
  public titleControl: FormControl;
  public descriptionControl: FormControl;

  constructor(private toDoItemsService: ToDoItemsService) {}

  ngOnInit(): void {
    this.titleControl = new FormControl(
      this.toDoItem.title,
      Validators.required
    );
    this.descriptionControl = new FormControl(this.toDoItem.description);
  }

  public deleteToDo(): void {
    this.toDoItemsService.deleteToDo(this.toDoItem);
  }

  public changeToDo(): void {
    this.toDoItem.title = this.titleControl.value;
    this.toDoItem.description = this.descriptionControl.value;
    this.toDoItemsService.changeToDo(this.toDoItem);
  }

  public sendDeactivateEvent(): void {
    this.deactivateToDo.emit(this.toDoItem);
  }
}
