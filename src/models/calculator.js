export default class Calculator {
  constructor() {
    this.age = 0;
    this.expectedInflation = 0;
    this.lifestyle = 'moderate';
    this.incomeList = [];
    this.savingsList = [];
    this.debtList = [];
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    if (typeof age !== 'number') {
      throw new TypeError('Type Error');
    }
    this.age = Math.round(age);
  }

  getPredictedInflation() {
    return this.expectedInflation;
  }

  setPredictedInflation(expectedInflation) {
    if (typeof expectedInflation !== 'number') {
      throw new TypeError('Type Error');
    }
    this.expectedInflation = expectedInflation;
  }

  getLifestyle() {
    return this.lifestyle;
  }

  setLifestyle(lifestyle) {
    if (typeof lifestyle !== 'string') {
      throw new TypeError('Type Error');
    }
    this.lifestyle = lifestyle;
  }

  getLocation() {
    return this.location;
  }

  setLocation(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Type Error');
    }
    this.location = location;
  }

  addIncome(income) {
    this.incomeList.push(income);
  }

  getIncomes() {
    return this.incomeList;
  }

  addSavings(savings) {
    this.savingsList.push(savings);
  }

  getSavings() {
    return this.savingsList;
  }

  addDebt(debt) {
    this.debtList.push(debt);
  }

  getDebts() {
    return this.debtList;
  }
}
