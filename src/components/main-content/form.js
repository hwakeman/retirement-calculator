import addButton from './form/addButton';
import sectionLabel from './form/sectionLabel';
import separater from './form/separater';

export default function form() {
  const container = document.createElement('form');
  container.classList.add('retirement-form');

  const ageLabel = document.createElement('label');
  ageLabel.textContent = 'Age:';
  const ageInput = document.createElement('input');
  ageInput.type = 'number';
  ageInput.max = 130;
  ageLabel.appendChild(ageInput);
  container.appendChild(ageLabel);

  const expectedInflationLabel = document.createElement('label');
  expectedInflationLabel.textContent = 'Expected Inflation Rate:';
  const expectedInflationInput = document.createElement('input');
  expectedInflationInput.type = 'number';
  expectedInflationInput.max = 130;
  expectedInflationLabel.appendChild(expectedInflationInput);
  container.appendChild(expectedInflationLabel);

  container.appendChild(separater());

  container.appendChild(sectionLabel('Income sources'));

  container.appendChild(addButton());

  container.appendChild(separater());

  container.appendChild(sectionLabel('Debts'));

  container.appendChild(addButton());

  container.appendChild(separater());

  const submitButton = document.createElement('button');
  submitButton.classList.add('submit-btn');
  submitButton.textContent = 'Calculate';
  container.appendChild(submitButton);

  return container;
}
