// Los Angeles

function changeTime() {
  let cityOneDate = moment
    .tz(`America/Los_Angeles`)
    .format(`MMMM, [the] Do, YYYY`);
  document.querySelector("#cityOne .date").innerHTML = cityOneDate;

  let cityOneTime = moment.tz(`America/Los_Angeles`).format(`h:mm:ss`);
  document.querySelector("#cityOne .time").innerHTML = cityOneTime;

  let cityOneAmPm = moment.tz(`America/Los_Angeles`).format(`A`);
  document.querySelector("#cityOne .ampm").innerHTML = cityOneAmPm;

  //Bogota

  let cityTwoDate = moment.tz(`America/Bogota`).format(`MMMM, [the] Do, YYYY`);
  document.querySelector("#cityTwo .date").innerHTML = cityTwoDate;

  let cityTwoTime = moment.tz(`America/Bogota`).format(`h:mm:ss`);
  document.querySelector("#cityTwo .time").innerHTML = cityTwoTime;

  let cityTwoAmPm = moment.tz(`America/Bogota`).format(`A`);
  document.querySelector("#cityTwo .ampm").innerHTML = cityTwoAmPm;

  // London

  let cityThreeDate = moment.tz(`Europe/London`).format(`MMMM, [the] Do, YYYY`);
  document.querySelector("#cityThree .date").innerHTML = cityThreeDate;

  let cityThreeTime = moment.tz(`Europe/London`).format(`h:mm:ss`);
  document.querySelector("#cityThree .time").innerHTML = cityThreeTime;

  let cityThreeAmPm = moment.tz(`Europe/London`).format(`A`);
  document.querySelector("#cityThree .ampm").innerHTML = cityThreeAmPm;

  //Cairo

  let cityFourDate = moment.tz(`Africa/Cairo`).format(`MMMM, [the] Do, YYYY`);
  document.querySelector("#cityFour .date").innerHTML = cityFourDate;

  let cityFourTime = moment.tz(`Africa/Cairo`).format(`h:mm:ss`);
  document.querySelector("#cityFour .time").innerHTML = cityFourTime;

  let cityFourAmPm = moment.tz(`Africa/Cairo`).format(`A`);
  document.querySelector("#cityFour .ampm").innerHTML = cityFourAmPm;

  //Singapore

  let cityFiveDate = moment.tz(`Asia/Singapore`).format(`MMMM, [the] Do, YYYY`);
  document.querySelector("#cityFive .date").innerHTML = cityFiveDate;

  let cityFiveTime = moment.tz(`Asia/Singapore`).format(`h:mm:ss`);
  document.querySelector("#cityFive .time").innerHTML = cityFiveTime;

  let cityFiveAmPm = moment.tz(`Asia/Singapore`).format(`A`);
  document.querySelector("#cityFive .ampm").innerHTML = cityFiveAmPm;

  //Melbourne

  let citySixDate = moment
    .tz(`Australia/Melbourne`)
    .format(`MMMM, [the] Do, YYYY`);
  document.querySelector("#citySix .date").innerHTML = citySixDate;

  let citySixTime = moment.tz(`Australia/Melbourne`).format(`h:mm:ss`);
  document.querySelector("#citySix .time").innerHTML = citySixTime;

  let citySixAmPm = moment.tz(`Australia/Melbourne`).format(`A`);
  document.querySelector("#citySix .ampm").innerHTML = citySixAmPm;
}

changeTime();
setInterval(changeTime, 900);
