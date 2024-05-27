const DOMAIN = 'http://localhost:3000';

function getRequest(path) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', DOMAIN + path);
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
    
  // let [staff, students, schedules, bookings] = await Promise.allSettled([
  //   getRequest('/api/staff_members'),
  //   getRequest('/api/students'),
  //   getRequest('/api/schedules'),
  //   getRequest('/api/bookings'),
  // ])

  let staff = await getRequest('/api/staff_members')
  let staffNames = staff.map(staff => staff.name)
  
  let ul = document.createElement('ul');
  document.body.appendChild(ul);

  for (let s of staffNames) {
    let li = document.createElement('li');
    li.textContent = s;
    ul.appendChild(li);
  }

  span.textContent = JSON.stringify(staff);
  // console.log({ staff, students, schedules, bookings });
})



