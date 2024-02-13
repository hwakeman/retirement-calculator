export default class calculator {
  constructor() {
    this.age = 0;
    this.ageToLiveTo = 0;
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

  getAgeToLiveTo() {
    return this.ageToLiveTo;
  }

  setAgeToLiveTo(age) {
    if (typeof age !== 'number') {
      throw new TypeError('Type Error');
    }
    this.ageToLiveTo = Math.round(age);
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
    this.lifestyle = lifestyle.toLowerCase();
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

  getInflationAdjustedMoneyValue(yearsInTheFuture) {
    let currRate = 1;
    for (let i = 0; i < yearsInTheFuture; i += 1) {
      currRate *= 1 + this.getPredictedInflation() / 100;
    }
    return currRate;
  }

  getAverageMoneyValue(yearsInTheFutureStart, yearsInTheFutureEnd) {
    let total = 0;
    for (let i = yearsInTheFutureStart; i <= yearsInTheFutureEnd; i += 1) {
      total += this.getInflationAdjustedMoneyValue(i);
    }
    return total / (yearsInTheFutureEnd - yearsInTheFutureStart);
  }

  totalIncome() {
    let total = 0;
    const incomes = this.getIncomes();
    for (let i = 0; i < incomes.length; i += 1) {
      total += incomes[i].totalEarned();
    }
    return total;
  }

  totalDebt() {
    let total = 0;
    const debts = this.getDebts();
    for (let i = 0; i < debts.length; i += 1) {
      total += debts[i].totalPaidWithInterest();
    }
    return total;
  }

  totalSavedSoFar(yearsInTheFuture) {
    let total = 0;
    const savings = this.getSavings();
    for (let i = 0; i < savings.length; i += 1) {
      total += savings[i].getFutureValue(yearsInTheFuture);
    }
    return total;
  }

  totalNeededToLiveInRetirement(yearsInTheFuture) {
    const genericMoneyNeededToLive = 40000;
    const yearsLeft = this.getAgeToLiveTo() - this.getAge() + yearsInTheFuture;
    const averageMoneyValueInRetirement = this.getAverageMoneyValue(
      yearsInTheFuture,
      this.getAgeToLiveTo(),
    );
    const lifestyleFactor = this.getLifestyleMultiplyFactor(
      this.getLifestyle(),
    );
    return (
      genericMoneyNeededToLive *
      yearsLeft *
      averageMoneyValueInRetirement *
      lifestyleFactor
    );
  }

  moneyNeededToRetire(yearsInTheFuture) {
    console.log(this.totalIncome());
    console.log(this.totalDebt());
    console.log(this.totalSavedSoFar());
    console.log(this.totalNeededToLiveInRetirement(yearsInTheFuture));
    return (
      this.totalIncome() -
      this.totalDebt() +
      this.totalSavedSoFar(yearsInTheFuture) -
      this.totalNeededToLiveInRetirement(yearsInTheFuture)
    );
  }

  getLifestyleMultiplyFactor() {
    const lifestyleFactors = {
      barebones: 0.5,
      frugal: 0.75,
      moderate: 1,
      comfortable: 1.25,
      luxurious: 1.5,
    };
    return lifestyleFactors[this.getLifestyle()];
  }
}
