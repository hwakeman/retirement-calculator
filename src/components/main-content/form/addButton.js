export default function addButton() {
  const container = document.createElement('button');
  container.classList.add('add-btn');
  container.textContent = '+';
  return container;
}
