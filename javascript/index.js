let losElement = document.querySelector("#los");
let losDateElement = losElement.querySelector(".date");
let losTimeElement = losElement.querySelector(".time");

let losInterval;
let lodInterval;
let selectedCityInterval;

function updateLosTime() {
  let losTime = moment.tz("America/Los_Angeles");
  losDateElement.innerHTML = losTime.format("MMMM Do YYYY");
  losTimeElement.innerHTML = `${losTime.format('h:mm:ss')}<small>${losTime.format("A")}</small>`;
}

losInterval = setInterval(updateLosTime, 1000);
updateLosTime();


let lodElement = document.querySelector("#lod");
let lodDateElement = lodElement.querySelector(".date");
let lodTimeElement = lodElement.querySelector(".time");

function updateLodTime() {
  let lodTime = moment.tz("Europe/London");
  lodDateElement.innerHTML = lodTime.format("MMMM Do YYYY");
  lodTimeElement.innerHTML = `${lodTime.format('h:mm:ss')}<small>${lodTime.format("A")}</small>`;
}

lodInterval = setInterval(updateLodTime, 1000);
updateLodTime();



function updateCity(event) {
    let cityTimeZone = event.target.value;
    let citiesElement = document.querySelector("#cities");
    
    if (cityTimeZone === "") {
        // Show default cities
        clearInterval(selectedCityInterval);
        clearInterval(losInterval);
        clearInterval(lodInterval);
        losInterval = setInterval(updateLosTime, 1000);
        lodInterval = setInterval(updateLodTime, 1000);
        updateLosTime();
        updateLodTime();
        citiesElement.innerHTML = `
         <div class="city" id="los">
            <div>
            <h2>Los Angels </h2>
            <div class="date"></div>
            </div>
            <div class="time">
            </div>
         </div>
         <div class="city" id="lod">
            <div>
            <h2>London</h2>
            <div class="date"></div>
            </div>
            <div class="time">
            </div>
         </div>
        `;
        losElement = document.querySelector("#los");
        losDateElement = losElement.querySelector(".date");
        losTimeElement = losElement.querySelector(".time");
        lodElement = document.querySelector("#lod");
        lodDateElement = lodElement.querySelector(".date");
        lodTimeElement = lodElement.querySelector(".time");
    } else {
        // Show selected city only
        clearInterval(losInterval);
        clearInterval(lodInterval);
        clearInterval(selectedCityInterval);
        let cityTime = moment.tz(cityTimeZone);
        citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format('h:mm:ss')}<small>${cityTime.format("A")}</small></div>
    </div>
    `;
        // Update selected city every second
        selectedCityInterval = setInterval(() => {
            let updatedCityTime = moment.tz(cityTimeZone);
            citiesElement.querySelector(".date").innerHTML = updatedCityTime.format("MMMM Do YYYY");
            citiesElement.querySelector(".time").innerHTML = `${updatedCityTime.format('h:mm:ss')}<small>${updatedCityTime.format("A")}</small>`;
        }, 1000);
    }
}

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);



