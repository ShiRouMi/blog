export function addTextToBody(text) {
  const div = document.createElement('div');
  div.textContent = text;
  document.body.appendChild(div);
}

export function pColor(color) {
  const p = document.querySelector('p')
  p.style.color = color;
}