import incomeItem from './section-items/incomeItem.js';
import debtItem from './section-items/debtItem.js';
import savingsItem from './section-items/savingsItem.js';

export default function addButton(label) {
  const button = document.createElement('button');
  button.classList.add('add-btn');
  button.textContent = '+';

  if (label === 'income') {
    button.onclick = function (event) {
      event.preventDefault();
      document
        .getElementsByClassName(`${label}-items`)[0]
        .appendChild(incomeItem());
    };
  } else if (label === 'debts') {
    button.onclick = function (event) {
      event.preventDefault();
      document
        .getElementsByClassName(`${label}-items`)[0]
        .appendChild(debtItem());
    };
  } else if (label === 'savings') {
    button.onclick = function (event) {
      event.preventDefault();
      document
        .getElementsByClassName(`${label}-items`)[0]
        .appendChild(savingsItem());
    };
  }

  return button;
}
