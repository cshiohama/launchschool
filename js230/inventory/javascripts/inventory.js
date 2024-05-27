document.addEventListener('DOMContentLoaded', () => {
  var inventory = {
    lastId: 0,
    collection: [],
    setDate() {
      var date = new Date();
      document.querySelector('#order_date').textContent = date.toUTCString();
    },
    cacheTemplate() {
      let template = document.querySelector('#template');
      this.template = Handlebars.compile(template.innerHTML);
      template.remove();
    },
    add() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);
      return item;
    },
    remove(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
        }
      });

      return found_item;
    },
    update(item) {
      let id = this.findID(item);
      item = this.get(id);

      let parent = document.querySelector(`input[value="${id}"]`).parentNode.parentNode;
      item.name = parent.querySelector("[name^=item_name]").value;
      item.stock_number = parent.querySelector('[name^=item_stock_number]').value;
      item.quantity = +parent.querySelector("[name^=item_quantity]").value;
    },
    newItem(e) {
      e.preventDefault();
      var item = this.add()
      document.querySelector('#inventory')
        .insertAdjacentHTML('beforeend', this.template({ id: item.id }));
    },
    findParent(e) {
      return e.target.parentNode.parentNode;
    },
    findID(item) {
      return +item.querySelector('input[type="hidden"]').value;
    },
    deleteItem(e) {
      e.preventDefault();
      let item = e.target.parentNode.parentNode;
      this.remove(this.findID(item));
      item.remove();
    },
    updateItem(e) {
      let item = this.findParent(e);
      this.update(item);

    },
    bindEvents() {
      document.querySelector('#collection').addEventListener('click', event => {
        event.preventDefault();
        console.log(JSON.stringify(this.collection, null, 2));
      });
      
      document.querySelector('#add_item').addEventListener('click', event => {
        this.newItem(event);
      });
      
      document.querySelector('#inventory').addEventListener('click', event => {
        if (event.target.classList.contains('delete')) {
          this.deleteItem(event);
        }
      })

      document.querySelector('#inventory').addEventListener('focusout', event => {
        if (event.target.tagName === 'INPUT') {
          this.updateItem(event);
        }
      });

    },
    init() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
  
  inventory.init();
})


