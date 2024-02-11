export default function incomeItem() {
  const container = document.createElement('div');
  container.classList.add('item');
  container.classList.add('income-item');

  const salaryLabel = document.createElement('label');
  salaryLabel.classList.add('salary-label');
  salaryLabel.textContent = 'Salary: ';
  const salaryInput = document.createElement('input');
  salaryInput.classList.add('salary-input');
  salaryInput.type = 'number';
  salaryLabel.appendChild(salaryInput);

  const salaryIncreaseLabel = document.createElement('label');
  salaryIncreaseLabel.classList.add('salary-increase-label');
  salaryIncreaseLabel.textContent = 'Salary Yearly Increase: ';
  const salaryIncreaseInput = document.createElement('input');
  salaryIncreaseInput.classList.add('salary-increase-input');
  salaryIncreaseInput.type = 'number';
  salaryIncreaseLabel.appendChild(salaryIncreaseInput);

  const endDateLabel = document.createElement('label');
  endDateLabel.classList.add('end-date-label');
  endDateLabel.textContent = 'End date: ';
  const endDateInput = document.createElement('input');
  endDateInput.classList.add('end-date-input');
  endDateInput.type = 'date';
  const today = new Date().toISOString().split('T')[0];
  endDateInput.min = today;
  endDateLabel.appendChild(endDateInput);

  container.appendChild(salaryLabel);
  container.appendChild(salaryIncreaseLabel);
  container.appendChild(endDateLabel);
  return container;
}
