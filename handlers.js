import { modalInner, modalOuter, reviewEls } from './elements.js';
import { closeModal, shuffle } from './library.js';
import formHTML from './formHTML.js';
import reviews from './reviews.js';

/* eslint-disable max-len */
export function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.info-card');// closest() is like querySelectorAll for the closest card. However, it climbs up the nested tree of DOM elements, whereas querySelector all climbs down the tree of DOM elements.
  // Grab the image src
  const imgSrc = card.querySelector('img').src;
  const { description } = card.dataset;
  // Populate the modal with card info // for alt='...' only want latter half of imgSrc description info
  modalInner.innerHTML = `<img src=${imgSrc} alt='${imgSrc.split('-').join(' ').split('/').slice(9)
    .join(' ')}'></br>
      <p>${description}</p>`;
  // Show the modal
  modalOuter.classList.add('open');
}

export function handleSignUpButtonClick(event) {
  // Populate the modal with info about signup
  modalInner.innerHTML = formHTML;
  const cancelButton = document.querySelector('.cancelBtn');
  cancelButton.addEventListener('click', () => {
    closeModal();
  });
  // Show the modal
  modalOuter.classList.add('open');
}

export function showMoreReviews() {
  const reviewsShuffle = shuffle(reviews);
  reviewEls.forEach((reviewEl, i) => {
    reviewEl.textContent = reviewsShuffle[i];
  });
}
