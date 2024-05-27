document.addEventListener('DOMContentLoaded', async () => {
  function get(path) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', path);
      request.responseType = 'json';
      request.addEventListener('load', () => {
        resolve(request.response);
      })
      request.send();
    });
  }

  function post(path, json) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('POST', path);
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      request.addEventListener('load', () => {
        resolve(request.response);
      });
      request.send(json);
    });
  }

  function postFormData(path, formdata) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('POST', path);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      request.addEventListener('load', () => {
        resolve(request.response);
      });
      request.send(formdata);
    });
  }

  function renderInfo(photo_index) {
    header.innerHTML = '';
    let photoInfoFilled = photoInfoFunc(photos[photo_index]);
    header.insertAdjacentHTML('beforeend', photoInfoFilled);
  }

  async function renderComments(photo_id) {
    let comments = await get(`/comments?photo_id=${photo_id}`);
    let filled = commentsFunc({comments});
    let anchor = document.querySelector('#comments ul');
    anchor.innerHTML = '';
    anchor.insertAdjacentHTML('beforeend', filled);
  }

  function prevSlide() {
    hidePhoto(currentPhoto);
    
    if (currentPhoto === 0) {
      currentPhoto = photos.length - 1;
    } else {
      currentPhoto--;
    }

    showPhoto(currentPhoto);
    renderInfo(currentPhoto);
    renderComments(currentPhoto + 1);
  }

  function nextSlide() {
    hidePhoto(currentPhoto);
    
    if (currentPhoto === photos.length - 1) {
      currentPhoto = 0;
    } else {
      currentPhoto++;
    }

    showPhoto(currentPhoto);
    renderInfo(currentPhoto);
    renderComments(currentPhoto + 1);
  }

  function hidePhoto(index) {
    slides.children[index].classList.remove('show');
    slides.children[index].classList.add('hide');
  }

  function showPhoto(index) {
    slides.children[index].classList.remove('hide');
    slides.children[index].classList.add('show');
  }

  async function likePhoto() {
    let json = JSON.stringify({ photo_id: currentPhoto + 1 });
    let result = await post('/photos/like', json);
    await getPhotos();
    renderInfo(currentPhoto);
  }

  async function favoritePhoto(photo_id) {
    let json = JSON.stringify({ photo_id: currentPhoto + 1 });
    let result = await post('/photos/favorite', json);
    await getPhotos();
    renderInfo(currentPhoto);
  }

  async function getPhotos() {
    photos = await get('/photos');
  }


  let currentPhoto = 0;
  let photos;
  await getPhotos();
  let slides = document.getElementById('slides');
  let header = document.querySelector('section header');

  // create photos template
  let photosTemplate = document.getElementById('photos');
  let photosFunc = Handlebars.compile(photosTemplate.innerHTML);
  photosTemplate.remove();

  // create photo_information template
  let photoInfoTemplate = document.getElementById('photo_information');
  let photoInfoFunc = Handlebars.compile(photoInfoTemplate.innerHTML);
  photoInfoTemplate.remove();

  // create comments template
  let commentsTemplate = document.getElementById('photo_comments');
  let commentsFunc = Handlebars.compile(commentsTemplate.innerHTML);
  commentsTemplate.remove();
  
  let commentPartial = document.getElementById('photo_comment');
  Handlebars.registerPartial('comment', commentPartial.innerHTML);
  
  // render photos
  let photosFilled = photosFunc({ photos });
  slides.insertAdjacentHTML('beforeend', photosFilled);
  
  // render info and comments for first photo
  renderInfo(0);
  renderComments(1);

  let prev = document.querySelector('.prev');
  prev.addEventListener('click', event => {
    event.preventDefault();
    prevSlide();
  });

  let next = document.querySelector('.next');
  next.addEventListener('click', event => {
    event.preventDefault();
    nextSlide();
  });

  document.addEventListener('click', event => {
    event.preventDefault();
    if ([...event.target.classList].includes('like')) {
      likePhoto();
    }
  });

  document.addEventListener('click', event => {
    event.preventDefault();
    if ([...event.target.classList].includes('favorite')) {
      favoritePhoto();
    }
  });

  document.querySelector('input[type="submit"]').addEventListener('click', async event => {
    event.preventDefault();
    let form = document.querySelector('form');
    let formdata = new URLSearchParams(new FormData(form));
    formdata.set('photo_id', currentPhoto + 1);
    let response = await postFormData('/comments/new', formdata);
    response = JSON.parse(response);
    
    renderComments(currentPhoto + 1);
    form.reset();


  });
});