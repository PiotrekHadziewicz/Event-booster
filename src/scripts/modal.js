import axios from "axios";

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


async function axiosQueryModal(id) {
  return await axios({
		method: "GET",
		url: 'https://app.ticketmaster.com/discovery/v2/events',
		params: {
			apikey: 'N1khMiE51sBKpy9djrTkY8r219alCPAN',
			id: id,
		}
    })
  }

function showResultsModal(resp) {
  for (const event of resp.data._embedded.events) {
    let imgCircleUrl;
    let mainImgUrl;
    for (const image of event.images) {
      if (image.height == 683) {
        mainImgUrl = image.url;
      }
      if (image.height == 203) {
        imgCircleUrl = image.url;
      }
    }
    const imgCircle = document.querySelector(".modal__icon");
    const mainImg = document.querySelector(".modal__picture");
    imgCircle.setAttribute("src", imgCircleUrl);
    mainImg.setAttribute("src", mainImgUrl);
    const mainList = document.querySelector(".modal__info");
    const mainListFirstChild = mainList.children[0];
    mainListFirstChild.children[1].textContent = event.info;
    const mainListSecondChild = mainList.children[1];
    mainListSecondChild.children[1].textContent = event.dates.start.localDate + " " + event.dates.start.localTime + " (" + event.dates.timezone + ")";
    const mainListThirdChild = mainList.children[2];
    mainListThirdChild.children[1].textContent = event._embedded.venues[0].city.name + "," + event._embedded.venues[0].country.name + ", " + event._embedded.venues[0].name;
    const mainListFourthChild = mainList.children[3];
    mainListFourthChild.children[1].textContent = event._embedded.attractions[0].name;
    const standardPrice = document.querySelector("#standard-price");
    const vipPrice = document.querySelector("#vip-price");
    const standardPriceBtn = document.querySelector("#standard-btn");
    const vipPriceBtn = document.querySelector("#vip-btn");
    standardPriceBtn.innerHTML = `<a href=${event.url} class="ticket-link">BUY TICKETS</a>`;
    vipPriceBtn.innerHTML = `<a href=${event.url} class="ticket-link">BUY TICKETS</a>`;
    if (event.priceRanges.length == 1) {
      standardPrice.textContent = event.priceRanges[0].type + " " + event.priceRanges[0].min + "-" + event.priceRanges[0].max + " " + event.priceRanges[0].currency;
      vipPrice.textContent = event.priceRanges[0].type + " " + event.priceRanges[0].min + "-" + event.priceRanges[0].max + " " + event.priceRanges[0].currency;
    }
    else {
      standardPrice.textContent = event.priceRanges[0].type + event.priceRanges[0].min + "-" + event.priceRanges[0].max + event.priceRanges[0].currency;
      vipPrice.textContent = event.priceRanges[1].type + event.priceRanges[1].min + "-" + event.priceRanges[1].max + event.priceRanges[1].currency;
    }
  }
}
