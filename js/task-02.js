'use strict';

// Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.

// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.

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
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const galleryList = document.querySelector('.gallery');
// const fragment = document.createDocumentFragment();

// images.forEach(image => {
//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery-item');

//   const img = document.createElement('img');
//   img.classList.add('gallery-img');
//   img.src = image.url;
//   img.alt = image.alt;

//   galleryItem.appendChild(img);

//   fragment.appendChild(galleryItem);
// });
// galleryList.appendChild(fragment);

// const galleryItems = images.map(image => {
//   const galleryItem = document.createElement('li');
//   galleryItem.className = 'gallery-item';
//   const img = document.createElement('img');
//   img.className = 'gallery-img';
//   img.src = image.url;
//   img.alt = image.alt;
//   galleryItem.appendChild(img);
//   return galleryItem;
// });
// galleryList.append(...galleryItems);

// const imagesHTML = images
//   .map(
//     image => `
//   <li class="gallery-item">
//     <img class="gallery-img" src="${image.url}" alt="${image.alt}">
//   </li>
// `
//   )
//   .join('');

// galleryList.insertAdjacentHTML('beforeend', imagesHTML);

const galleryItems = images.reduce(
  (html, image) =>
    html +
    `<li class="gallery-item"><img class="gallery-img" src="${image.url}" alt="${image.alt}"></li>`,
  ''
);
galleryList.insertAdjacentHTML('beforeend', galleryItems);
