export default function sectionLabel(label) {
  const container = document.createElement('h3');
  container.classList.add('section-label');
  container.textContent = label;
  return container;
}
