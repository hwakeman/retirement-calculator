export default function savingsItem() {
  const container = document.createElement('div');
  container.classList.add('item');
  container.classList.add('savings-item');

  const amountLabel = document.createElement('label');
  amountLabel.textContent = 'Amount: ';
  const amountInput = document.createElement('input');
  amountInput.type = 'number';
  amountLabel.appendChild(amountInput);

  const expectedReturnLabel = document.createElement('label');
  expectedReturnLabel.textContent = 'Expected return rate: ';
  const expectedReturnInput = document.createElement('input');
  expectedReturnInput.type = 'number';
  expectedReturnLabel.appendChild(expectedReturnInput);

  const taxAdvantagedLabel = document.createElement('label');
  taxAdvantagedLabel.textContent = 'Is this account tax-advantaged?:';
  const taxAdvantagedInput = document.createElement('select');
  const taxAdvantagedOptions = ['Yes', 'No'];
  for (let i = 0; i < taxAdvantagedOptions.length; i += 1) {
    const option = document.createElement('option');
    option.value = taxAdvantagedOptions[i];
    option.textContent = taxAdvantagedOptions[i];
    taxAdvantagedInput.appendChild(option);
  }
  taxAdvantagedLabel.appendChild(taxAdvantagedInput);

  container.appendChild(amountLabel);
  container.appendChild(expectedReturnLabel);
  container.appendChild(taxAdvantagedLabel);
  return container;
}
