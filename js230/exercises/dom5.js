document.addEventListener('DOMContentLoaded', () => {
  function colorGeneration(targetDepth, element = document.body, depth = 0) {
    if (depth === targetDepth && element !== document.body) {
      element.classList.add('generation-color');
      return;
    }
  
    for (let child of [...element.children]) {
      colorGeneration(targetDepth, child, depth + 1);
    }
  }
  
  colorGeneration(4);
});

