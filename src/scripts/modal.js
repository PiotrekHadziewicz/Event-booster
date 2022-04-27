import { axiosQueryModal, showResultsModal } from "..";

const $mainEvents = document.querySelector('.main-field');
const $backdrop = document.querySelector('.backdrop');
const $modal = document.querySelector('.modal');
let $closeModalBtn;

function openModal(event) {
  event.preventDefault();
  $backdrop.hidden = false;
  $modal.hidden = false;
  $closeModalBtn = document.querySelector('.modal__close-btn');
  const idOfEvent = event.target.dataset.id;
  axiosQueryModal(idOfEvent)
    .then(resp => { 
      console.log(resp);
      showResultsModal(resp);
    })
    .catch(error => { 
      console.log(error);
    });
}

function closeModal(event) {
  event.preventDefault();
  $backdrop.hidden = true;
  $modal.hidden = true;
}




setInterval(() => {
  $mainEvents.addEventListener('click', openModal);
  if($closeModalBtn)
  $closeModalBtn.addEventListener('click', closeModal);
}, 500);
