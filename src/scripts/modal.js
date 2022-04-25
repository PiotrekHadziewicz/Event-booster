const $mainEvents = document.querySelectorAll('.main-events');
const $backdrop = document.querySelector('.backdrop');
const $modal = document.querySelector('.modal');
const $closeModalBtn = document.querySelector('.modal__close-btn');

function openModal() {
  $backdrop.hidden = false;
  $modal.hidden = false;
}

function closeModal() {
  $backdrop.hidden = true;
  $modal.hidden = true;
}

$mainEvents.addEventListener('click', openModal);
$closeModalBtn.addEventListener('click', closeModal);
