const $mainEvents = document.querySelectorAll('.main-events');
const $backdrop = document.querySelector('.backdrop');
const $modal = document.querySelector('.modal');
const $closeModalBtn = document.querySelector('.modal__close-btn');

function openModal(event) {
  if (event.code == 'Escape') {
    console.log('wcisniety esc');
    event.preventDefault();
    $backdrop.hidden = false;
    $modal.hidden = false;
  }
}

function closeModal(event) {
  if (event.code == 'Space') {
    console.log('wcisniety space');
    event.preventDefault();
    $backdrop.hidden = true;
    $modal.hidden = true;
  }
}

document.addEventListener('keydown', openModal);
document.addEventListener('keydown', closeModal);
