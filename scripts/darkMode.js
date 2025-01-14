const modeButton = document.querySelector("#darkBtn");
const main = document.querySelector('main');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('images/moon.svg')) {
        main.style.background = "#000";
        main.style.color = "#fff"
        modeButton.textContent = 'images/sun.svg';
    } else {
        main.style.background = "#fff";
        main.style.color = "#000";
        modeButton.textContent = 'images/moon.svg';
    }
});