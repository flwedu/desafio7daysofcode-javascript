import config from "../config.js";
import apiService from "./api-service.js";
import ListUpdater from "./list-updater.js";

const listEl = document.getElementById("list");
const listUpdater = new ListUpdater(listEl);

const service = apiService(config.API_KEY);
service.getPopularMovies().then((results) => listUpdater.setMovies(results));

// Form actions
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  service
    .searchMovie(form["query"].value)
    .then((results) => listUpdater.setMovies(results));
});
