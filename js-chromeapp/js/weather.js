const API_KEY = 'c92b649c658a65773de99ab51b6f4304';
const city = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:last-child');

function onGeoOk(position) {
    const latitude = position.coords.latitude; // 위도
    const longitude = position.coords.longitude; // 경도
    console.log(`You live in (${latitude} / ${longitude})`);
    URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const weatherInfo = fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        });
    console.log(weatherInfo); // => pending
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
