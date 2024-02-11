export default function savingsItem() {
  const container = document.createElement('div');
  container.classList.add('item');
  container.classList.add('savings-item');

  const amountLabel = document.createElement('label');
  amountLabel.classList.add('amount-label');
  amountLabel.textContent = 'Amount: ';
  const amountInput = document.createElement('input');
  amountInput.classList.add('amount-input');
  amountInput.type = 'number';
  amountLabel.appendChild(amountInput);

  const monthlyContributionLabel = document.createElement('label');
  monthlyContributionLabel.classList.add('monthly-contribution-label');
  monthlyContributionLabel.textContent = 'Monthly Contribution: ';
  const monthlyContributionInput = document.createElement('input');
  monthlyContributionInput.classList.add('monthly-contribution-input');
  monthlyContributionInput.type = 'number';
  monthlyContributionLabel.appendChild(monthlyContributionInput);

  const expectedReturnLabel = document.createElement('label');
  expectedReturnLabel.classList.add('expected-return-label');
  expectedReturnLabel.textContent = 'Expected return rate: ';
  const expectedReturnInput = document.createElement('input');
  expectedReturnInput.classList.add('expected-return-input');
  expectedReturnInput.type = 'number';
  expectedReturnLabel.appendChild(expectedReturnInput);

  const taxAdvantagedLabel = document.createElement('label');
  taxAdvantagedLabel.classList.add('tax-advantaged-label');
  taxAdvantagedLabel.textContent = 'Is this account tax-advantaged?:';
  const taxAdvantagedInput = document.createElement('select');
  taxAdvantagedInput.classList.add('tax-advantaged-input');
  const taxAdvantagedOptions = ['Yes', 'No'];
  for (let i = 0; i < taxAdvantagedOptions.length; i += 1) {
    const option = document.createElement('option');
    option.value = taxAdvantagedOptions[i];
    option.textContent = taxAdvantagedOptions[i];
    taxAdvantagedInput.appendChild(option);
  }
  taxAdvantagedLabel.appendChild(taxAdvantagedInput);

  container.appendChild(amountLabel);
  container.appendChild(monthlyContributionLabel);
  container.appendChild(expectedReturnLabel);
  container.appendChild(taxAdvantagedLabel);
  return container;
}
