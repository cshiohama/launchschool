function arrayToNodes(nodes) {
  let node = document.createElement(nodes[0])

  for (let child of nodes[1]) {
    node.appendChild(arrayToNodes(child));
  }

  return node;
}

const nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

document.body = arrayToNodes(nodes);