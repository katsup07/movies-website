/* eslint-disable object-curly-newline */
import { closeModal } from './library.js';
import { infoButtons, signUpButton, modalOuter, moreReviewsButton } from './elements.js';
import { handleCardButtonClick, handleSignUpButtonClick, showMoreReviews } from './handlers.js';

infoButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick));
signUpButton.addEventListener('click', handleSignUpButtonClick);
moreReviewsButton.addEventListener('click', showMoreReviews);

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
