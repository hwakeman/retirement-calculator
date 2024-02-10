export default class debt {
  constructor() {
    this.amount = 0;
    this.interestRate = 0;
    this.payment = 0;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Type Error');
    }
    this.amount = amount;
  }

  getInterest() {
    return this.interestRate;
  }

  setInterest(interestRate) {
    if (typeof interestRate !== 'number') {
      throw new TypeError('Type Error');
    }
    this.interestRate = interestRate;
  }

  getPayment() {
    return this.payment;
  }

  setPayment(payment) {
    if (typeof payment !== 'number') {
      throw new TypeError('Type Error');
    }
    this.payment = payment;
  }

  totalPaidWithInterest() {
    let totalPaid = 0;
    let balance = this.amount;
    const interest = this.interestRate / 100;
    const monthlyInterest = interest / 12;
    const monthlyPayment = this.payment;

    while (balance > 0) {
      balance += balance * monthlyInterest - monthlyPayment;
      totalPaid += monthlyPayment;
    }

    if (balance < 0) {
      totalPaid += balance;
    }

    return totalPaid;
  }
}
