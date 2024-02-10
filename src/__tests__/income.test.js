import Income from '../models/income';

let income;

describe('Income salary', () => {
  beforeEach(() => {
    income = new Income();
  });

  test('integer', () => {
    income.setSalary(50000);
    expect(income.getSalary()).toBe(50000);
  });

  test('float', () => {
    income.setSalary(30000.17);
    expect(income.getSalary()).toBe(30000.17);
  });

  test('incorrect type', () => {
    expect(() => {
      income.setSalary(null);
    }).toThrow('Type Error');

    expect(() => {
      income.setSalary('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      income.setSalary(false);
    }).toThrow('Type Error');

    expect(() => {
      income.setSalary([]);
    }).toThrow('Type Error');

    expect(() => {
      income.setSalary({});
    }).toThrow('Type Error');
  });
});

describe('Income salary increase', () => {
  beforeEach(() => {
    income = new Income();
  });

  test('integer', () => {
    income.setSalaryIncrease(5);
    expect(income.getSalaryIncrease()).toBe(5);
  });

  test('float', () => {
    income.setSalaryIncrease(3.93);
    expect(income.getSalaryIncrease()).toBe(3.93);
  });

  test('incorrect type', () => {
    expect(() => {
      income.setSalaryIncrease(null);
    }).toThrow('Type Error');

    expect(() => {
      income.setSalaryIncrease('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      income.setSalaryIncrease(false);
    }).toThrow('Type Error');

    expect(() => {
      income.setSalaryIncrease([]);
    }).toThrow('Type Error');

    expect(() => {
      income.setSalaryIncrease({});
    }).toThrow('Type Error');
  });
});

describe('Income start date', () => {
  beforeEach(() => {
    income = new Income();
  });

  test('Test #1', () => {
    income.setStartDate(new Date('2025-12-31'));
    expect(income.getStartDate().getFullYear()).toBe(2025);
    expect(income.getStartDate().getMonth()).toBe(11);
    expect(income.getStartDate().getDate()).toBe(30);
  });

  test('Test #2', () => {
    income.setStartDate(new Date('2093-05-11'));
    expect(income.getStartDate().getFullYear()).toBe(2093);
    expect(income.getStartDate().getMonth()).toBe(4);
    expect(income.getStartDate().getDate()).toBe(10);
  });

  test('incorrect type', () => {
    expect(() => {
      income.setStartDate(1);
    }).toThrow('Type Error');

    expect(() => {
      income.setStartDate(3.4);
    }).toThrow('Type Error');

    expect(() => {
      income.setStartDate(null);
    }).toThrow('Type Error');

    expect(() => {
      income.setStartDate('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      income.setStartDate(false);
    }).toThrow('Type Error');

    expect(() => {
      income.setStartDate([]);
    }).toThrow('Type Error');

    expect(() => {
      income.setStartDate({});
    }).toThrow('Type Error');
  });
});

describe('Income end date', () => {
  beforeEach(() => {
    income = new Income();
  });

  test('Test #1', () => {
    income.setEndDate(new Date('2025-12-31'));
    expect(income.getEndDate().getFullYear()).toBe(2025);
    expect(income.getEndDate().getMonth()).toBe(11);
    expect(income.getEndDate().getDate()).toBe(30);
  });

  test('Test #2', () => {
    income.setEndDate(new Date('2093-05-11'));
    expect(income.getEndDate().getFullYear()).toBe(2093);
    expect(income.getEndDate().getMonth()).toBe(4);
    expect(income.getEndDate().getDate()).toBe(10);
  });

  test('incorrect type', () => {
    expect(() => {
      income.setEndDate(1);
    }).toThrow('Type Error');

    expect(() => {
      income.setEndDate(3.4);
    }).toThrow('Type Error');

    expect(() => {
      income.setEndDate(null);
    }).toThrow('Type Error');

    expect(() => {
      income.setEndDate('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      income.setEndDate(false);
    }).toThrow('Type Error');

    expect(() => {
      income.setEndDate([]);
    }).toThrow('Type Error');

    expect(() => {
      income.setEndDate({});
    }).toThrow('Type Error');
  });
});

describe('total earned', () => {
  beforeEach(() => {
    income = new Income();
  });

  test('test #1', () => {
    income.setSalary(50000);
    income.setSalaryIncrease(3);
    income.setStartDate(new Date('2024-1-1'));
    income.setEndDate(new Date('2034-11-22'));
    expect(income.totalEarned()).toBeCloseTo(633394.05, 1);
  });

  test('test #2', () => {
    income.setSalary(100000);
    income.setSalaryIncrease(4.32);
    income.setStartDate(new Date('2024-05-03'));
    income.setEndDate(new Date('2026-03-20'));
    expect(income.totalEarned()).toBeCloseTo(191744.44, 1);
  });

  test('nothing set', () => {
    expect(income.totalEarned()).toBe(0);
  });
});
