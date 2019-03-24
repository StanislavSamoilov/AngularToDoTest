export class ToDoItem {
  constructor(
    public title: string,
    public description: string,
    public date: Date,
    public state: boolean
  ) {}
}