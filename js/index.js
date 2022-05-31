import config from "../config.js";
import ApiService from "./api-service.js";
import ListUpdater from "./list-updater.js";
import StorageService from "./storage-service.js";

const service = new ApiService(config.API_KEY);
const storage = new StorageService("favorites_movies_db");

const favoritesCheckbox = document.getElementById("favorites");
const listEl = document.getElementById("list");
const listUpdater = new ListUpdater(listEl, storage);
let popularMovies = [];
let searchedMovies = [];

service.getPopularMovies().then((results) => {
  popularMovies = results;
  searchedMovies = results;
  listUpdater.setMovies(popularMovies);
});

// Show only favorites movies
favoritesCheckbox.addEventListener("change", () => {
  if (favoritesCheckbox.checked)
    return listUpdater.setMovies(
      searchedMovies.filter((movie) => movie.isFavorited === true)
    );
  return listUpdater.setMovies(searchedMovies);
});

// Search form
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = form["query"].value;
  if (query) {
    return service.searchMovie(form["query"].value).then((results) => {
      searchedMovies = results;
      listUpdater.setMovies(searchedMovies);
    });
  }
  searchedMovies = popularMovies;
  return listUpdater.setMovies(searchedMovies);
});
