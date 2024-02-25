// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('#form');
const loader = document.querySelector('div');
const gallery = document.querySelector('.gallery');

const KEY = '42512842-e518c28c0b42a0fb4c46a85d3';
const BASE_URL = 'https://pixabay.com/api/';
let QUERY = '';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal'; 
const SAFESEARCH = true;




form.addEventListener('submit', startSearch);

function startSearch(event) {
    event.preventDefault();
    const input = form.elements.input.value.trim();
    if (input === "") {
        return;
    }
    QUERY = input;
    let LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;
    console.log(QUERY);
    form.elements.input.value = "";
    console.log(input);
    fetch(LINK).then(response => {
        if (!response.ok) {
            throw new Error('Image error')
        }
        return response.json();
    }).then(data => {
        gallery.innerHTML = "";
        const images = data.hits;
        gallery.innerHTML = images.map(({ webformatURL }) => {
            return `<img src="${webformatURL}" width="360" height="360">`
        }).join('')
    }).catch(error => {
        iziToast.show({
    title: 'Hey',
    message: 'What would you like to add?'
});
    })

}
