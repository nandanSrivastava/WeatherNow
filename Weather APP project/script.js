const apiKey = '8ec450b3f6864bd1b4f215636231908'; 

const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', () => { const city = cityInput.value.trim();
    if (city !== '') {
        getWeatherData(city);
    }
});

function getWeatherData(city) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${'8ec450b3f6864bd1b4f215636231908'}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(data) {
    const location = data.location.name + ', ' + data.location.country;
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;

    const weatherHTML = `
        <h2>${location}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${condition}</p>
    `;

    weatherInfo.innerHTML = weatherHTML;
}
