let clicks = 0;

const button = document.getElementById('clickButton');
const counter = document.getElementById('counter');

button.addEventListener('click', () => {
    clicks++;
    counter.textContent = `Clicks: ${clicks}`;
});
