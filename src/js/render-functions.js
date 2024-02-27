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

form.addEventListener("submit", searchBtn);

function searchBtn(event) {
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

  //відмальовую
  setTimeout(() => {
    loader.classList.remove('spinner')
    //пішла обробка
    imageSearch(query).then(response => {
        if(response.hits.length === 0){
            iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
            });
        }
      gallery.innerHTML = response.hits.map(element => `<li class="item-gallery">
          <a class="load-link" href="${element.largeImageURL}"
            ><img
            class="load-image"
              src="${element.webformatURL}"
              width="360"
              alt="${element.tags}"
              title="${element.tags}"
          /></a>
          <ul class="load-list">
            <li>
              <h2>Likes</h2>
              <p>${element.likes}</p>
            </li>
            <li>
              <h2>Views</h2>
              <p>${element.views}</p>
            </li>
            <li>
              <h2>Comments</h2>
              <p>${element.comments}</p>
            </li>
            <li>
              <h2>Downloads</h2>
              <p>${element.downloads}</p>
            </li>
          </ul>
        </li>`).join('');
      const lightbox = new SimpleLightbox('.gallery>.item-gallery a', {
        //* options */
        backgroundColor: '#EF4040',
        captionsData: `alt`,
        captionDelay: 250,
      });
      //метод рефреш
      lightbox.refresh();
    }).catch(error => console.log(error))
  }, 500)
}
