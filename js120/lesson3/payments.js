function createPayment(services = {}) {
  return {
    total: function() {
      return this.amount ? this.amount : this.phone + this.internet;
    },
    
    phone: services.phone ? services.phone : 0,
    internet: services.internet ? services.internet : 0,
    amount: services.amount ? services.amount : 0,
  }
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000