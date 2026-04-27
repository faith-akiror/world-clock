const citiesElement = document.querySelector("#cities");
const citiesSelect = document.querySelector("#city");
let selectedCityInterval;

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
    <a href="/" class="back-link">All Cities</a>
  `;
}

function startCityClock(timeZone, label) {
  clearInterval(selectedCityInterval);

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



