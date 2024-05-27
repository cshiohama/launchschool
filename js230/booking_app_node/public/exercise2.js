const DOMAIN = 'http://localhost:3000';

function getRequest(path) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', DOMAIN + path);
    request.timeout = 5000;
    request.responseType = 'json';

    request.addEventListener('load', () => {
      resolve(request.response);
    })

    request.send();
  });
}

document.addEventListener('DOMContentLoaded', async event => {
  let span = document.createElement('span');
  document.body.appendChild(span);
  let ul = document.createElement('ul');
  document.body.appendChild(ul);

  let schedules = await getRequest('/api/schedules')
  
  let d = {};
  
  for (let s of schedules) {
    let id = s.staff_id;
    d[`staff ${id}`] ? d[`staff ${id}`]++ : d[`staff ${id}`] = 1;
  }

  span.textContent = JSON.stringify(Object.entries(d));
})



