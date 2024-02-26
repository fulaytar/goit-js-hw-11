// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import {imageSearch} from './pixabay-api'

const form = document.querySelector('#form');
const loader = document.querySelector('div');
const gallery = document.querySelector('.gallery');

form.addEventListener("submit", searchBtn);

function searchBtn(event) {
    event.preventDefault();
    const query = form.elements.input.value.trim();
    if (query === "") {
        return;
    }
    //тут очищаю перед заповненням
    gallery.innerHTML = '';
    //очистка інпута
    form.elements.input.value = "";
    //пішла обробка
    imageSearch(query).then(response => {
        if(response.hits.length === 0){
            iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
});
        }
        
        gallery.innerHTML= response.hits.map(element=> `<li class="item-gallery">
          <a class="load-link" href="${element.largeImageURL}/${element.webformatURL}"
            ><img
            class="load-image"
              src="${element.webformatURL}"
              width="360"
              height="360"
              alt="${element.tags}"
              title="${element.tags}"
          /></a>
          <ul class="load-list">
            <li>
              <h1>Likes</h1>
              <p>${element.likes}</p>
            </li>
            <li>
              <h1>Views</h1>
              <p>${element.views}</p>
            </li>
            <li>
              <h1>Comments</h1>
              <p>${element.comments}</p>
            </li>
            <li>
              <h1>Downloads</h1>
              <p>${element.downloads}</p>
            </li>
          </ul>
        </li>`).join('')
        

    }).catch(error => console.log(error))
    
}
