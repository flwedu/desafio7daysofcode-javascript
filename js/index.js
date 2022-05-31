import config from "../config.js";
import ApiService from "./api-service.js";
import ListUpdater from "./list-updater.js";
import StorageService from "./storage-service.js";

const service = new ApiService(config.API_KEY);
const storage = new StorageService("favorites_movies_db");

const favoritesCheckbox = document.getElementById("favorites");
const listEl = document.getElementById("list");
const listUpdater = new ListUpdater(listEl, storage);
let allMovies = [];

service.getPopularMovies().then((results) => {
  allMovies = results;
  listUpdater.setMovies(allMovies);
});

// Show only favorites movies
favoritesCheckbox.addEventListener("change", () => {
  if (favoritesCheckbox.checked)
    return listUpdater.setMovies(
      allMovies.filter((movie) => movie.isFavorited === true)
    );
  return listUpdater.setMovies(allMovies);
});

// Search form
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  service
    .searchMovie(form["query"].value)
    .then((results) => listUpdater.setMovies(results));
});
