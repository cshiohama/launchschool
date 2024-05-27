document.addEventListener('DOMContentLoaded', () => {
  function populateStaff() {
    let select = document.querySelector('select');

    for (let staff of staffMembers) {
      let option = new Option(staff.name, staff.id);
      select.appendChild(option);
    }
  }

  let staffMembers;
  let request = new XMLHttpRequest();
  request.open('GET', '/api/staff_members');
  request.responseType = 'json';

  request.addEventListener('load', (event) => {
    staffMembers = request.response;
    populateStaff();
  })

  request.send();

  let submitButton = document.querySelector('#submit');

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let payload = {schedules: []};
    let schedules = document.getElementById('schedule').children;
    
    [...schedules].forEach((schedule) => {
      let staff_id = +schedule.querySelector('select').value;
      let date = schedule.querySelector('[name="date"]').value;
      let time = schedule.querySelector('[name="time"').value;

      let obj = {
        staff_id,
        date, 
        time
      }
      payload['schedules'].push(obj);

    })
      // submit payload here

    let request = new XMLHttpRequest();
    request.open('POST', '/api/schedules');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');


    request.addEventListener('load', (event) => {
      request = event.target;
      console.log(request.response)
    })
    
    // console.log(payload);
    // console.log(JSON.stringify(payload, null, 2))

    request.send(JSON.stringify(payload));
   
  })
  let addSchedulesButton = document.querySelector('#btnAdd');

  addSchedulesButton.addEventListener('click', (event) => {
    let fieldsetElement = document.querySelector("fieldset");
    let scheduleParent = fieldsetElement.parentNode;
    let newFieldset = fieldsetElement.cloneNode(true); // true copies over children, but not event listeners

    let counter = fieldsetElement.parentNode.children.length;
    let legendText = `Schedule ${counter + 1}`;
    
    newFieldset.querySelector('legend').textContent = legendText
    newFieldset.querySelector('[name="date"]').value = '';
    newFieldset.querySelector('[name="time"').value = '';

    scheduleParent.appendChild(newFieldset);

    
  })

})





