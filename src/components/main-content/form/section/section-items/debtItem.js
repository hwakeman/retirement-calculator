export default function debtItem() {
  const container = document.createElement('div');
  container.classList.add('item');
  container.classList.add('income-item');

  const balanceLabel = document.createElement('label');
  balanceLabel.textContent = 'Balance: ';
  const balanceInput = document.createElement('input');
  balanceInput.type = 'number';
  balanceLabel.appendChild(balanceInput);

  const interestRateLabel = document.createElement('label');
  interestRateLabel.textContent = 'Interest Rate: ';
  const interestRateInput = document.createElement('input');
  interestRateInput.type = 'number';
  interestRateLabel.appendChild(interestRateInput);

  const monthlyPaymentLabel = document.createElement('label');
  monthlyPaymentLabel.textContent = 'Monthly Payment: ';
  const monthlyPaymentInput = document.createElement('input');
  monthlyPaymentInput.type = 'number';
  monthlyPaymentLabel.appendChild(monthlyPaymentInput);

  container.appendChild(balanceLabel);
  container.appendChild(interestRateLabel);
  container.appendChild(monthlyPaymentLabel);
  return container;
}
