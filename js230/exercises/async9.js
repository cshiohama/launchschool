// document.addEventListener('DOMContentLoaded', () => {
  let tracker = {
    events: [],
    elementsArray: [],
    elements: function() {
      return this.elementsArray.slice();
    },
    list: function() {
      return this.events.slice();
    }, 
    clear: function () {
      this.events = [];
      return 0;
    },
    eventExists: function (event) {
      for (let ele of this.events) {
        if (event.type === ele.type && event.target === ele.target) {
          return true;
        }
      }

      return false;
    }, 
    addEventToList: function(event) {
      if (!this.eventExists(event)) {
        this.events.push(event);
        this.elementsArray.push(event.currentTarget);
      }
    }
  }

  function track(callback) {
    return function (e) {
      if (e.currentTarget === e.target) {
        tracker.addEventToList(e);
        callback(e);
      }
    }
  }

  let divRed = document.getElementById('red');
  let divBlue = document.getElementById('blue');
  let divOrange = document.getElementById('orange')
  let divGreen = document.getElementById('green');

  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));
  
  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));
  
  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));
  
  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));
// })