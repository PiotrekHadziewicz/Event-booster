import axios from "axios";
import Notiflix from "notiflix";
import { countries } from "./scripts/loadCountries";

// apikey: N1khMiE51sBKpy9djrTkY8r219alCPAN

const searchEvent = document.querySelector('input[name="searchEvent"]');
const chooseCountry = document.querySelector('select[name="countryName"]');
const submit = document.querySelector('button[type="submit"]');
let countryId = "US";
let searchValue = "";

const loadCountries = document.querySelector(".choose-country");

for (let i = 0; i < countries.length; i++) {
  loadCountries.innerHTML = loadCountries.innerHTML + '<option value="' + countries[i].countryCode + '">' + countries[i].name + '</option>';
}

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
