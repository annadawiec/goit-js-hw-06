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

// iteracja po elementach tablicy ingredients
ingredients.forEach((ingredient) => {
  // utworzenie nowego elementu li
  const li = document.createElement('li');

  // ustawienie zawartości tekstowej elementu na nazwę składnika
  li.textContent = ingredient;

  // dodanie klasy 'item' do elementu
  li.classList.add('item');

  // dodanie elementu li do listy składników
  ingredientsList.appendChild(li);
});
