import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToDoItemsService } from '../to-do-items.service';
import { ToDoItem } from '../to-do-item.model';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss'],
})
export class AddToDoComponent {
  public toDosForm: FormGroup;

  constructor(private toDoItemsService: ToDoItemsService) {
      this.toDosForm  = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl(''),
      });
  }

  public addNewToDo(): void {
    const newToDoItem = new ToDoItem(
      this.toDosForm.get('title').value,
      this.toDosForm.get('description').value
    );

    this.toDoItemsService.addToDo(newToDoItem);
  }

  public isValid(): boolean {
    return this.toDosForm.invalid && (this.toDosForm.dirty || this.toDosForm.touched);
  }
}
