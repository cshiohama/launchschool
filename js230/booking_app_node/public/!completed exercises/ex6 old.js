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
  
  function populateDictionary() {
    for (let s of schedules) {
      d[s.date] ? d[s.date].push(s) : d[s.date] = [s];
    }
  }

  function createDateList() {
    for (let date in d) {
      let li = document.createElement('li');
      li.textContent = date;
      ul.appendChild(li);
    }
  }

  function addDateListeners() {
    for (let li of ul.children) {
      li.addEventListener('click', handleDateListener);
    }
  }

  function getStaffName(staff_id) {
    for (let staff of staffs) {
      if (staff.id === staff_id) {
        return staff.name;
      }
    }

    return null;
  }

  function handleDateListener(event) {
    let ul = document.createElement('ul');
    event.currentTarget.appendChild(ul);
    
    for (let s of d[event.currentTarget.textContent]) {
      let str = `${getStaffName(s.staff_id)} | ${s.student_email} | ${s.time}`;
      let li = document.createElement('li');
      li.textContent = str;
      ul.appendChild(li);
    };

    event.currentTarget.removeEventListener('click', handleDateListener);
  }

  let d = {};
  let schedules = await getRequest('/api/schedules');
  schedules = schedules.filter(sched => sched.student_email !== null);
  let staffs = await getRequest('/api/staff_members');

  let lists = document.getElementById('lists');
  let ul = document.createElement('ul');
  lists.appendChild(ul);
  
  populateDictionary();
  createDateList();
  addDateListeners();
  
  // console.log(JSON.stringify(d, null, 2))
  // console.log(JSON.stringify(staffs, null, 2))

  console.log(staffs);
  console.log(getStaffName(1));
  console.log(getStaffName(2));
  console.log(getStaffName(3));
});


  
  
  

   

  
  




