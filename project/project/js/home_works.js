const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-z0-9_.%+-]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'COOL'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT COOL'
        gmailResult.style.color = 'red'
    }
};



const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let positionX = 0;
let positionY = 0;
const step = 5;
const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

function moveBlock() {
    if (positionX < offsetWidth && positionY === 0) {
        childBlock.style.left = `${positionX}px`;
        positionX += step;
    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        childBlock.style.top = `${positionY}px`;
        positionY += step;
    } else if (positionX > 0 && positionY >= offsetHeight) {
        childBlock.style.left = `${positionX}px`;
        positionX -= step;
    } else if (positionX <= 0 && positionY > 0) {
        childBlock.style.top = `${positionY}px`;
        positionY -= step;
    }
    requestAnimationFrame(moveBlock);
}
moveBlock()

let seconds = 0;
let intervalId = null;

const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            seconds++;
            secondsDisplay.textContent = seconds;
        }, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    secondsDisplay.textContent = seconds;
});


//Cards

function loadCharacters() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/persons.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const charactersList = document.querySelector('.characters-list');

            data.forEach(character => {
                const card = document.createElement('div');
                card.classList.add('character-card');
                card.innerHTML = `
                            <img src="${character.person_photo}" alt="${character.name}" />
                            <h3>${character.name}</h3>
                            <p>Age: ${character.age}</p>
                        `;
                charactersList.appendChild(card);
            });
        }
    };
    xhr.send();
}

loadCharacters();

// CARD 2-task

const xhr = new XMLHttpRequest();

xhr.open("GET", "/data/any.json", true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);

        console.log(data);
    }
};

xhr.send();
