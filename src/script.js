import './styles.css';

import header from './components/header';
import mainContent from './components/mainContent';

const content = document.createElement('div');

content.appendChild(header());
content.appendChild(mainContent());
content.classList.add('content');
document.body.appendChild(content);
