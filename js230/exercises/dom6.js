function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if (!node1 || !node2 || node1.contains(node2) || node2.contains(node1)) return;

  let tempNode = document.createElement('div');

  node1.replaceWith(tempNode);


  
}


function nodeSwap(id1, id2) {
  const node1 = document.getElementById(id1);
  const node2 = document.getElementById(id2);

  // return If either node is not found in the DOM, or both nodes don't 
  // share the same parent
  if (!node1 || !node2 || node1.parentNode !== node2.parentNode) return;

  // Temp node to keep track of positions
  const tempNode = document.createElement('div');

  // `node1` still points to the original node extracted on line 2 of this 
  // function.However, on the DOM it got replaced with `tempNode`
  node1.replaceWith(tempNode);
  node2.replaceWith(node1);
  tempNode.replaceWith(node2);

  return true;
}