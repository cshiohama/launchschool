let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
  
  hi: function() {console.log(this.firstName + this.lastName)},
};

person.hi();