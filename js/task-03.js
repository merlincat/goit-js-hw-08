'use strict';
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
let username = '';

nameInput.addEventListener('input', () => {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue || 'Anonymous';
});

// nameInput.addEventListener('input', event => {
//   username = event.target.value.trim();
// });
// nameInput.addEventListener('blur', event => {
//   nameOutput.textContent = username || 'Anonymous';
// });
