document.addEventListener('DOMContentLoaded', () => {
  let result = document.getElementById('result');
  let firstNumber = document.getElementById('first-number');
  let secondNumber = document.getElementById('second-number');
  let operator = document.getElementById('operator');
  let submit = document.querySelector('[type="submit"]')
  
  submit.addEventListener('click', event => {
    event.preventDefault();
    if (operator.value === '+') {
      result.textContent = +firstNumber.value + +secondNumber.value;
    } else if (operator.value === '-') {
      result.textContent = +firstNumber.value - +secondNumber.value;
    } else if (operator.value === '*') {
      result.textContent = +firstNumber.value * +secondNumber.value;
    } else if (operator.value === '/') {
      result.textContent = +firstNumber.value / +secondNumber.value;
    }
  });
});