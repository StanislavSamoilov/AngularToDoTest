import { Component } from '@angular/core';
import { ToDoItemsService } from './to-do-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular ToDo App';
  showAddForm = false;

  constructor(private toDoItemsService: ToDoItemsService) { }

  clearList() {
    this.toDoItemsService.clearList();
  }
}
