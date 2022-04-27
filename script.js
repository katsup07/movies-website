/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
const infoButtons = document.querySelectorAll('.info-button');
const signUpButton = document.querySelector('.sign-up');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.info-card');// closest() is like querySelectorAll for the closest card. However, it climbs up the nested tree of DOM elements, whereas querySelector all climbs down the tree of DOM elements.
  // Grab the image src
  const imgSrc = card.querySelector('img').src; // Gives the src of the image.
  const { description } = card.dataset;
  // Populate the modal with new info // for alt='...' only want latter half of imgSrc description info
  modalInner.innerHTML = `<img src=${imgSrc} alt='${imgSrc.split('-').join(' ').split('/').slice(9)
    .join(' ')}'></br>
    <p>${description}</p>`;
  // Show the modal
  modalOuter.classList.add('open');
}
function handleSignUpButtonClick(event) {
  const button = event.currentTarget;
  console.log(button);
  const imgSrc = 'https://picsum.photos/200?random=1'; // adds a random picture
  const { description } = button.dataset;
  // Populate the modal with new info about signup
  modalInner.innerHTML = `<form action="action_page.php" style="border:1px solid #ccc">
  <div class="sign-up-container">
    <h1>Metflix Sign Up</h1>
    <p>Please fill in this form to create a Metflix account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>

    <p>By creating an account you agree to our <br><a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="cancelBtn">Cancel</button>
      <button type="submit" class="signupBtn">Sign Up</button>
    </div>
  </div>
</form>`;
  const cancelButton = document.querySelector('.cancelBtn');
  console.log(cancelButton);
  cancelButton.addEventListener('click', () => {
    closeModal();
  });
  // Show the modal
  modalOuter.classList.add('open');
  console.log(this);
}



function closeModal() {
  modalOuter.classList.remove('open');
}



infoButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick));
modalOuter.addEventListener('click', (event) => {
  const isOutside = event.target.closest('.modal-inner');
  if (isOutside === null) {
    closeModal();
  }
});

signUpButton.addEventListener('click', handleSignUpButtonClick);




window.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key === 'Escape') {
    closeModal();
  }
});
