const startButton = document.querySelector('#start');
const box = document.querySelector('.box');
const resultDiv = document.querySelector('#result');
const image = document.querySelector('#image');

let timer;
let startTime;

startButton.onclick = () => {
    startButton.style.display = 'none';
    let countdown = Math.floor(Math.random() * 3000) + 2000;

    timer = setTimeout(() => {
        image.src = '../images/Villain_photo/bo.png';
        image.style.display = 'block';
        startTime = Date.now();
    }, countdown);
};

document.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' && startTime) {
        const reactionTime = Date.now() - startTime;
        clearTimeout(timer);
        image.style.display = 'none';
        resultDiv.textContent = `Время реакции: ${reactionTime} мс`;
        startButton.style.display = 'block';
        startTime = null;
    }
});
