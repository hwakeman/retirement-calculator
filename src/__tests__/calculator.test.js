import Calculator from '../models/calculator';
import Income from '../models/income';
import Savings from '../models/savings';
import Debt from '../models/debt';

let calculator;
let income;
let savings;
let debt;

beforeAll(() => {
  calculator = new Calculator();
});

describe('Calculator age', () => {
  test('integer', () => {
    calculator.setAge(53);
    expect(calculator.getAge()).toBe(53);
  });

  test('float', () => {
    calculator.setAge(6.7);
    expect(calculator.getAge()).toBe(7);
  });

  test('incorrect type', () => {
    expect(() => {
      calculator.setAge(null);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setAge('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      calculator.setAge(false);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setAge([]);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setAge({});
    }).toThrow('Type Error');
  });
});

describe('Calculator predicted inflation', () => {
  test('integer', () => {
    calculator.setPredictedInflation(2);
    expect(calculator.getPredictedInflation()).toBe(2);
  });

  test('float', () => {
    calculator.setPredictedInflation(6.7);
    expect(calculator.getPredictedInflation()).toBe(6.7);
  });

  test('incorrect type', () => {
    expect(() => {
      calculator.setPredictedInflation(null);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setPredictedInflation('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      calculator.setPredictedInflation(false);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setPredictedInflation([]);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setPredictedInflation({});
    }).toThrow('Type Error');
  });
});

describe('Calculator lifestyle', () => {
  test('default value', () => {
    expect(calculator.getLifestyle()).toBe('moderate');
  });

  test('changed value', () => {
    calculator.setLifestyle('luxurious');
    expect(calculator.getLifestyle()).toBe('luxurious');
  });

  test('incorrect type', () => {
    expect(() => {
      calculator.setLifestyle(1);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setLifestyle(5.7);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setLifestyle(null);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setLifestyle(false);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setLifestyle([]);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setLifestyle({});
    }).toThrow('Type Error');
  });
});

describe('Calculator location', () => {
  test('test #1', () => {
    calculator.setLocation('New York');
    expect(calculator.getLocation()).toBe('New York');
  });

  test('test #2', () => {
    calculator.setLocation('Chicago');
    expect(calculator.getLocation()).toBe('Chicago');
  });

  test('incorrect type', () => {
    expect(() => {
      calculator.setLocation(1);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setLocation(5.7);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setLocation(null);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setLocation(false);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setLocation([]);
    }).toThrow('Type Error');

    expect(() => {
      calculator.setLocation({});
    }).toThrow('Type Error');
  });
});

describe('Calculator add to lists', () => {
  beforeEach(() => {
    calculator = new Calculator();
    income = new Income();
    savings = new Savings();
    debt = new Debt();
  });

  test('add to income', () => {
    income.setSalary(50000);
    calculator.addIncome(income);
    expect(calculator.getIncomes()[0].getSalary()).toBe(50000);
  });

  test('add to savings', () => {
    savings.setAmount(50000);
    calculator.addSavings(savings);
    expect(calculator.getSavings()[0].getAmount()).toBe(50000);
  });

  test('add to debts', () => {
    debt.setAmount(50000);
    calculator.addDebt(debt);
    expect(calculator.getDebts()[0].getAmount()).toBe(50000);
  });
});
