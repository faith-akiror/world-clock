# World Clock

[![Live Demo](https://img.shields.io/badge/demo-Netlify-blue?style=for-the-badge&logo=netlify)](https://world-clock-faith.netlify.app/#) [![Tech Stack](https://img.shields.io/badge/tech-HTML%20%2B%20CSS%20%2B%20JavaScript-orange?style=for-the-badge)](https://github.com/) [![Status](https://img.shields.io/badge/status-Prototype-yellow?style=for-the-badge)]

A static, responsive world clock web app that shows the current time and date for cities across the globe.

The app detects your local timezone automatically and updates the display every second. It also includes a full city grid view so you can browse many world timezones at once.

## Features

- Automatically detects and displays the user's local timezone
- Live updating clock (seconds refresh every second)
- Dropdown city selector with grouped regions
- Full "All Cities" grid view showing hundreds of timezones
- Click any city card in the grid to view its detailed time display
- Includes local date and time for each city
- Fully responsive layout for desktop and mobile
- Styled with clean, modern CSS and a soft gradient UI

## What the App Includes

- `index.html` — app markup and city dropdown with optgroup regions
- `css/style.css` — responsive styling and city card visuals
- `javascript/index.js` — timezone logic, city selection, live updates, and grid rendering
- Moment.js and Moment Timezone loaded from CDN in the `index.html` head for timezone support
- Hosted live on Netlify: `https://world-clock-faith.netlify.app/#`

## Supported Timezones

The app includes a large collection of world timezones, including cities from:

- North America (USA, Canada, Mexico)
- Central America and the Caribbean
- South America
- Europe (Western, Central, Eastern)
- Africa (North, West, East, South)
- Middle East
- South Asia
- Southeast Asia
- East Asia
- Oceania and Pacific Islands
- Indian Ocean islands

## How It Works

1. When the page loads, the app detects the local timezone and starts the clock.
2. Selecting a city from the dropdown shows that city's current date and time.
3. Clicking "View All Cities" renders a grid of all supported city cards.
4. Each card updates every second and can be clicked to return to the single-city view.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/world-clock.git
```

2. Open `index.html` in a web browser.

No build tools or backend server are required.

## Live Demo

- Visit the hosted app at: https://world-clock-faith.netlify.app/#

## Usage

- Use the dropdown to select a city.
- Press "View All Cities" to explore all available timezones.
- Click a city card in the grid to view its detailed time display.
- Use "Back to Local Time" to return to your local clock.

## Notes

- This app is fully static and works entirely in the browser.
- It uses Moment.js and Moment Timezone for consistent timezone handling.
- The current implementation relies on the timezone data bundled in the CDN script.

## Future Improvements

- Search bar for direct city lookup
- Dark mode theme
- Analog clock display option
- Display multiple selected cities at once
- Weather or daylight indicator for each city
- Offline-first or PWA support

## License

This project is open source and available for reuse.

## Author

Faith Akiror