function updateTime() {
  //Brisbane
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");

  brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do YYYY");
  brisbaneTimeElement.innerHTML = brisbaneTime.format(
    "h:mm:ss [<small>A</small>]"
  );

  //Oslo
  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  let osloTime = moment().tz("Europe/Oslo");

  osloDateElement.innerHTML = osloTime.format("MMMM Do YYYY");
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>A</small>]");

  //Prague
  let pragueElement = document.querySelector("#prague");
  let pragueDateElement = pragueElement.querySelector(".date");
  let pragueTimeElement = pragueElement.querySelector(".time");
  let pragueTime = moment().tz("Europe/Prague");

  pragueDateElement.innerHTML = pragueTime.format("MMMM Do YYYY");
  pragueTimeElement.innerHTML = pragueTime.format("h:mm:ss [<small>A</small>]");

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>A</small>]");
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = cityTimeZone;
  citiesElement = ` <div class="city">
  <div>
  <h2> ${cityTimeZone}</h2>
  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time"></div>
  </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
