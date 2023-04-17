/* eslint-disable strict */

'use strict';

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
// dodanie detektora na input//
fontSizeControl.addEventListener('input', () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});
