import Income from '../../models/income.js';
import Savings from '../../models/savings.js';
import Debt from '../../models/debt.js';

export default function results() {
  const container = document.createElement('div');
  container.classList.add('results');

  const age = document.getElementsByClassName('age-input')[0].value;
  const expectedInflationRate = document.getElementsByClassName(
    'expected-inflation-input',
  )[0].value;
  const lifestyle = document.getElementsByClassName('lifestyle-input')[0].value;
  const location = document.getElementsByClassName('location-input')[0].value;

  const incomes = document.getElementsByClassName('income-items')[0].children;
  const savings = document.getElementsByClassName('savings-items')[0].children;
  const debts = document.getElementsByClassName('debts-items')[0].children;

  const incomeList = [];
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
    console.log(income);
    incomeList.push(income);
  }

  return container;
}
