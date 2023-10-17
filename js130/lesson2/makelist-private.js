function makeList() {
  let todo = [];
  
  return {
    list() {
      if (todo.length === 0)
        console.log('This list is empty');
      else
        todo.forEach(item => console.log(item));
    },
    
    add(item) {
      todo.push(item);
      console.log(`${item} added`)
    },
    
    remove(item) {
      if (todo.includes(item)) {
        todo.splice(todo.indexOf(item), 1);
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