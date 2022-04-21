import axios from "axios";
import Notiflix from "notiflix";
import { loadCountries } from "./scripts/loadCountries";

// apikey: N1khMiE51sBKpy9djrTkY8r219alCPAN

const searchEvent = document.querySelector('input[name="searchEvent"]');
const chooseCountry = document.querySelector('select[name="countryName"]');
const submit = document.querySelector('button[type="submit"]');
let countryId = chooseCountry.value;

loadCountries.addEventListener('change', function (e) {
    countryId = e.target.value;
});

submit.addEventListener("click", () => { 
    const searchValue = searchEvent.value;
    axiosQuery(searchValue, countryId)
        .then(resp => {
            console.log(resp);
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
            const singleEvent = document.createElement("div");
            singleEvent.classList.add("main-events");
            const singleEventFragment = document.createDocumentFragment();
            const imgEvent = document.createElement("img");
            imgEvent.classList.add("main-events-img");
            imgEvent.setAttribute("src", event.images[0].url);
            const eventName = document.createElement("p");
            eventName.classList.add("main-events-name");
            eventName.textContent = event.name;
            const eventDate = document.createElement("p");
            eventDate.classList.add("main-events-date");
            eventDate.textContent = event.dates.start.localDate;
            const eventPlace = document.createElement("p");
            eventPlace.classList.add("main-events-place");
            eventPlace.textContent = event._embedded.venues[0].city.name;
            singleEventFragment.append(imgEvent, eventName, eventDate, eventPlace);
            singleEvent.append(singleEventFragment);
            divOfEvents.append(singleEvent);
            console.log(event);
        }
    }
}