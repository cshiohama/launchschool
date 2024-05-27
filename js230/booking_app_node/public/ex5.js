document.addEventListener('DOMContentLoaded', async () => {
  function getStaffs() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', '/api/staff_members');
      request.responseType = 'json';
      request.addEventListener('load', event => {
        resolve(request.response);
      })
      request.send();
    })
  }

  function getSchedules() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open('GET', '/api/schedules');
      request.responseType = 'json';
      request.addEventListener('load', () => {
        resolve(request.response);
      })
      request.send();
    })
  }

  function populateSchedules() {
    for (let schedule of schedules) {
      let staff_id = schedule.staff_id;
      let staff_name = staffs.filter(staff => staff.id === staff_id)[0].name;
      let optionValue = staff_name + ' | ' + schedule.date + ' | ' + schedule.time;
      let option = new Option(optionValue, schedule.id);
      dropdown.appendChild(option);
    }
  }
  
  function bookSchedule() {
    let schedule_id = dropdown.value;
    let email = document.getElementById('email').value;
    let payload = JSON.stringify({ id: +schedule_id, student_email: email })

    let request = new XMLHttpRequest();
    request.open('POST', '/api/bookings');
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', () => {
      switch (request.status) {
        case 204:
          alert('Booked');
          break;
        case 404:
          alert(request.responseText);
          newstudent.removeAttribute('hidden');
          bookingSequence.value = request.responseText.split(': ')[1];
          let newEmail = document.getElementById('newEmail');
          newEmail.value = email;
      }
    })

    request.send(payload);
  }

  let bookingSubmit = document.getElementById('bookingSubmit');
  let bookingSequence = document.getElementById('bookingSequence');
  let dropdown = document.getElementById('schedules');
  let newstudent = document.getElementById('newstudent');
  let scheduleFormSubmit = document.getElementById('scheduleFormSubmit');
  scheduleFormSubmit.addEventListener('click', event => {
    event.preventDefault();
    bookSchedule();
  })

  bookingSubmit.addEventListener('click', event => {
    let payload = JSON.stringify({
      email: document.getElementById('newEmail').value,
      name: document.getElementById('newName').value,
      booking_sequence: bookingSequence.value
    });

    let request = new XMLHttpRequest();
    request.open('POST', '/api/students');
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', () => {
      if (request.status === 201) {
        alert('New student added');
        bookSchedule();
      } else {
        alert(request.responseText);
      }
    })

    request.send(payload);
  })


  //---------------------DELETE------------------------------
  let toggle = document.getElementById('toggle');
  toggle.addEventListener('click', () => {
    newstudent.removeAttribute('hidden');
  })
  //---------------------DELETE------------------------------

  let staffs = await getStaffs();
  let schedules = await getSchedules();
  schedules = schedules.filter(schedule => schedule.student_email === null);
  populateSchedules();
  console.log(schedules);
});


  
  
  

   

  
  




