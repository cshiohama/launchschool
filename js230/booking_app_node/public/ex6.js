document.addEventListener('DOMContentLoaded', async () => {
  function getRequest(path) {
    return new Promise(resolve => {
      let request = new XMLHttpRequest();
      request.open('GET', path);
      request.responseType = 'json';
      request.addEventListener('load', () => {
        resolve(request.response);
      })
      request.send();
    });
  }

  function toggleHidden(event) {
    let node = event.currentTarget.querySelector('ul');

    if (node.hasAttribute('hidden')) {
      node.removeAttribute('hidden');
    } else {
      node.setAttribute('hidden', true);
    }
  }

  let bookedDates = await getRequest('/api/bookings')
  let lists = document.getElementById('lists');
  let bookingUl = document.createElement('ul');
  lists.appendChild(bookingUl);

  for (let d of bookedDates) {
    let li = document.createElement('li');
    bookingUl.appendChild(li);
    li.textContent = d;

    li.addEventListener('click', toggleHidden);

    let bookings = await getRequest(`/api/bookings/${d}`);
    ul = document.createElement('ul');
    ul.setAttribute('hidden', true);
    li.appendChild(ul);

    for (let b of bookings) {
      let li = document.createElement('li');
      li.textContent = b.join(' | ');
      ul.appendChild(li);
    }
  }
});


  
  
  

   

  
  




