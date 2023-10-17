function makeList() {
  return {
    todo: [],
    
    list() {
      if (this.todo.length === 0)
        console.log('This list is empty');
      else
        this.todo.forEach(item => console.log(item));
    },
    
    add(item) {
      this.todo.push(item);
      console.log(`${item} added`)
    },
    
    remove(item) {
      if (this.todo.includes(item)) {
        this.todo.splice(this.todo.indexOf(item), 1);
        console.log(`${item} removed`);
      }
    },
  }
}

let list = makeList();
list.add('peas');

list.list();

list.add('corn');

list.list();

list.remove('peas');

list.list();