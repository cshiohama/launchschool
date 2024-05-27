function sliceTree(nodeId, targetId) {
  let node = document.getElementById(nodeId);
  let target = document.getElementById(targetId);
  
  if (!node || !target) return undefined;
  if (node === target) return node.nodeName;

  for (let child of node.children) {
    let result = sliceTree(child.id, target.id);
    if (result !== undefined) {
      return [node.nodeName].concat(result);
    }
  }

  return undefined;
}

console.log(sliceTree(1, 22));
// ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]

