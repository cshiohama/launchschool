document.addEventListener('DOMContentLoaded', () => {
  function removehighlights() {
    for (let element of highlighted) {
      element.classList.remove('highlight');
    }

    highlighted = [];
  }
  
  let article1 = document.getElementById('article-1');
  let article2 = document.getElementById('article-2');
  let article3 = document.getElementById('article-3');
  let article4 = document.getElementById('article-4');
  
  let highlighted = [];
  let links = document.querySelectorAll('a');
  console.log(links);
  let targets = [article1, article2, article3, article4];
  
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', event => {
      removehighlights();
      targets[i].classList.add('highlight');
      highlighted.push(targets[i]);
      event.stopPropagation();
    })
  }

  for (let link of targets) {
    link.addEventListener('click', event => {
      removehighlights();
      link.classList.add('highlight');
      highlighted.push(link);

      event.stopPropagation();
    })
  }

  document.addEventListener('click', event => {
    let main = document.querySelector('main');
    removehighlights();
    main.classList.add('highlight');
    highlighted.push(main);
  })

})