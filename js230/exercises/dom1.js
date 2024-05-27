function walk(node, callback) {
  callback(node);
  for (let child of node.childNodes) {
    walk(child, callback);
  }
}

let root = document.querySelector('html');
let count = 0;

walk(root, node => {
  count++;
});

console.log(count);