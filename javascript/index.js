function updateTime() {
  //Brisbane
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");

  brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do YYYY");
  brisbaneTimeElement.innerHTML = brisbaneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Oslo
  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  let osloTime = moment().tz("Europe/Oslo");

  osloDateElement.innerHTML = osloTime.format("MMMM Do YYYY");
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");

  //Prague
  let pragueElement = document.querySelector("#prague");
  let pragueDateElement = pragueElement.querySelector(".date");
  let pragueTimeElement = pragueElement.querySelector(".time");
  let pragueTime = moment().tz("Europe/Prague");

  pragueDateElement.innerHTML = pragueTime.format("MMMM Do YYYY");
  pragueTimeElement.innerHTML = pragueTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //phoenix
  let phoenixElement = document.querySelector("#phoenix");
  let phoenixDateElement = phoenixElement.querySelector(".date");
  let phoenixTimeElement = phoenixElement.querySelector(".time");
  let phoenixTime = moment().tz("America/phoenix");

  phoenixDateElement.innerHTML = phoenixTime.format("MMMM Do YYYY");
  phoenixTimeElement.innerHTML = phoenixTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
  <div>
  <h2> ${cityName}</h2>
  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">All Cities</a>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
