/* eslint-disable strict */

'use strict';

// pobieranie elementów input i span //
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// dodanie detektora zdarzeń do input //
nameInput.addEventListener('input', () => {
  if (nameInput.value) {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
