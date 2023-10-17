const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  })
  
  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });
  
  test('calling first returns the first todo in the array', () => {
    expect(list.first()).toBe(todo1);
  });
  
  test('calling last returns the last todo in the array', () => {
    expect(list.last()).toBe(todo3);
  });
  
  test('shift removes and returns the first todo in the list', () => {
    // let todo = list.shift();
    expect(list.shift()).toBe(todo1);
    expect(list.size()).toBe(2);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });
  
  test('pop removes and returns the last todo in the list', () => {
    expect(list.pop()).toBe(todo3);
    expect(list.size()).toBe(2);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });
  
  test('isDone returns true when all items in the list are done, false otherwise',
  () => {
    expect(list.isDone()).toBe(false);
    list.pop();
    list.pop();
    list.pop();
    expect(list.isDone()).toBe(true);
  });
  
  test('adding a non-Todo item to the list throws a TypeError', () => {
    expect(() => list.add({})).toThrow(TypeError);
  });
  
  test('itemAt returns the correct item, and throws ReferenceError for an out of bounds index', () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(() => list.itemAt(5)).toThrow(ReferenceError);
  });
  
  test('markDoneAt - also raises a ReferenceError', () => {
    expect(list.toArray()[0].isDone()).toBe(false);
    list.markDoneAt(0);
    expect(list.toArray()[0].isDone()).toBe(true);
    expect(() => list.markDoneAt(10)).toThrow(ReferenceError);
  });
  
  test('markUndoneAt - also raises a RefrenceError', () => {
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
    list.markUndoneAt(0);
    expect(todo1.isDone()).toBe(false);
  });
  
  test('markAllDone', () => {
    list.markAllDone();
    expect(list.isDone()).toBe(true);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });
  
  test('removeAt', () => {
    expect(list.removeAt(0)).toEqual([todo1]);
    expect(list.toArray()).toEqual([todo2, todo3]);
    expect(() => list.removeAt(100)).toThrow(ReferenceError);
  });
  
});