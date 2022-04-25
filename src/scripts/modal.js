const $mainEvents = document.querySelector('.main-field');
const $backdrop = document.querySelector('.backdrop');
const $modal = document.querySelector('.modal');
const $closeModalBtn = document.querySelector('.modal__close-btn');

function openModal(event) {
  event.preventDefault();
  console.log(event.target);
  $backdrop.hidden = false;
  $modal.hidden = false;
}

function closeModal(event) {
  event.preventDefault();
  $backdrop.hidden = true;
  $modal.hidden = true;
}

$mainEvents.addEventListener('click', openModal);
$closeModalBtn.addEventListener('click', closeModal);
