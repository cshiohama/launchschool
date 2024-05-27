document.addEventListener('DOMContentLoaded', async () => {
  function getRequest(path) {
    return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.open('GET', path);
      request.responseType = 'json';
      request.addEventListener('load', event => {
        resolve(request.response);
      });
  
      request.send();
    })
  }
   
  let staffs = await getRequest('/api/staff_members');
 
  for (let staff of staffs) {
    let count = await getRequest(`/api/schedules/${staff.id}`);
    console.log(`Staff ${staff.id}: ${count.length} schedules`);
  }
    
  // let promises = staffs.map(async staff => {
  //   let schedules = await getRequest(`/api/schedules/${staff.id}`)
  //   return `Staff ${staff.id} has ${schedules.length} schedules.`
  // })

  // Promise.all(promises).then(value => {
  //   value.forEach(val => {
  //     let div = document.createElement('div');
  //     div.textContent = val;
  //     document.body.appendChild(div);
  //   })
  // });


});

