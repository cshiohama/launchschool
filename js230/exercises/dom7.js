function nodesToArr(node = document.body) {
  let children = [];

  for (let child of [...node.children]) {
    children.push(nodesToArr(child));
  }

  return [node.nodeName, children];
}

JSON.stringify(nodesToArr());