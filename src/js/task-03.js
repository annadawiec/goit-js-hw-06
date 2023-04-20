/* eslint-disable strict */

'use strict';

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// pobranie listy galerii
const galleryList = document.querySelector('.gallery');

// utworzenie nowej tablicy
const imageAll = images
  .map(
    // eslint-disable-next-line comma-dangle, no-trailing-spaces
    (image) => `<li><img src="${image.url}" alt="${image.alt}" width=400></li>`
  )
  .join('');

// dodanie elementu li do listy galerii
galleryList.insertAdjacentHTML('beforeend', imageAll);

galleryList.style.display = 'flex';
galleryList.style.flexDirection = 'column';
galleryList.style.gap = '50px';
