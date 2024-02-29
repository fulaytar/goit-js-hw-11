// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
//імпорт функці з другого файлу
import { imageSearch } from './pixabay-api'
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('#form');
const loader = document.querySelector('div');
const gallery = document.querySelector('.gallery');

//використовую бібліотеку
const lightbox = new SimpleLightbox('.gallery>.item-gallery a', {
        //* options */
        backgroundColor: '#EF4040',
        captionsData: `alt`,
        captionDelay: 250,
});
      
//навішую подію
form.addEventListener("submit", searchImages);

//функція яка відмальовує сторінку
function addImagesMarcup(largeImageURL, webformatURL, tags, likes, views, comments, downloads) {
  return  `
  <li class="item-gallery">
    <a class="load-link" href="${largeImageURL}">
      <img class="load-image" src="${webformatURL}" width="360" alt="${tags}" title="${tags}">
    </a>
    <ul class="load-list">
      <li>
        <h2>Likes</h2>
        <p>${likes}</p>
      </li>
      <li>
        <h2>Views</h2>
        <p>${views}</p>
      </li>
      <li>
        <h2>Comments</h2>
        <p>${comments}</p>
      </li>
      <li>
        <h2>Downloads</h2>
        <p>${downloads}</p>
      </li>
    </ul>
  </li>
`;
}

//обробка кліка
function searchImages(event) {
  event.preventDefault();
  //зберігаю значення інпута
  const query = form.elements.input.value.trim();

  //очистка інпута
  form.elements.input.value = "";

  //перевірка інпута
  if (query === "") {
    iziToast.error({
    title: 'Error',
    message: 'Enter a value',
    position: 'topRight',
            })
        return;
    }
  //тут очищаю перед заповненням
  gallery.innerHTML = '';

  //включаю лоадер
  loader.classList.add('spinner');
  
    //пішла обробка
    imageSearch(query).then(response => {
        if(response.hits.length === 0){
            iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
            });
      }
      //відмальовую
      gallery.innerHTML = response.hits.map(item => addImagesMarcup(item.largeImageURL, item.webformatURL, item.tags, item.likes, item.views, item.comments, item.downloads)).join('');

      //метод рефреш
      lightbox.refresh();
    }).catch(error => console.log(error)).finally(() => {
      loader.classList.remove('spinner')
    })
}

