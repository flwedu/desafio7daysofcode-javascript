import config from '../config.js';
import ApiService from './api-service.js';
import ListUpdater from './list-updater.js';
import StorageService from './storage-service.js';

const favoritesCheckboxHtmlEl = document.getElementById('favorites');
const listHtmlElement = document.getElementById('list');
const form = document.getElementById('form');

const storageService = new StorageService('favorites_movies_db');
const apiService = new ApiService(config.API_KEY);
const listUpdater = new ListUpdater(listHtmlElement, storageService);

let popularMovies = [];
let searchedMovies = [];

function updateViewAndMoviesListWithResults(results) {
  popularMovies = results;
  searchedMovies = results;
  listUpdater.setMovies(popularMovies);
}

apiService.getPopularMovies().then(updateViewAndMoviesListWithResults);

function toggleShowOnlyFavoritesMovies() {
  if (favoritesCheckboxHtmlEl.checked)
    return listUpdater.setMovies(
      searchedMovies.filter((movie) => movie.isFavorited === true)
    );
  return listUpdater.setMovies(searchedMovies);
}

favoritesCheckboxHtmlEl.addEventListener(
  'change',
  toggleShowOnlyFavoritesMovies
);

// Search form
function searchInApi($event) {
  $event.preventDefault();
  const query = form.query.value;
  if (query) {
    return service.searchMovie(form.query.value).then((results) => {
      searchedMovies = results;
      listUpdater.setMovies(searchedMovies);
    });
  }
  searchedMovies = popularMovies;
  return listUpdater.setMovies(searchedMovies);
}

form.addEventListener('submit', searchInApi);
