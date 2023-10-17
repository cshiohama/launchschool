function makeList() {
  let list = [];
  
  return function(arg) {
    if (arg === undefined) {
      if (list.length === 0)
        console.log('The list is empty');
      else {
        for (let todo of list)
          console.log(todo);
      }

    } else {
      if (list.includes(arg)) {
        list.splice(list.indexOf(arg), 1);
        console.log(`${arg} removed`);
      } else {
        list.push(arg);
        console.log(`${arg} added`);
      }
    }
  }
}

let list = makeList();
list();

list("make breakfast");
list("read book");

list();

list("make breakfast");

list();