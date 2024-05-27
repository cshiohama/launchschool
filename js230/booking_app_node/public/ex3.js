document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    let request = new XMLHttpRequest();
    let data = new FormData(form);
    request.open('POST', '/api/staff_members');
    request.addEventListener('load', () => {
      switch (request.status) {
        case 201:
          // let data = JSON.parse(request.response);
          alert('Employee added.');
          break;
        case 400:
          alert(request.responseText);
          break;
        
      }
    })

    request.send(data);
  })
});