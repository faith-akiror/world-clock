const citiesElement = document.querySelector("#cities");
const citiesSelect = document.querySelector("#city");
let selectedCityInterval;
let allCitiesIntervals = [];

const timezoneLabels = {
  "America/New_York": "New York, USA",
  "Europe/London": "London, United Kingdom",
  "Asia/Tokyo": "Tokyo, Japan",
  "Africa/Kampala": "Kampala, Uganda",
  "Australia/Sydney": "Sydney, Australia",
  "Africa/Johannesburg": "Johannesburg, South Africa",
  "America/Los_Angeles": "Los Angeles, USA",
  "Asia/Dubai": "Dubai, UAE",
  "Europe/Paris": "Paris, France",
  "Asia/Hong_Kong": "Hong Kong, China",
  "America/Sao_Paulo": "Sao Paulo, Brazil"
};

const timezones = Object.keys(timezoneLabels);

function getLocalTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || moment.tz.guess();
}

function renderCityCard(label, time) {
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${label}</h2>
        <div class="date">${time.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${time.format('h:mm:ss')}<small>${time.format("A")}</small></div>
    </div>
    <a href="#" class="back-link" onclick="showAllCities(event)">All Cities</a>
  `;
}

function showAllCities(event) {
  event.preventDefault();
  clearInterval(selectedCityInterval);
  allCitiesIntervals.forEach(interval => clearInterval(interval));
  allCitiesIntervals = [];
  
  citiesSelect.value = "";
  
  let html = `<div class="cities-grid">`;
  timezones.forEach(tz => {
    const label = timezoneLabels[tz];
    const time = moment.tz(tz);
    html += `
      <div class="city-card" data-tz="${tz}">
        <div class="city">
          <div>
            <h2>${label}</h2>
            <div class="date">${time.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${time.format('h:mm:ss')}<small>${time.format("A")}</small></div>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  citiesElement.innerHTML = html;
  
  // Update all cities every second
  const updateAllInterval = setInterval(() => {
    timezones.forEach(tz => {
      const card = document.querySelector(`[data-tz="${tz}"]`);
      if (card) {
        const time = moment.tz(tz);
        card.querySelector(".date").innerHTML = time.format("MMMM Do YYYY");
        card.querySelector(".time").innerHTML = `${time.format('h:mm:ss')}<small>${time.format("A")}</small>`;
      }
    });
  }, 1000);
  
  allCitiesIntervals.push(updateAllInterval);
  
  // Add click handlers to city cards
  document.querySelectorAll(".city-card").forEach(card => {
    card.addEventListener("click", () => {
      const tz = card.getAttribute("data-tz");
      citiesSelect.value = tz;
      updateCity({target: {value: tz, selectedOptions: [{textContent: timezoneLabels[tz]}]}});
    });
  });
}

function startCityClock(timeZone, label) {
  clearInterval(selectedCityInterval);
  allCitiesIntervals.forEach(interval => clearInterval(interval));
  allCitiesIntervals = [];

  function update() {
    const currentTime = timeZone ? moment.tz(timeZone) : moment();
    renderCityCard(label, currentTime);
  }

  update();
  selectedCityInterval = setInterval(update, 1000);
}

function updateCity(event) {
  const value = event.target.value;

  if (!value) {
    const localTZ = getLocalTimeZone();
    const localLabel = timezoneLabels[localTZ] || "Your Local Time";
    startCityClock(localTZ, localLabel);
    return;
  }

  const label = timezoneLabels[value] || event.target.selectedOptions[0]?.textContent || value;
  startCityClock(value, label);
}

const localTZ = getLocalTimeZone();
const localLabel = timezoneLabels[localTZ] || "Your Local Time";
startCityClock(localTZ, localLabel);

citiesSelect.addEventListener("change", updateCity);




