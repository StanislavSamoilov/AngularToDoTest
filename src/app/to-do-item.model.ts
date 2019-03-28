export class ToDoItem {
  constructor(public title: string, public description: string) {
    this.date = new Date();
  }
  public state = false;
  public date: Date;
}
