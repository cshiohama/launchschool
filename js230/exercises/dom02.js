function walk(node, callback) {
  callback(node);
  for (let child of node.childNodes) {
    walk(child, callback);
  }
}

function childNodes(id) {
  let parent = document.getElementById(id);
  let direct = parent.childNodes.length;
  let indirect = 0;

  walk(parent, (node) => {
    if (node.parentNode !== parent && node !== parent)
      indirect++;
  });

  return [direct, indirect];
}

for (let i = 1; i <= 10; i++) {
  let [direct, indirect] = childNodes(i);
  console.log(`${i} ${direct} ${indirect}`)
}