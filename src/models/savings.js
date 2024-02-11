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
}
