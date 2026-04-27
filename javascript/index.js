const citiesElement = document.querySelector("#cities");
const citiesSelect = document.querySelector("#city");
let selectedCityInterval;
let allCitiesIntervals = [];

const timezoneLabels = {
  // North America - USA
  "America/New_York": "New York, USA",
  "America/Los_Angeles": "Los Angeles, USA",
  "America/Chicago": "Chicago, USA",
  "America/Denver": "Denver, USA",
  "America/Anchorage": "Anchorage, USA",
  "Pacific/Honolulu": "Honolulu, USA",
  "America/Phoenix": "Phoenix, USA",
  "America/Seattle": "Seattle, USA",
  "America/San_Francisco": "San Francisco, USA",
  "America/Las_Vegas": "Las Vegas, USA",
  "America/Salt_Lake_City": "Salt Lake City, USA",
  "America/Detroit": "Detroit, USA",
  "America/Atlanta": "Atlanta, USA",
  "America/Miami": "Miami, USA",
  "America/Boston": "Boston, USA",
  "America/Philadelphia": "Philadelphia, USA",
  "America/Houston": "Houston, USA",
  "America/Dallas": "Dallas, USA",
  "America/Minneapolis": "Minneapolis, USA",
  "America/New_Orleans": "New Orleans, USA",
  "America/Austin": "Austin, USA",
  "America/Portland": "Portland, USA",
  
  // North America - Canada
  "America/Toronto": "Toronto, Canada",
  "America/Vancouver": "Vancouver, Canada",
  "America/Montreal": "Montreal, Canada",
  "America/Calgary": "Calgary, Canada",
  "America/Edmonton": "Edmonton, Canada",
  "America/Winnipeg": "Winnipeg, Canada",
  
  // North America - Mexico & Central America
  "America/Mexico_City": "Mexico City, Mexico",
  "America/Cancun": "Cancun, Mexico",
  "America/Costa_Rica": "San Jose, Costa Rica",
  "America/Panama": "Panama City, Panama",
  
  // Caribbean
  "America/Havana": "Havana, Cuba",
  "America/Santo_Domingo": "Santo Domingo, Dominican Republic",
  "America/Puerto_Rico": "San Juan, Puerto Rico",
  "America/Jamaica": "Kingston, Jamaica",
  "America/Barbados": "Bridgetown, Barbados",
  "America/Trinidad": "Port of Spain, Trinidad and Tobago",
  
  // South America - Brazil
  "America/Sao_Paulo": "Sao Paulo, Brazil",
  "America/Rio_Branco": "Rio Branco, Brazil",
  "America/Manaus": "Manaus, Brazil",
  "America/Bahia": "Salvador, Brazil",
  
  // South America - Rest
  "America/Argentina/Buenos_Aires": "Buenos Aires, Argentina",
  "America/Chile/Santiago": "Santiago, Chile",
  "America/Lima": "Lima, Peru",
  "America/Bogota": "Bogota, Colombia",
  "America/Caracas": "Caracas, Venezuela",
  "America/Guayaquil": "Quito, Ecuador",
  "America/Paramaribo": "Paramaribo, Suriname",
  "America/Cayenne": "Cayenne, French Guiana",
  "America/Asuncion": "Asuncion, Paraguay",
  "America/Montevideo": "Montevideo, Uruguay",
  
  // Europe - Western
  "Europe/London": "London, United Kingdom",
  "Europe/Paris": "Paris, France",
  "Europe/Berlin": "Berlin, Germany",
  "Europe/Madrid": "Madrid, Spain",
  "Europe/Rome": "Rome, Italy",
  "Europe/Amsterdam": "Amsterdam, Netherlands",
  "Europe/Zurich": "Zurich, Switzerland",
  "Europe/Vienna": "Vienna, Austria",
  "Europe/Brussels": "Brussels, Belgium",
  "Europe/Lisbon": "Lisbon, Portugal",
  "Europe/Dublin": "Dublin, Ireland",
  "Europe/Bern": "Bern, Switzerland",
  "Europe/Venice": "Venice, Italy",
  "Europe/Milan": "Milan, Italy",
  "Europe/Munich": "Munich, Germany",
  "Europe/Frankfurt": "Frankfurt, Germany",
  "Europe/Zurich": "Zurich, Switzerland",
  "Europe/Barcelona": "Barcelona, Spain",
  "Europe/Valencia": "Valencia, Spain",
  "Europe/Cologne": "Cologne, Germany",
  "Europe/Antwerp": "Antwerp, Belgium",
  
  // Europe - Central & Eastern
  "Europe/Prague": "Prague, Czech Republic",
  "Europe/Budapest": "Budapest, Hungary",
  "Europe/Warsaw": "Warsaw, Poland",
  "Europe/Krakow": "Krakow, Poland",
  "Europe/Athens": "Athens, Greece",
  "Europe/Istanbul": "Istanbul, Turkey",
  "Europe/Moscow": "Moscow, Russia",
  "Europe/Belgrade": "Belgrade, Serbia",
  "Europe/Bucharest": "Bucharest, Romania",
  "Europe/Sofia": "Sofia, Bulgaria",
  "Europe/Riga": "Riga, Latvia",
  "Europe/Tallinn": "Tallinn, Estonia",
  "Europe/Vilnius": "Vilnius, Lithuania",
  "Europe/Stockholm": "Stockholm, Sweden",
  "Europe/Copenhagen": "Copenhagen, Denmark",
  "Europe/Helsinki": "Helsinki, Finland",
  "Atlantic/Reykjavik": "Reykjavik, Iceland",
  
  // Africa - North
  "Africa/Cairo": "Cairo, Egypt",
  "Africa/Casablanca": "Casablanca, Morocco",
  "Africa/Algiers": "Algiers, Algeria",
  "Africa/Tunis": "Tunis, Tunisia",
  "Africa/Khartoum": "Khartoum, Sudan",
  
  // Africa - West
  "Africa/Lagos": "Lagos, Nigeria",
  "Africa/Accra": "Accra, Ghana",
  "Africa/Dakar": "Dakar, Senegal",
  "Africa/Douala": "Douala, Cameroon",
  
  // Africa - Central & South
  "Africa/Johannesburg": "Johannesburg, South Africa",
  "Africa/Nairobi": "Nairobi, Kenya",
  "Africa/Kampala": "Kampala, Uganda",
  "Africa/Dar_es_Salaam": "Dar es Salaam, Tanzania",
  "Africa/Addis_Ababa": "Addis Ababa, Ethiopia",
  "Africa/Kinshasa": "Kinshasa, Democratic Republic of Congo",
  "Africa/Luanda": "Luanda, Angola",
  "Africa/Harare": "Harare, Zimbabwe",
  "Africa/Lusaka": "Lusaka, Zambia",
  "Africa/Gaborone": "Gaborone, Botswana",
  "Africa/Windhoek": "Windhoek, Namibia",
  
  // Middle East
  "Asia/Dubai": "Dubai, UAE",
  "Asia/Abu_Dhabi": "Abu Dhabi, UAE",
  "Asia/Riyadh": "Riyadh, Saudi Arabia",
  "Asia/Jerusalem": "Jerusalem, Israel",
  "Asia/Baghdad": "Baghdad, Iraq",
  "Asia/Tehran": "Tehran, Iran",
  "Asia/Amman": "Amman, Jordan",
  "Asia/Beirut": "Beirut, Lebanon",
  "Asia/Qatar": "Doha, Qatar",
  "Asia/Kuwait": "Kuwait City, Kuwait",
  "Asia/Muscat": "Muscat, Oman",
  "Asia/Aden": "Sana'a, Yemen",
  
  // South Asia
  "Asia/Kolkata": "New Delhi, India",
  "Asia/Mumbai": "Mumbai, India",
  "Asia/Kolkata": "Kolkata, India",
  "Asia/Bangalore": "Bangalore, India",
  "Asia/Karachi": "Karachi, Pakistan",
  "Asia/Lahore": "Lahore, Pakistan",
  "Asia/Dhaka": "Dhaka, Bangladesh",
  "Asia/Colombo": "Colombo, Sri Lanka",
  "Indian/Maldives": "Male, Maldives",
  "Asia/Kathmandu": "Kathmandu, Nepal",
  "Asia/Thimphu": "Thimphu, Bhutan",
  
  // Southeast Asia
  "Asia/Bangkok": "Bangkok, Thailand",
  "Asia/Singapore": "Singapore",
  "Asia/Jakarta": "Jakarta, Indonesia",
  "Asia/Kuala_Lumpur": "Kuala Lumpur, Malaysia",
  "Asia/Ho_Chi_Minh": "Ho Chi Minh City, Vietnam",
  "Asia/Manila": "Manila, Philippines",
  "Asia/Yangon": "Yangon, Myanmar",
  "Asia/Phnom_Penh": "Phnom Penh, Cambodia",
  "Asia/Hanoi": "Hanoi, Vietnam",
  "Asia/Brunei": "Bandar Seri Begawan, Brunei",
  "Asia/Dili": "Dili, East Timor",
  
  // East Asia
  "Asia/Tokyo": "Tokyo, Japan",
  "Asia/Hong_Kong": "Hong Kong",
  "Asia/Shanghai": "Shanghai, China",
  "Asia/Beijing": "Beijing, China",
  "Asia/Seoul": "Seoul, South Korea",
  "Asia/Taipei": "Taipei, Taiwan",
  "Asia/Ulaanbaatar": "Ulaanbaatar, Mongolia",
  "Asia/Pyongyang": "Pyongyang, North Korea",
  
  // Oceania - Australia
  "Australia/Sydney": "Sydney, Australia",
  "Australia/Melbourne": "Melbourne, Australia",
  "Australia/Brisbane": "Brisbane, Australia",
  "Australia/Perth": "Perth, Australia",
  "Australia/Adelaide": "Adelaide, Australia",
  "Australia/Hobart": "Hobart, Australia",
  "Australia/Darwin": "Darwin, Australia",
  
  // Oceania - New Zealand & Pacific
  "Pacific/Auckland": "Auckland, New Zealand",
  "Pacific/Wellington": "Wellington, New Zealand",
  "Pacific/Fiji": "Suva, Fiji",
  "Pacific/Samoa": "Apia, Samoa",
  "Pacific/Tongatapu": "Nuku'alofa, Tonga",
  "Pacific/Vanuatu": "Port Vila, Vanuatu",
  "Pacific/Guam": "Hagatna, Guam",
  "Pacific/Palau": "Koror, Palau",
  "Pacific/Kiritimati": "Kiritimati, Kiribati",
  "Pacific/Nauru": "Nauru",
  "Pacific/Majuro": "Majuro, Marshall Islands",
  "Pacific/Pohnpei": "Kolonia, Micronesia",
  "Pacific/Guadalcanal": "Honiara, Solomon Islands",
  
  // Indian Ocean
  "Indian/Mauritius": "Port Louis, Mauritius",
  "Indian/Seychelles": "Victoria, Seychelles"
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
    <div style="text-align: center; margin-top: 20px;">
      <a href="#" class="back-link" onclick="showAllCities(event)">🌍 View All Cities</a>
    </div>
  `;
}

function showAllCities(event) {
  event.preventDefault();
  clearInterval(selectedCityInterval);
  allCitiesIntervals.forEach(interval => clearInterval(interval));
  allCitiesIntervals = [];
  
  citiesSelect.value = "";
  
  let html = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="margin: 0 0 10px 0; color: #333;">World Clock - All Cities</h2>
      <p style="margin: 0; color: #666; font-size: 16px;">Click on any city to view its details</p>
    </div>
    <div class="cities-grid">
  `;
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
  html += `
    </div>
    <div style="text-align: center; margin-top: 30px;">
      <a href="#" class="back-link" onclick="resetToLocalTime(event)">← Back to Local Time</a>
    </div>
  `;
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




