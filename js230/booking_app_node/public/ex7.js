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

  function cancelSchedule(event) {
    let request = new XMLHttpRequest();
    request.open('DELETE', `/api/schedules/${schedule.value}`);
    request.addEventListener('load', () => {
      if (request.status === 204) {
        populateSchedule();
        alert('Schedule deleted');
      } else {
        alert(request.responseText);
      }
    });
    request.send();
  }

  function cancelBooking(event) {
    let request = new XMLHttpRequest();
    request.open('PUT', `/api/bookings/${booking.value}`);
    request.addEventListener('load', () => {
      if (request.status === 204) {
        populateBookings();
        alert('Booking deleted');
      } else {
        alert(request.responseText);
      }
    });

    request.send();
  }

  async function populateSchedule() {
    while (schedule.children.length) {
      schedule.children[0].remove();
    }
    
    let schedules = await getRequest('/api/schedules');
    for (let s of schedules) {
      let str = `id:${s.id} | staff_id:${s.staff_id} | date:${s.date} | time:${s.time}`;
      schedule.appendChild(new Option(str, s.id));
    }
  }

  async function populateBookings() {
    while (booking.children.length) {
      booking.children[0].remove();
    }
    
    let schedules = await getRequest('/api/schedules');
    let bookings = schedules.filter(s => s.student_email !== null);

    for (let b of bookings) {
      let str = `id:${b.id} | staff_id:${b.staff_id} email:${b.student_email} | date:${b.date} | time:${b.time}`
      booking.appendChild(new Option(str, b.id));
    }
  
  }

  let scheduleButton = document.getElementById('scheduleButton');
  let bookingButton = document.getElementById('bookingButton');
  let schedule = document.getElementById('schedule');
  let booking = document.getElementById('booking');
  
  bookingButton.addEventListener('click', cancelBooking);
  scheduleButton.addEventListener('click', cancelSchedule);
  
  populateSchedule();
  populateBookings();
});
