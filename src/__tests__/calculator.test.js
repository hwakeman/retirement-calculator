import Calculator from '../models/calculator';

let calculator;

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
