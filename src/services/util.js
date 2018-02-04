export const createElement = (marker, tag) => {
  const el = document.createElement(tag || 'div');
  el.setAttribute(marker, '');
  document.body.appendChild(el);
};

export const removeElement = (marker) => {
  const el = document.querySelector(marker) || document.querySelector(`[${marker}]`);
  if (el) document.body.removeChild(el);
};

export const timeout = (duration = 0) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

export const $ = selector => document.querySelector(selector);

// export default {
//   createElement,
//   removeElement,
//   timeout,
//   $,
// };
