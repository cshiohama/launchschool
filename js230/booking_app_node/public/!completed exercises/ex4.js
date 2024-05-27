document.addEventListener('DOMContentLoaded', () => {
  function addSchedule(n) {
    let div = document.createElement('div');
    let fieldset = document.createElement('fieldset');
    let legend = document.createElement('legend');
    legend.textContent = `Schedule ${n}`;
    let name = document.createElement('select');
    name.setAttribute('name', 'staff_id');
    
    for (let staff of staffs) {
      let option = document.createElement('option');
      option.setAttribute('value', staff.id);
      option.textContent = staff.name;
      name.appendChild(option);
    }
    
    let date = document.createElement('input');
    date.setAttribute('type', 'text');
    date.setAttribute('name', `date`);
    date.setAttribute('placeholder', 'mm-dd-yy');

    let time = document.createElement('input');
    time.setAttribute('type', 'text');
    time.setAttribute('name', `time`);
    time.setAttribute('placeholder', 'hh:mm');

    let nameText = document.createTextNode('Name: ');
    let dateText = document.createTextNode('Date: ');
    let timeText = document.createTextNode('Time: ');
    
    div.appendChild(fieldset);
    fieldset.appendChild(legend);
    fieldset.appendChild(nameText);
    fieldset.appendChild(name);
    fieldset.appendChild(document.createElement('br'));
    fieldset.appendChild(dateText);
    fieldset.appendChild(date);
    fieldset.appendChild(document.createElement('br'));
    fieldset.appendChild(timeText);
    fieldset.appendChild(time);
    
    document.getElementById('schedules').appendChild(div);
  }
  
  // Get list of current staff
  let form = document.querySelector('form');
  let staffs;

  (() => {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/api/staff_members');
    request.responseType = 'json';
    request.addEventListener('load', event => {
      staffs = request.response;
    })
    request.send();
  })();
    
  // Event listeners
  let n = 1;

  let addButton = document.getElementById('btnAdd');
  addButton.addEventListener('click', event => {
    event.preventDefault();
    addSchedule(n++);
  });
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    const json = JSON.stringify(getFormData());
    const request = new XMLHttpRequest();

    request.open('POST', '/api/schedules');
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', event => {
        if (request.status === 201) form.reset();
        alert(request.responseText);
    });

    request.send(json);
 });

  // Get form data
  function getFormData() {
    let schedules = document.getElementById('schedules').children;
    let formData = [];
    
    for (let schedule of schedules) {
      schedule = schedule.firstChild;
      let staff_id = +schedule.querySelector('[name="staff_id"]').value;
      let date = schedule.querySelector('[name="date"]').value;
      let time = schedule.querySelector('[name="time"]').value;

      formData.push({ staff_id, date, time });
    }

    return { schedules: formData };
  }
});




