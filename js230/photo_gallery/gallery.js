document.addEventListener('DOMContentLoaded', () => {
  let photo = document.getElementById('photo');
  let links = document.querySelectorAll('li img');
  links[0].classList.add('active');
  
  for (let link of links) {
    link.addEventListener('click', event => {
      document.querySelector('.active').classList.remove('active');
      event.target.classList.add('active');
      let currentPhoto = event.target.getAttribute('src');
      photo.setAttribute('src', currentPhoto);    
    });
  }
});