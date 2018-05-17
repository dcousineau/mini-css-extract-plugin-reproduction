import './index.css';
import './sync.js';


const elem = document.createElement('H1');
const text = document.createTextNode('Entrypoint has loaded!');
elem.appendChild(text);
document.body.appendChild(elem);

import('./async.js').then(module => {
  module.run();
});