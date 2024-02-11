import section from './form/section';
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

  const retirementLifestyleLabel = document.createElement('label');
  retirementLifestyleLabel.textContent = 'Retirement Lifestyle:';
  const retirementLifestyleInput = document.createElement('select');
  const retirementLifestyleOptions = [
    'Barebones',
    'Frugal',
    'Moderate',
    'Comfortable',
    'Luxurious',
  ];
  for (let i = 0; i < retirementLifestyleOptions.length; i += 1) {
    const option = document.createElement('option');
    option.value = retirementLifestyleOptions[i];
    option.textContent = retirementLifestyleOptions[i];
    retirementLifestyleInput.appendChild(option);
  }
  retirementLifestyleLabel.appendChild(retirementLifestyleInput);
  container.appendChild(retirementLifestyleLabel);

  container.appendChild(separater());

  container.appendChild(section('income'));

  container.appendChild(separater());

  container.appendChild(section('savings'));

  container.appendChild(separater());

  container.appendChild(section('debts'));

  container.appendChild(separater());

  const submitButton = document.createElement('button');
  submitButton.classList.add('submit-btn');
  submitButton.textContent = 'Calculate';
  container.appendChild(submitButton);

  return container;
}
