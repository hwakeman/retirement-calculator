import sectionLabel from './section/sectionLabel';
import addButton from './section/addButton';

export default function section(label) {
  const container = document.createElement('div');
  container.classList.add('section');
  container.classList.add(`${label}-section`);
  const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
  container.appendChild(sectionLabel(capitalizedLabel));
  const sectionitems = document.createElement('div');
  sectionitems.classList.add(`items-list`);
  sectionitems.classList.add(`${label}-items`);
  container.appendChild(sectionitems);
  container.appendChild(addButton(label));
  return container;
}
