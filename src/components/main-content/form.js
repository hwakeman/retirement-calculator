import section from './form/section';
import separater from './form/separater';
import results from './results';

export default function form() {
  const container = document.createElement('form');
  container.classList.add('retirement-form');

  const ageLabel = document.createElement('label');
  ageLabel.classList.add('age-label');
  ageLabel.textContent = 'Age:';
  const ageInput = document.createElement('input');
  ageInput.classList.add('age-input');
  ageInput.type = 'number';
  ageInput.max = 130;
  ageLabel.appendChild(ageInput);
  container.appendChild(ageLabel);

  const ageToLiveToLabel = document.createElement('label');
  ageToLiveToLabel.classList.add('age-to-live-to-label');
  ageToLiveToLabel.textContent = 'Desired Age to live to:';
  const ageToLiveToInput = document.createElement('input');
  ageToLiveToInput.classList.add('age-to-live-to-input');
  ageToLiveToInput.type = 'number';
  ageToLiveToInput.max = 130;
  ageToLiveToLabel.appendChild(ageToLiveToInput);
  container.appendChild(ageToLiveToLabel);

  const expectedInflationLabel = document.createElement('label');
  expectedInflationLabel.classList.add('expected-inflation-label');
  expectedInflationLabel.textContent = 'Expected Inflation Rate:';
  const expectedInflationInput = document.createElement('input');
  expectedInflationInput.classList.add('expected-inflation-input');
  expectedInflationInput.type = 'number';
  expectedInflationInput.max = 130;
  expectedInflationLabel.appendChild(expectedInflationInput);
  container.appendChild(expectedInflationLabel);

  const lifestyleLabel = document.createElement('label');
  lifestyleLabel.classList.add('lifestyle-label');
  lifestyleLabel.textContent = 'Lifestyle:';
  const lifestyleInput = document.createElement('select');
  lifestyleInput.classList.add('lifestyle-input');
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
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${locationInput.value}&apiKey=1bd28e13d8a9480db0b531811a8896c0`,
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
  submitButton.onclick = function (e) {
    e.preventDefault();
    const resultsDiv = document.getElementsByClassName('results')[0];
    resultsDiv.innerHTML = '';
    resultsDiv.appendChild(results());
  };
  container.appendChild(submitButton);

  return container;
}
