import config from "../config.js";
import apiService from "./api-service.js";
import renderMovie from "./util/render-movie.js";

const listEl = document.getElementById("list");
const renderMovieInList = renderMovie.bind(this, listEl);

const service = apiService(config.API_KEY);
service.getPopularMovies().then((results) => {
  results.forEach(renderMovieInList);
});

// Form actions
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  service.searchMovie(form["query"].value).then((results) => {
    results.forEach(renderMovieInList);
  });
});
