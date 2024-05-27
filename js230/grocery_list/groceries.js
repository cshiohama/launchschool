document.addEventListener('DOMContentLoaded', () => {
  let name = document.getElementById('name');
  let quantity = document.getElementById('quantity');
  let list = document.getElementById('grocery-list');
  
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    let li = document.createElement('li');
    let amount = quantity.value || '1';
    li.textContent = amount + ' ' + name.value;
    list.appendChild(li);
  });
});
