import { Injectable } from '@angular/core';

import { ToDoItem } from './to-do-item.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemsService {
  getToDoList(): ToDoItem[] {
    return JSON.parse(localStorage.getItem('toDoList')) || 
           localStorage.setItem('toDoList', JSON.stringify([]));
  }

  addToDo(newItem: ToDoItem): void {
    const tempToDoList = this.getToDoList();

    tempToDoList.push(newItem);
    localStorage.setItem('toDoList', JSON.stringify(tempToDoList));
  }

  // maybe add index to model ?
  deleteToDo(itemToDelete: ToDoItem): void {
    let tempToDoList = this.getToDoList();

    tempToDoList = tempToDoList.filter((item) => {
      return item.date !== itemToDelete.date;
    });
    localStorage.setItem('toDoList', JSON.stringify(tempToDoList));
  }

  // maybe add index to model ?
  toggleToDoStatus(toDoForChange: ToDoItem): void {
    let tempToDoList = this.getToDoList();

    tempToDoList = tempToDoList.map((e) => {
      if (e.date === toDoForChange.date) {
        e.state = !e.state;
        e.date = new Date();
      }
      return e;
    });
    localStorage.setItem('toDoList', JSON.stringify(tempToDoList));
  }

  clearList(): void {
    localStorage.setItem('toDoList', JSON.stringify([]));
  }
}
