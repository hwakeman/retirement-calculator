export default function debtItem() {
  const container = document.createElement('div');
  container.classList.add('item');
  container.classList.add('debt-item');

  const balanceLabel = document.createElement('label');
  balanceLabel.classList.add('amount-label');
  balanceLabel.textContent = 'Balance: ';
  const balanceInput = document.createElement('input');
  balanceInput.classList.add('amount-input');
  balanceInput.type = 'number';
  balanceLabel.appendChild(balanceInput);

  const interestRateLabel = document.createElement('label');
  interestRateLabel.classList.add('interest-rate-label');
  interestRateLabel.textContent = 'Interest Rate: ';
  const interestRateInput = document.createElement('input');
  interestRateInput.classList.add('interest-rate-input');
  interestRateInput.type = 'number';
  interestRateLabel.appendChild(interestRateInput);

  const monthlyPaymentLabel = document.createElement('label');
  monthlyPaymentLabel.classList.add('monthly-payment-label');
  monthlyPaymentLabel.textContent = 'Monthly Payment: ';
  const monthlyPaymentInput = document.createElement('input');
  monthlyPaymentInput.classList.add('monthly-payment-input');
  monthlyPaymentInput.type = 'number';
  monthlyPaymentLabel.appendChild(monthlyPaymentInput);

  container.appendChild(balanceLabel);
  container.appendChild(interestRateLabel);
  container.appendChild(monthlyPaymentLabel);
  return container;
}
