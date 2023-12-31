'use strict';
// import * as basicLightbox from 'basiclightbox';
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__360.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },

const galleryContainer = document.querySelector('.gallery');

const mockupGallery = images.reduce(
  (html, image) =>
    html +
    `
  <li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>
  `,
  ''
);
galleryContainer.innerHTML = mockupGallery;

// Наступна логіка потрібна, щоб зупинити дефолтну роботу при натисканні на картинку, адже вона огорнута в посилання і при натисканні за замовчуванням відбувається завантаження файлу ----->
// const imageLinks = galleryContainer.querySelectorAll('.gallery-link');

// imageLinks.forEach(imageLink => {
//   imageLink.addEventListener('click', event => {
//     event.preventDefault();
//   });
// });
// <---

galleryContainer.addEventListener('click', event => {
  // додала сюди зміну поведінки по замовчуванню.
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const fullImgLink = event.target.dataset.source;
  const altName = event.target.alt;
  // console.log(fullImgLink);
  const modalContent = `
      <img src="${fullImgLink}" alt="${altName}">
  `;
  function modalCLose(event) {
    if (event.code === 'Escape') {
      // ця логіка наче потрібюна, адже сама галерея не обробляє слухачі на клавіатуру, тут здійснено закриття на ескейп та видалення слухача, можливо, треба зробити по-іншому, але це прописано в завданні
      instance.close();
    }
  }
  const instance = basicLightbox.create(modalContent, {
    onShow: () => {
      document.addEventListener('keydown', modalCLose);
    },
    onClose: () => {
      document.removeEventListener('keydown', modalCLose);
    },
  });

  instance.show();
});
