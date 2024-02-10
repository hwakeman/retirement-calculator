import Debt from '../models/debt';

let debt;

beforeAll(() => {
  debt = new Debt();
});

describe('Debt amount', () => {
  test('integer', () => {
    debt.setAmount(200);
    expect(debt.getAmount()).toBe(200);
  });

  test('float', () => {
    debt.setAmount(30000.17);
    expect(debt.getAmount()).toBe(30000.17);
  });

  test('incorrect type', () => {
    expect(() => {
      debt.setAmount(null);
    }).toThrow('Type Error');

    expect(() => {
      debt.setAmount('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      debt.setAmount(false);
    }).toThrow('Type Error');

    expect(() => {
      debt.setAmount([]);
    }).toThrow('Type Error');

    expect(() => {
      debt.setAmount({});
    }).toThrow('Type Error');
  });
});

describe('Debt interest rate', () => {
  test('integer', () => {
    debt.setInterest(56);
    expect(debt.getInterest()).toBe(56);
  });

  test('float', () => {
    debt.setInterest(4.7);
    expect(debt.getInterest()).toBe(4.7);
  });

  test('incorrect type', () => {
    expect(() => {
      debt.setInterest(null);
    }).toThrow('Type Error');

    expect(() => {
      debt.setInterest('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      debt.setInterest(false);
    }).toThrow('Type Error');

    expect(() => {
      debt.setInterest([]);
    }).toThrow('Type Error');

    expect(() => {
      debt.setInterest({});
    }).toThrow('Type Error');
  });
});

describe('Debt monthly payment', () => {
  test('integer', () => {
    debt.setPayment(500);
    expect(debt.getPayment()).toBe(500);
  });

  test('float', () => {
    debt.setPayment(500.17);
    expect(debt.getPayment()).toBe(500.17);
  });

  test('incorrect type', () => {
    expect(() => {
      debt.setPayment(null);
    }).toThrow('Type Error');

    expect(() => {
      debt.setPayment('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      debt.setPayment(false);
    }).toThrow('Type Error');

    expect(() => {
      debt.setPayment([]);
    }).toThrow('Type Error');

    expect(() => {
      debt.setPayment({});
    }).toThrow('Type Error');
  });
});

describe('total paid with interest', () => {
  test('test #1', () => {
    debt.setAmount(1000);
    debt.setInterest(5);
    debt.setPayment(100);
    expect(debt.totalPaidWithInterest()).toBeCloseTo(1023.56);
  });

  test('test #2', () => {
    debt.setAmount(100000);
    debt.setInterest(4.32);
    debt.setPayment(560);
    expect(debt.totalPaidWithInterest()).toBeCloseTo(160451.14);
  });

  test('nothing set', () => {
    expect(debt.totalPaidWithInterest()).toBe(0);
  });
});
