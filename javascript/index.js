let losElement = document.querySelector("#los");
let losDateElement = losElement.querySelector(".date");
let losTimeElement = losElement.querySelector(".time");

function updateLosTime() {
  let losTime = moment.tz("America/Los_Angeles");
  losDateElement.innerHTML = losTime.format("MMMM Do YYYY");
  losTimeElement.innerHTML = `${losTime.format('h:mm:ss')}<small>${losTime.format("A")}</small>`;
}

updateLosTime();
setInterval(updateLosTime, 1000);


let lodElement = document.querySelector("#lod");
let lodDateElement = lodElement.querySelector(".date");
let lodTimeElement = lodElement.querySelector(".time");

function updateLodTime() {
  let lodTime = moment.tz("Europe/London");
  lodDateElement.innerHTML = lodTime.format("MMMM Do YYYY");
  lodTimeElement.innerHTML = `${lodTime.format('h:mm:ss')}<small>${lodTime.format("A")}</small>`;
}

updateLodTime();
setInterval(updateLodTime, 1000);


