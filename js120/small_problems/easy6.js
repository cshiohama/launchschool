class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  info() {
    return `${this.make} ${this.model}`;
  }
  
  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle{
  constructor(make, model) {
    super(make, model);
    this.wheels = 4;
  }
}

class Motorcycle extends Vehicle{
  constructor(make, model) {
    super(make, model);
    this.wheels = 2;
  }
}

class Truck extends Vehicle{
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
    this.wheels = 6;
  }
}