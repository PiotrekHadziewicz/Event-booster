const countries = [{
    name: "United States Of America",
    countryCode: "US"
  },
  {
    name: "Andorra",
    countryCode: "AD"
  },
  {
    name: "Anguilla",
    countryCode: "AI"
  },
  {
    name: "Argentina",
    countryCode: "AR"
  },
  {
    name: "Australia",
    countryCode: "AU"
  },
  {
    name: "Austria",
    countryCode: "AT"
  },
  {
    name: "Azerbaijan",
    countryCode: "AZ"
  },
  {
    name: "Bahamas",
    countryCode: "BS"
  },
  {
    name: "Bahrain",
    countryCode: "BH"
  },
  {
    name: "Barbados",
    countryCode: "BB"
  },
  {
    name: "Belgium",
    countryCode: "BE"
  },
  {
    name: "Bermuda",
    countryCode: "BM"
  },
  {
    name: "Brazil",
    countryCode: "BR"
  },
  {
    name: "Bulgaria",
    countryCode: "BG"
  },
  {
    name: "Canada",
    countryCode: "CA"
  },
  {
    name: "Chile",
    countryCode: "CL"
  },
  {
    name: "China",
    countryCode: "CN"
  },
  {
    name: "Colombia",
    countryCode: "CO"
  },
  {
    name: "Costa Rica",
    countryCode: "CR"
  },
  {
    name: "Croatia",
    countryCode: "HR"
  },
  {
    name: "Cyprus",
    countryCode: "CY"
  },
  {
    name: "Czech Republic",
    countryCode: "CZ"
  },
  {
    name: "Denmark",
    countryCode: "DK"
  },
  {
    name: "Dominican Republic",
    countryCode: "DO"
  },
  {
    name: "Ecuador",
    countryCode: "EC"
  },
  {
    name: "Estonia",
    countryCode: "EE"
  },
  {
    name: "Faroe Islands",
    countryCode: "FO"
  },
  {
    name: "Finland",
    countryCode: "FI"
  },
  {
    name: "France",
    countryCode: "FR"
  },
  {
    name: "Georgia",
    countryCode: "GE"
  },
  {
    name: "Germany",
    countryCode: "DE"
  },
  {
    name: "Ghana",
    countryCode: "GH"
  },
  {
    name: "Gibraltar",
    countryCode: "GI"
  },
  {
    name: "Great Britain",
    countryCode: "GB"
  },
  {
    name: "Greece",
    countryCode: "GR"
  },
  {
    name: "Hong Kong",
    countryCode: "HK"
  },
  {
    name: "Hungary",
    countryCode: "HU"
  },
  {
    name: "Iceland",
    countryCode: "IS"
  },
  {
    name: "India",
    countryCode: "IN"
  },
  {
    name: "Ireland",
    countryCode: "IE"
  },
  {
    name: "Israel",
    countryCode: "IL"
  },
  {
    name: "Italy",
    countryCode: "IT"
  },
  {
    name: "Jamaica",
    countryCode: "JM"
  },
  {
    name: "Japan",
    countryCode: "JP"
  },
  {
    name: "Korea, Republic of",
    countryCode: "KR"
  },
  {
    name: "Latvia",
    countryCode: "LV"
  },
  {
    name: "Lebanon",
    countryCode: "LB"
  },
  {
    name: "Lithuania",
    countryCode: "LT"
  },
  {
    name: "Luxembourg",
    countryCode: "LU"
  },
  {
    name: "Malaysia",
    countryCode: "MY"
  },
  {
    name: "Malta",
    countryCode: "MT"
  },
  {
    name: "Mexico",
    countryCode: "MX"
  },
  {
    name: "Monaco",
    countryCode: "MC"
  },
  {
    name: "Montenegro",
    countryCode: "ME"
  },
  {
    name: "Morocco",
    countryCode: "MA"
  },
  {
    name: "Netherlands",
    countryCode: "NL"
  },
  {
    name: "Netherlands Antilles",
    countryCode: "AN"
  },
  {
    name: "New Zealand",
    countryCode: "NZ"
  },
  {
    name: "Northern Ireland",
    countryCode: "ND"
  },
  {
    name: "Norway",
    countryCode: "NO"
  },
  {
    name: "Peru",
    countryCode: "PE"
  },
  {
    name: "Poland",
    countryCode: "PL"
  },
  {
    name: "Portugal",
    countryCode: "PT"
  },
  {
    name: "Romania",
    countryCode: "RO"
  },
  {
    name: "Russian Federation",
    countryCode: "RU"
  },
  {
    name: "Saint Lucia",
    countryCode: "LC"
  },
  {
    name: "Saudi Arabia",
    countryCode: "SA"
  },
  {
    name: "Serbia",
    countryCode: "RS"
  },
  {
    name: "Singapore",
    countryCode: "SG"
  },
  {
    name: "Slovakia",
    countryCode: "SK"
  },
  {
    name: "Slovenia",
    countryCode: "SI"
  },
  {
    name: "South Africa",
    countryCode: "ZA"
  },
  {
    name: "Spain",
    countryCode: "ES"
  },
  {
    name: "Sweden",
    countryCode: "SE"
  },
  {
    name: "Switzerland",
    countryCode: "CH"
  },
  {
    name: "Taiwan",
    countryCode: "TW"
  },
  {
    name: "Thailand",
    countryCode: "TH"
  },
  {
    name: "Trinidad and Tobago",
    countryCode: "TT"
  },
  {
    name: "Turkey",
    countryCode: "TR"
  },
  {
    name: "Ukraine",
    countryCode: "UA"
  },
  {
    name: "United Arab Emirates",
    countryCode: "AE"
  },
  {
    name: "Uruguay",
    countryCode: "UY"
  },
  {
    name: "Venezuela",
    countryCode: "VE"
  }
]

const loadCountries = document.querySelector(".choose-country");

for (let i = 0; i < countries.length; i++) {
  loadCountries.innerHTML = loadCountries.innerHTML + '<option value="' + countries[i].countryCode + '">' + countries[i].name + '</option>';
}

loadCountries.addEventListener('change', function (e) {
  console.log(e.target.value);
});