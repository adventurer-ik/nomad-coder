const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    clock.innerText = new Date().toLocaleTimeString();
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');
    // clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// Life is a series of building, testing, changing and iterating.
