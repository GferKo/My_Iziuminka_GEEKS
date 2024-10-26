document.addEventListener('DOMContentLoaded', fetchCards);

async function fetchCards() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        renderCards(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function renderCards(data) {
    const cardsBox = document.querySelector('.cards_box');
    cardsBox.innerHTML = '';

    const limitedData = data.slice(0, 4);

    limitedData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="https://tv-gubernia.ru/wp-content/uploads/2023/03/ks.jpg" alt="Image" />
            <h3>${item.title}</h3>
            <p>${item.body}</p>
        `;
        cardsBox.appendChild(card);
    });
}
