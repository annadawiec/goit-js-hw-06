/* eslint-disable strict */

'use strict';

// listy kategorii //
const categoriesList = document.querySelectorAll('ul#categories li.item');

// policzenie wszystkich kategorii //
const categoriesNumber = categoriesList.length;
console.log(`Number of categories:  ${categoriesNumber}`);

// wyświetlenie nazwy i liczby elementów dla każdej kategorii //

categoriesList.forEach((category) => {
  // wypisanie tekstu nagłówka elementu <h2> //
  const categoryName = category.querySelector('h2').textContent;
  //  wypisanie liczby elementów w kategorii (wszystkich <li>)
  const elementsCount = category.querySelectorAll('li').length;

  // wyświetlenie informacji o kategorii i liczbie elementów //
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
