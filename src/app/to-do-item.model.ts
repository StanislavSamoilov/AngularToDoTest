export class ToDoItem {
  constructor(
    public title: string,
    public description: string
  ) {
    this.date = new Date();
  }
  public state: boolean = false;
  public date: Date;
}
