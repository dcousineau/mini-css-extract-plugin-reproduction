import './async.css';

export function run() {
  const elem = document.createElement('H2');
  const text = document.createTextNode('And so has this async module');
  elem.appendChild(text);
  document.body.appendChild(elem);
}