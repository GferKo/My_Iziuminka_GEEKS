// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)

// async await, try catch

const url = 'https://jsonplaceholder.typicode.com/posts/1';

const getPosts = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Ok')
    }
}

getPosts()

// const searchInput = document.querySelector('.cityName')
// const city = document.querySelector('.city')
// const temp = document.querySelector('.temp')
//
// const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
// const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
//
// searchInput.oninput = async () => {
//     try {
//
//     }
//     fetch(`${BASE_URL}?q=${searchInput.value}&appid=${API_KEY}&units=metric`)
//         .then(response => response.json())
//         .then(data => {
//             city.innerHTML = data.name || 'Город не найден'
//             temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + '&deg;C': 'Хз, в окно посмотри';
//
//         })
// }