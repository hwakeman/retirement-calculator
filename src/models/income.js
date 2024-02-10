export default class income {
  constructor() {
    this.salary = 0;
    this.salaryIncrease = 0;
    this.startDate = new Date();
    this.endDate = new Date();
  }

  setSalary(salary) {
    if (typeof salary !== 'number') {
      throw new TypeError('Type Error');
    }
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  setSalaryIncrease(salaryIncrease) {
    if (typeof salaryIncrease !== 'number') {
      throw new TypeError('Type Error');
    }
    this.salaryIncrease = salaryIncrease;
  }

  getSalaryIncrease() {
    return this.salaryIncrease;
  }

  setStartDate(startDate) {
    if (startDate instanceof Date) {
      this.startDate = startDate;
    } else {
      throw new TypeError('Type Error');
    }
  }

  getStartDate() {
    return this.startDate;
  }

  setEndDate(endDate) {
    if (endDate instanceof Date) {
      this.endDate = endDate;
    } else {
      throw new TypeError('Type Error');
    }
  }

  getEndDate() {
    return this.endDate;
  }

  totalEarned() {
    let totalSalary = 0;

    let years =
      this.getEndDate().getFullYear() - this.getStartDate().getFullYear();
    let endDateEarlier = false;
    if (
      this.getEndDate().getMonth() < this.getStartDate().getMonth() ||
      (this.getEndDate().getMonth() === this.getStartDate().getMonth() &&
        this.getEndDate().getDate() < this.getStartDate().getDate())
    ) {
      endDateEarlier = true;
    }
    if (endDateEarlier) {
      years -= 1;
    }

    for (let i = 0; i < years; i += 1) {
      totalSalary += this.salary * (1 + this.salaryIncrease / 100) ** i;
      console.log(totalSalary);
    }

    // Last year isn't a full year, so we need to calculate the fraction of the year
    const daysAway =
      parseInt(
        (this.getEndDate() - this.getStartDate()) / (1000 * 60 * 60 * 24),
        10,
      ) % 365;

    totalSalary +=
      (this.getSalary() *
        (1 + this.getSalaryIncrease() / 100) ** years *
        daysAway) /
      365;

    console.log(
      (this.getSalary() *
        (1 + this.getSalaryIncrease() / 100) ** years *
        daysAway) /
        365,
    );

    return totalSalary;
  }
}
