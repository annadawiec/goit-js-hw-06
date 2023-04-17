/* eslint-disable strict */

'use strict';

// pobieranie inputu wprowadzonego przez użytkownika //
const input = document.querySelector('input[data-length]');
// dodanie detektra zdarzeń //
input.addEventListener('blur', () => {
  const value = input.value.trim();
  const length = input.getAttribute('data-length');

  // sprawdzenie długości inputu //
  if (value.length === Number(length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
