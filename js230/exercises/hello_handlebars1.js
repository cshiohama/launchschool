document.addEventListener('DOMContentLoaded', () => {
  // compile template
  let template = document.querySelector('#template');
  let templateFunc = Handlebars.compile(template.innerHTML); // now a function

  // data object
  let post = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  };

  // insert filled template into dom
  let filled = templateFunc(post); // now raw html stored in a variable
  console.log(filled) 
  document.querySelector('#anchor').insertAdjacentHTML('beforeend', filled); // this can vary
});