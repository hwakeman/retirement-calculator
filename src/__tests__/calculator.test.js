import Calculator from '../models/calculator';

let calculator;

beforeAll(() => {
  calculator = new Calculator();
});

describe('Calculator predicted interest', () => {
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
