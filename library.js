import { modalOuter } from './elements.js';

export function closeModal() {
  modalOuter.classList.remove('open');
}

export function shuffle(arr) {
  let arr2 = arr.slice(0);
  const cutArr = arr2.splice(0, Math.floor(Math.random() * arr2.length));
  arr2 = [...arr2, ...cutArr];
  return arr2;
}