import form from './main-content/form';

export default function mainContent() {
  const container = document.createElement('main');

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent =
    'Ever wondered when you will be able to retire with your current financial plan? Use this retirement calculator to find out! (Note: this calculator assumes you will have no money to leave for your family after you die)';
  container.appendChild(description);

  container.appendChild(form());

  const results = document.createElement('div');
  results.classList.add('results');
  container.appendChild(results);

  return container;
}
