import axios from "axios";
import Notiflix from "notiflix";
import { loadCountries } from "./scripts/loadCountries";

// apikey: N1khMiE51sBKpy9djrTkY8r219alCPAN

const searchEvent = document.querySelector('input[name="searchEvent"]');
const chooseCountry = document.querySelector('select[name="countryName"]');
const submit = document.querySelector('button[type="submit"]');
let countryId = "US";
let searchValue = "";

loadCountries.addEventListener('change', function (e) {
    countryId = e.target.value;
});

// api domyślnie: US
axiosQuery(searchValue, countryId)
        .then(resp => {
            showResults(resp);
        })
        .catch(error => { 
            console.log(error);
        });


submit.addEventListener("click", () => { 
    searchValue = searchEvent.value;
    axiosQuery(searchValue, countryId)
        .then(resp => {
            showResults(resp);
        })
        .catch(error => { 
            console.log(error);
        });
});


async function axiosQuery(values, code) {
  return await axios({
		method: "GET",
		url: 'https://app.ticketmaster.com/discovery/v2/events',
		params: {
			apikey: 'N1khMiE51sBKpy9djrTkY8r219alCPAN',
			keyword: values,
            countryCode: code,
            size: 20,
		}
  })
}


function showResults(resp) {
    if (resp.data.page.totalElements == 0) {
        Notiflix.Notify.failure("Sorry, there are no events matching your search query. Please try again.");
    } else {
        const divOfEvents = document.querySelector(".main-field");
        divOfEvents.innerHTML = "";
        for (const event of resp.data._embedded.events) {
            const eventId = event.id;
            const singleEvent = document.createElement("div");
            singleEvent.setAttribute("data-id", eventId);
            singleEvent.classList.add("main-events");
            const singleEventFragment = document.createDocumentFragment();
            const imgEvent = document.createElement("img");
            imgEvent.setAttribute("data-id", eventId);
            imgEvent.classList.add("main-events-img");
            let imgUrl;
            for (const image of event.images) {
                if (image.height == 225) {
                    imgUrl = image.url;
                    break;
                }
            }
            imgEvent.setAttribute("src", imgUrl);
            const eventName = document.createElement("p");
            eventName.setAttribute("data-id", eventId);
            eventName.classList.add("main-events-name");
            eventName.textContent = event.name;
            const eventDate = document.createElement("p");
            eventDate.setAttribute("data-id", eventId);
            eventDate.classList.add("main-events-date");
            eventDate.textContent = event.dates.start.localDate;
            const eventPlace = document.createElement("p");
            eventPlace.setAttribute("data-id", eventId);
            eventPlace.classList.add("main-events-place");
            eventPlace.textContent = event._embedded.venues[0].city.name;
            const eventBorder = document.createElement("div");
            eventBorder.setAttribute("data-id", eventId);
            eventBorder.classList.add("border");
            singleEventFragment.append(eventBorder, imgEvent, eventName, eventDate, eventPlace);
            singleEvent.append(singleEventFragment);
            divOfEvents.append(singleEvent);
        }
    }
}


export async function axiosQueryModal(id) {
  return await axios({
		method: "GET",
		url: 'https://app.ticketmaster.com/discovery/v2/events',
		params: {
			apikey: 'N1khMiE51sBKpy9djrTkY8r219alCPAN',
			id: id,
		}
    })
  }

export function showResultsModal(resp) {
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