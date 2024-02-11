import Savings from '../models/savings';

let savings;

describe('Savings amount', () => {
  beforeEach(() => {
    savings = new Savings();
  });

  test('integer', () => {
    savings.setAmount(50000);
    expect(savings.getAmount()).toBe(50000);
  });

  test('float', () => {
    savings.setAmount(30918);
    expect(savings.getAmount()).toBe(30918);
  });

  test('incorrect type', () => {
    expect(() => {
      savings.setAmount(null);
    }).toThrow('Type Error');

    expect(() => {
      savings.setAmount('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      savings.setAmount(false);
    }).toThrow('Type Error');

    expect(() => {
      savings.setAmount([]);
    }).toThrow('Type Error');

    expect(() => {
      savings.setAmount({});
    }).toThrow('Type Error');
  });
});

describe('Savings expected return', () => {
  beforeEach(() => {
    savings = new Savings();
  });

  test('integer', () => {
    savings.setExpectedReturn(5);
    expect(savings.getExpectedReturn()).toBe(5);
  });

  test('float', () => {
    savings.setExpectedReturn(12.7);
    expect(savings.getExpectedReturn()).toBe(12.7);
  });

  test('incorrect type', () => {
    expect(() => {
      savings.setExpectedReturn(null);
    }).toThrow('Type Error');

    expect(() => {
      savings.setExpectedReturn('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      savings.setExpectedReturn(false);
    }).toThrow('Type Error');

    expect(() => {
      savings.setExpectedReturn([]);
    }).toThrow('Type Error');

    expect(() => {
      savings.setExpectedReturn({});
    }).toThrow('Type Error');
  });
});

describe('Savings tax advantaged', () => {
  beforeEach(() => {
    savings = new Savings();
  });

  test('true', () => {
    savings.setTaxAdvantaged(true);
    expect(savings.getTaxAdvantaged()).toBeTruthy();
  });

  test('false', () => {
    savings.setTaxAdvantaged(false);
    expect(savings.getTaxAdvantaged()).toBeFalsy();
  });

  test('incorrect type', () => {
    expect(() => {
      savings.setAmount(null);
    }).toThrow('Type Error');

    expect(() => {
      savings.setAmount('incorrect type');
    }).toThrow('Type Error');

    expect(() => {
      savings.setAmount(false);
    }).toThrow('Type Error');

    expect(() => {
      savings.setAmount([]);
    }).toThrow('Type Error');

    expect(() => {
      savings.setAmount({});
    }).toThrow('Type Error');
  });
});
