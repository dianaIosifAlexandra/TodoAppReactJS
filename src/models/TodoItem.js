export default class TodoItem {
  constructor(id, description, deadline, isDone) {
    this.id = id || null;
    this.description = description || "";
    this.deadline = deadline || Date();
    this.isDone = isDone || false;
  }
}
