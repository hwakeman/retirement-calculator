export default class Calculator {
  constructor() {
    this.age = 0;
    this.expectedInflation = 0;
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
}
