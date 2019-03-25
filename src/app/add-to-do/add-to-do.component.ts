import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToDoItemsService } from '../to-do-items.service';
import { ToDoItem } from '../to-do-item.model';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent {
  addToDoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    discription: new FormControl('')
  });

  constructor(private toDoItemsService: ToDoItemsService) { }

  addNewToDo(): void {
    // how to code-style this construction ?
    const newToDoItem = new ToDoItem( this.addToDoForm.get('title').value, 
                                    this.addToDoForm.get('discription').value, 
                                    new Date(),
                                    false );
    
    this.toDoItemsService.addToDo(newToDoItem);
  }
}
