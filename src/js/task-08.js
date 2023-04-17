/* eslint-disable strict */

'use strict';

// pobranie elementu formularza //
const loginForm = document.querySelector('.login-form');

// dodanie detektora na submit //
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // pobranie wartości inputów //
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (email && password) {
    const formData = { email, password };
    console.log(formData);
    loginForm.reset();
  } else {
    // eslint-disable-next-line no-alert
    alert('Please fill in all fields.');
  }
});
