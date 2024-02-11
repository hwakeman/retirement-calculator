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

  const lifestyleLabel = document.createElement('label');
  lifestyleLabel.textContent = 'Lifestyle:';
  const lifestyleInput = document.createElement('select');
  const lifestyleOptions = [
    'Barebones',
    'Frugal',
    'Moderate',
    'Comfortable',
    'Luxurious',
  ];
  for (let i = 0; i < lifestyleOptions.length; i += 1) {
    const option = document.createElement('option');
    option.value = lifestyleOptions[i];
    option.textContent = lifestyleOptions[i];
    lifestyleInput.appendChild(option);
  }
  lifestyleLabel.appendChild(lifestyleInput);
  container.appendChild(lifestyleLabel);

  const locationContainer = document.createElement('div');
  locationContainer.classList.add('location-container');
  const locationOptions = document.createElement('div');
  locationOptions.classList.add('location-options');
  const locationLabel = document.createElement('label');
  locationLabel.classList.add('location-label');
  locationLabel.textContent = 'Location:';
  const locationInput = document.createElement('input');
  locationInput.classList.add('location-input');
  locationInput.maxlength = 50;
  locationInput.addEventListener('input', () => {
    const requestOptions = {
      method: 'GET',
    };

    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${locationInput.value}&apiKey=908271eda86c4e83bffeab2a3aa89f0f`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((response) => response.features)
      .then((result) => {
        locationOptions.innerHTML = '';
        const keys = Object.keys(result);
        for (let i = 0; i < keys.length; i += 1) {
          const key = keys[i];
          const value = result[key].properties.formatted;
          const newLocation = document.createElement('button');
          newLocation.classList.add('location-option');
          newLocation.textContent = value;
          newLocation.addEventListener('click', (e) => {
            e.preventDefault();
            locationInput.value = value;
            locationOptions.innerHTML = '';
          });
          locationOptions.appendChild(newLocation);
        }
      })
      .catch((error) => console.log('error', error));
  });
  locationLabel.appendChild(locationInput);
  locationContainer.appendChild(locationLabel);
  locationContainer.appendChild(locationOptions);
  container.appendChild(locationContainer);

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
