/* eslint-disable strict */

'use strict';

// zmienna z początkową wartością
let counterValue = 0;

// pobieranie elementu span i buttonów
const valueSpan = document.querySelector('#counter span');
const buttons = document.querySelectorAll('#counter button');

// funkcja wywoływana gdy przycisk jest wcinięty
function handleClick(event) {
  if (event.target.dataset.action === 'decrement') {
    counterValue -= 1;
  } else if (event.target.dataset.action === 'increment') {
    counterValue += 1;
  }

  // aktualizowanie tekstu na wyświetlaczu licznika
  valueSpan.innerText = counterValue;
}

// dodanie detektora zdarzeń do każdego kliku
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
