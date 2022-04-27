import closeModal from './library.js';
import { infoButtons, signUpButton, modalOuter } from './elements.js';
import { handleCardButtonClick, handleSignUpButtonClick } from './handlers.js';

infoButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick));

signUpButton.addEventListener('click', handleSignUpButtonClick);

modalOuter.addEventListener('click', (event) => {
  const isOutside = event.target.closest('.modal-inner');
  if (isOutside === null) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
