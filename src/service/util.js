const createElement = (marker, tag) => {
  const el = document.createElement(tag || 'div');
  el.setAttribute(marker, '');
  document.body.appendChild(el);
};

const removeElement = (marker) => {
  const el = document.querySelector(marker) || document.querySelector(`[${marker}]`);
  if (el) document.body.removeChild(el);
};

const timeout = (duration = 0) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

const $ = selector => document.querySelector(selector);


module.exports = {
  createElement,
  removeElement,
  timeout,
  $,
};
