// //MODAL
//
// const modal = document.querySelector('.modal');
// const modalTrigger = document.querySelector('#btn-get');
// const closeIcon = document.querySelector('.modal_close');
//
// const openModal = () => {
//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// }
//
// const closeModal = () => {
//     modal.style.display = 'none';
//     document.body.style.overflow = '';
// }
//
// modalTrigger.onclick = () => openModal()
// closeIcon.onclick = () => closeModal()
// modal.onclick = (event) => {
//     if (event.target === modal) {
//         closeModal()
//     }
// }
//
// //DZ 3 task 2 & 3
// let isModalOpened = false;
//
// const showModalOnScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isModalOpened) {
//         openModal();
//         isModalOpened = true;
//         window.removeEventListener('scroll', showModalOnScroll);
//     }
// };
//
// window.addEventListener('scroll', showModalOnScroll);
//
// setTimeout(openModal, 10000);


//POST DATA

// const form = document.querySelector('form');
//
// const chat_id = '@botbbbott'
// const token = '7687208324:AAEYjb7VqPR93IF6_DgV_Nzy1U-PGT16hMs'
// const api_url =`https://api.telegram.org/bot${token}/sendMessage`
//
// form.onsubmit = (event) => {
//     event.preventDefault();
//
//     const formData = new FormData(form);
//     const user = {}
//     formData.forEach((item) => {
//         user[index] = item
//     })
//     const {name, phone} = user
//     const text = `Имя: ${name}\nНомер: ${phone}`
//
//     fetch(api_url, {
//         method: 'POST',
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({chat_id: chat_id, text})
//     })
// }