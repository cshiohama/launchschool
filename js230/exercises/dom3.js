function domTreeTracer(id) {
  let result = [];
  let node = document.getElementById(id);

  while (node !== document.querySelector('body')) {
    result.push([...(node.parentNode.children)].map(node => node.nodeName));
    node = node.parentNode;
  }

  return result;
}

console.log(domTreeTracer(22));

// [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], 
//  ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]