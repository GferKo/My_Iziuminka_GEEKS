// PHONE CHECKER

const phoneInput = document.querySelector('#phone-input');
const phoneButton = document.querySelector('#phone-button');
const phoneResult = document.querySelector('#phone-result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.innerHTML = 'OK'
//         phoneResult.style.color = 'green';
//     } else {
//         phoneResult.innerHTML = 'ERROR'
//         phoneResult.style.color = 'red';
//     }
// }

//tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    });
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    });
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}


// DZ 3 task 1
let currentIndex = 0;

const autoSlide = () => {
    currentIndex = (currentIndex + 1) % tabContentBlocks.length;
    hideTabContent();
    showTabContent(currentIndex);
}

setInterval(autoSlide, 3000);


//CONVERTER

const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');

const fetchData = async () => {
    const response = await fetch('../data/converter.json', {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await response.json();
};

const converter = (element) => {
    element.oninput = async () => {
        const data = await fetchData();
        const usdToSom = 1 / data.usd;
        const eurToSom = 1 / data.eur;

        if (element.id === 'som') {
            const somValue = parseFloat(element.value) || 0;
            usdInput.value = (somValue * usdToSom).toFixed(2);
            eurInput.value = (somValue * eurToSom).toFixed(2);
        } else if (element.id === 'usd') {
            const usdValue = parseFloat(element.value) || 0;
            somInput.value = (usdValue * data.usd).toFixed(2);
            eurInput.value = (usdValue * (data.usd / data.eur)).toFixed(2);
        } else if (element.id === 'eur') {
            const eurValue = parseFloat(element.value) || 0;
            somInput.value = (eurValue * data.eur).toFixed(2);
            usdInput.value = (eurValue * (data.eur / data.usd)).toFixed(2);
        }

        if (element.value === '') {
            somInput.value = '';
            usdInput.value = '';
            eurInput.value = '';
        }
    };
};

converter(somInput);
converter(usdInput);
converter(eurInput);


// DRY - don't repeat yourself
// KISS - keep it simple, stupid - делай это проще, идиот

//CARD SWITCHER

const card = document.querySelector('.card')
const prevButton = document.querySelector('#btn-prev')
const nextButton = document.querySelector('#btn-next')

let cardId = 1

const fetchCard = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const { id: todoId, title, completed } = data;
        card.innerHTML = `
            <p>${title}</p>
            <p>${completed}</p>
            <span>${todoId}</span>
        `;
    } catch (error) {
        console.error('Fetch error:', error);
        card.innerHTML = `<p>Error loading card</p>`;
    }
};


fetchCard(cardId);

nextButton.onclick = () => {
    cardId = (cardId % 200) + 1;
    fetchCard(cardId);
};

prevButton.onclick = () => {
    cardId = cardId === 1 ? 200 : cardId - 1;
    fetchCard(cardId);
};

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))

// WEATHER

const searchInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

// searchInput.oninput = () => {
//     fetch(`${BASE_URL}?q=${searchInput.value}&appid=${API_KEY}&units=metric`)
//         .then(response => response.json())
//         .then(data => {
//             city.innerHTML = data.name || 'Город не найден'
//             temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + '&deg;C': 'Хз, в окно посмотри';
//
//         })
// }
searchInput.oninput = async () => {
    try {
        const response = await fetch(`${BASE_URL}?q=${searchInput.value}&appid=${API_KEY}&units=metric`)
        const data = await response.json()
        city.innerHTML = data.name || 'Город не найден'
        temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + '&deg;C': 'Хз, в окно посмотри';
    } catch (e) {
        console.log(e)
    }
}

// Optional chaining