import Calculator from '../../models/calculator.js';
import Income from '../../models/income.js';
import Savings from '../../models/savings.js';
import Debt from '../../models/debt.js';

export default function results() {
  const container = document.createElement('div');
  container.classList.add('results');

  const age = parseInt(document.getElementsByClassName('age-input')[0].value);
  const ageToLiveTo = parseInt(
    document.getElementsByClassName('age-to-live-to-input')[0].value,
  );
  const expectedInflationRate = parseInt(
    document.getElementsByClassName('expected-inflation-input')[0].value,
  );
  const lifestyle = document.getElementsByClassName('lifestyle-input')[0].value;
  const location = document.getElementsByClassName('location-input')[0].value;

  const incomes = document.getElementsByClassName('income-items')[0].children;
  const savings = document.getElementsByClassName('savings-items')[0].children;
  const debts = document.getElementsByClassName('debts-items')[0].children;

  const calculator = new Calculator();
  calculator.setAge(age);
  calculator.setAgeToLiveTo(ageToLiveTo);
  calculator.setPredictedInflation(expectedInflationRate);
  calculator.setLifestyle(lifestyle);
  calculator.setLocation(location);

  for (let i = 0; i < incomes.length; i += 1) {
    const income = new Income();
    income.setSalary(
      parseFloat(incomes[i].getElementsByClassName('salary-input')[0].value),
    );
    income.setSalaryIncrease(
      parseFloat(
        incomes[i].getElementsByClassName('salary-increase-input')[0].value,
      ),
    );
    income.setEndDate(
      new Date(incomes[i].getElementsByClassName('end-date-input')[0].value),
    );
    calculator.addIncome(income);
  }

  for (let i = 0; i < savings.length; i += 1) {
    const saving = new Savings();
    saving.setAmount(
      parseFloat(savings[i].getElementsByClassName('amount-input')[0].value),
    );
    saving.setMonthlyContribution(
      parseFloat(
        savings[i].getElementsByClassName('monthly-contribution-input')[0]
          .value,
      ),
    );
    saving.setExpectedReturn(
      parseFloat(
        savings[i].getElementsByClassName('expected-return-input')[0].value,
      ),
    );
    const taxAdvantagedInput = savings[i].getElementsByClassName(
      'expected-return-input',
    )[0].value;
    const taxAdvantagedBool = taxAdvantagedInput === 'Yes';
    saving.setTaxAdvantaged(taxAdvantagedBool);

    calculator.addSavings(saving);
  }

  for (let i = 0; i < debts.length; i += 1) {
    const debt = new Debt();
    debt.setAmount(
      parseFloat(debts[i].getElementsByClassName('amount-input')[0].value),
    );
    debt.setInterest(
      parseFloat(
        debts[i].getElementsByClassName('interest-rate-input')[0].value,
      ),
    );
    debt.setPayment(
      parseFloat(
        debts[i].getElementsByClassName('monthly-payment-input')[0].value,
      ),
    );
    calculator.addDebt(debt);
  }

  let retirementAge = null;
  for (let currAge = age; currAge < 150; currAge += 1) {
    if (calculator.moneyNeededToRetire(currAge - age) >= 0) {
      retirementAge = currAge;
      break;
    }
  }

  container.textContent = `You can retire at age ${retirementAge}!`;
  if (typeof retirementAge !== 'number') {
    container.textContent = 'You will never be able to retire ):';
  }

  return container;
}
