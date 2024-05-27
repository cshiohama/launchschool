document.addEventListener('DOMContentLoaded', () => {

  const callback = ({target, currentTarget}) => {
    alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  };
  
  function delegateEvent(parentElement, selector, eventType, callback) {

    if (!parentElement || !(parentElement instanceof Element)) {
      return undefined
    }

    parentElement.addEventListener(eventType, (event) => {
      let node = document.querySelectorAll(selector);
      node.forEach((ele) => {
        if (ele === event.target  
            && event.target !== parentElement) {
              callback(event);
            }
      })
    })
    return true
  }

    // Possible elements for use with the scenarios
  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main h1');
  const element3 = document.querySelector('main');

})

