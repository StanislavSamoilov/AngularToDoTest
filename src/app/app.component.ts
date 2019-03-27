import { Component } from '@angular/core';
import { ToDoItemsService } from './to-do-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Angular ToDo App';
  public showAddForm = false;

  constructor(private toDoItemsService: ToDoItemsService) { }

  public clearList(): void {
    this.toDoItemsService.clearList();
  }
}
