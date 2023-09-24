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

function createInvoice(services = {}) {
  return {
    total: function() {
      return this.phone + this.internet;
    },
    
    addPayment: function(payment) {
      this.payments.push(payment);     
    },
    
    addPayments: function(payments) {
      this.payments = this.payments.concat(payments);
    },
    
    paymentTotal: function() {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },
    
    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
    
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0