export default class savings {
  constructor() {
    this.amount = 0;
    this.monthlyContribution = 0;
    this.expectedReturn = 0;
    this.taxAdvantaged = false;
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

  getMonthlyContribution() {
    return this.monthlyContribution;
  }

  setMonthlyContribution(monthlyContribution) {
    if (typeof monthlyContribution !== 'number') {
      throw new TypeError('Type Error');
    }
    this.monthlyContribution = monthlyContribution;
  }

  getExpectedReturn() {
    return this.expectedReturn;
  }

  setExpectedReturn(expectedReturn) {
    if (typeof expectedReturn !== 'number') {
      throw new TypeError('Type Error');
    }
    this.expectedReturn = expectedReturn;
  }

  getTaxAdvantaged() {
    return this.taxAdvantaged;
  }

  setTaxAdvantaged(taxAdvantaged) {
    if (typeof taxAdvantaged !== 'boolean') {
      throw new TypeError('Type Error');
    }
    this.taxAdvantaged = taxAdvantaged;
  }

  getFutureValue(yearsInTheFuture) {
    let totalAccrued = this.getAmount();
    for (let i = 0; i < yearsInTheFuture; i += 1) {
      const averageInAccount = totalAccrued + this.getMonthlyContribution() * 6;
      totalAccrued += averageInAccount * (1 + this.getExpectedReturn() / 100);
      totalAccrued += this.getMonthlyContribution() * 12;
    }
    if (!this.getTaxAdvantaged()) {
      totalAccrued -= 0.85 * (totalAccrued - this.getAmount());
    }
    return totalAccrued;
  }
}
