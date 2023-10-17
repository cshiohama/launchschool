class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(item) {
    if (!(item instanceof Todo)) {
      throw new TypeError('can only add Todo objects');
    }

    this.todos.push(item);
  }

  size() {
    return this.todos.length;
  }

  first() {
    if (this.todos.length > 0)
      return this.todos[0];
  }

  last() {
    if (this.todos.length > 0) 
      return this.todos[this.todos.length - 1];
  }

  itemAt(index) {
    if (index in this.todos)
      return this.todos[index];
    else
      throw new ReferenceError(`invalid index: ${index}`);
  }

  markDoneAt(index) {
    if (index in this.todos)
      this.todos[index].markDone();
    else
      throw new ReferenceError(`invalid index: ${index}`);
  }

  markUndoneAt(index) {
    if (index in this.todos)
      this.todos[index].markUndone();
    else
      throw new ReferenceError(`invalid index: ${index}`);
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    if (this.todos.length > 0) 
      return this.todos.shift();
  }

  pop() {
    if (this.todos.length > 0) 
      return this.todos.pop();
  }

  removeAt(index) {
    if (index in this.todos) {
      return this.todos.splice(index, 1);
    }
  }

  toString() {
    let result = `---- ${this.title} ----\n`;
    
    for (let todo of this.todos)
      result += todo.toString() + '\n';
    
    return result;
  }
  
  forEach(callback) {
    this.todos.forEach(callback);
  }
  
  filter(callback) {
    let result = new TodoList(this.title);
    
    for (let todo of this.todos)
      if (callback(todo))
        result.add(todo);
    
    return result;
  }
}

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
todo1.markDone();
todo5.markDone();

let doneTodos = list.filter(todo => todo.isDone());
console.log(doneTodos);