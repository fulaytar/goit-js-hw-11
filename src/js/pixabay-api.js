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
/* const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal'; */

const LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}`;


form.addEventListener('submit', startSearch);

function startSearch(event) {
    event.preventDefault();
    const input = form.elements.input.value.trim();
    form.elements.input.value = "";
    console.log(input)
}
