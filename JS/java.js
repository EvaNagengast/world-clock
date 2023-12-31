// Los Angeles

function changeTime() {
  let cityOne = document.querySelector("#cityOne");
  if (cityOne) {
    let cityOneDate = moment
      .tz(`America/Los_Angeles`)
      .format(`MMMM, [the] Do, YYYY`);
    document.querySelector("#cityOne .date").innerHTML = cityOneDate;

    let cityOneTime = moment.tz(`America/Los_Angeles`).format(`h:mm:ss`);
    document.querySelector("#cityOne .time").innerHTML = cityOneTime;

    let cityOneAmPm = moment.tz(`America/Los_Angeles`).format(`A`);
    document.querySelector("#cityOne .ampm").innerHTML = cityOneAmPm;
  }

  //Bogota
  let cityTwo = document.querySelector("#cityTwo");
  if (cityTwo) {
    let cityTwoDate = moment
      .tz(`America/Bogota`)
      .format(`MMMM, [the] Do, YYYY`);
    document.querySelector("#cityTwo .date").innerHTML = cityTwoDate;

    let cityTwoTime = moment.tz(`America/Bogota`).format(`h:mm:ss`);
    document.querySelector("#cityTwo .time").innerHTML = cityTwoTime;

    let cityTwoAmPm = moment.tz(`America/Bogota`).format(`A`);
    document.querySelector("#cityTwo .ampm").innerHTML = cityTwoAmPm;
  }
  // London
  let cityThree = document.querySelector("#cityThree");
  if (cityThree) {
    let cityThreeDate = moment
      .tz(`Europe/London`)
      .format(`MMMM, [the] Do, YYYY`);
    document.querySelector("#cityThree .date").innerHTML = cityThreeDate;

    let cityThreeTime = moment.tz(`Europe/London`).format(`h:mm:ss`);
    document.querySelector("#cityThree .time").innerHTML = cityThreeTime;

    let cityThreeAmPm = moment.tz(`Europe/London`).format(`A`);
    document.querySelector("#cityThree .ampm").innerHTML = cityThreeAmPm;
  }
  //Cairo
  let cityFour = document.querySelector("#cityFour");
  if (cityFour) {
    let cityFourDate = moment.tz(`Africa/Cairo`).format(`MMMM, [the] Do, YYYY`);
    document.querySelector("#cityFour .date").innerHTML = cityFourDate;

    let cityFourTime = moment.tz(`Africa/Cairo`).format(`h:mm:ss`);
    document.querySelector("#cityFour .time").innerHTML = cityFourTime;

    let cityFourAmPm = moment.tz(`Africa/Cairo`).format(`A`);
    document.querySelector("#cityFour .ampm").innerHTML = cityFourAmPm;
  }
  //Singapore
  let cityFive = document.querySelector("#cityFive");
  if (cityFive) {
    let cityFiveDate = moment
      .tz(`Asia/Singapore`)
      .format(`MMMM, [the] Do, YYYY`);
    document.querySelector("#cityFive .date").innerHTML = cityFiveDate;

    let cityFiveTime = moment.tz(`Asia/Singapore`).format(`h:mm:ss`);
    document.querySelector("#cityFive .time").innerHTML = cityFiveTime;

    let cityFiveAmPm = moment.tz(`Asia/Singapore`).format(`A`);
    document.querySelector("#cityFive .ampm").innerHTML = cityFiveAmPm;
  }
  //Melbourne
  let citySix = document.querySelector("#citySix");
  if (citySix) {
    let citySixDate = moment
      .tz(`Australia/Melbourne`)
      .format(`MMMM, [the] Do, YYYY`);
    document.querySelector("#citySix .date").innerHTML = citySixDate;

    let citySixTime = moment.tz(`Australia/Melbourne`).format(`h:mm:ss`);
    document.querySelector("#citySix .time").innerHTML = citySixTime;

    let citySixAmPm = moment.tz(`Australia/Melbourne`).format(`A`);
    document.querySelector("#citySix .ampm").innerHTML = citySixAmPm;
  }
}

changeTime();
setInterval(changeTime, 900);

//

// update to Dropdown City

function changeMainCity(event) {
  let cityValue = event.target.value;
  let circle = document.querySelector("#circle");
  let footer = document.querySelector("#footer-box");
  if (cityValue === "current") {
    cityValue = moment.tz.guess();
  }

  if (cityValue !== "choose") {
    let splitcityValue = cityValue.split(`/`);
    let city = splitcityValue[1].replaceAll("_", " ");
    let displayedCities = document.querySelector("#displaycities");
    let time = moment.tz(cityValue).format("h:mm");
    let ampm = moment.tz(cityValue).format("A");
    let date = moment.tz(cityValue).format("MMMM, [the] Do, YYYY");

    displayedCities.innerHTML = `
    <div class="city" id="cityNew">
      <div class="cityAndDate">
        <h2>${city}</h2>
        <div class="date">${date}</div>
      </div>
      <div class="timeElement">
        <div class="timeNumber">
          <span class="time">${time}</span>
          <small class="ampm">${ampm}</small>
        </div>
      </div>
    </div>  <input class="reloadButton" type="button" value="Back to all cities" onclick="location.reload();"> `;
  }
  circle.classList.add("circle");
footer.classList.add("addMargin");
}

let citySelector = document.querySelector("#city-selector");
citySelector.addEventListener("change", changeMainCity);

// circle movement

function updateCirclePosition() {
  let circle = document.querySelector("#circle");

  let seconds = moment.tz(`America/Los_Angeles`).format(`ss`);
  console.log(seconds)
  let degrees = (seconds / 60) * 360-90;
  circle.style.transform = `rotate(${degrees}deg) translateX(170px) rotate(-${degrees}deg)`;
}

setInterval(updateCirclePosition, 1000);
console.log(updateCirclePosition());
