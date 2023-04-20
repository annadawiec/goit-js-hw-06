/* eslint-disable strict */

'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// pobranie listy składników
const ingredientsList = document.querySelector('#ingredients');

// tworznie nowej tablicy
const liAll = ingredients.map((ingredient) => {
  // utworzenie nowego elementu li
  const li = document.createElement('li');

  // ustawienie zawartości tekstowej elementu na nazwę składnika
  li.textContent = ingredient;

  // dodanie klasy 'item' do elementu
  li.classList.add('item');
  return li;
});
// dodanie elementu li do listy składników
ingredientsList.append(...liAll);
