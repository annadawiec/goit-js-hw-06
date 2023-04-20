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
    // eslint-disable-next-line no-plusplus
    counterValue--;
  } else if (event.target.dataset.action === 'increment') {
    // eslint-disable-next-line no-plusplus
    counterValue++;
  }

  // aktualizowanie tekstu na wyświetlaczu licznika
  valueSpan.innerText = counterValue;
}

// dodanie detektora zdarzeń do każdego kliku
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
