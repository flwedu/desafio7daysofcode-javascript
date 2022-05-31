import Movie from "./model/Movie.js";
import StorageService from "./storage-service.js";
import renderMovie from "./util/render-movie.js";

class ListUpdater {
  /**
   * This class is responsible for update the innerHTML of list element.
   * @param {HtmlElement} el reference to the list element
   * @param {StorageService} storage
   */
  constructor(el, storage) {
    this.el = el;
    this.storage = storage;
    this.movies = [];
  }

  /**
   * Update the movie list and update the innerHTML of list element
   * @param {Movie[]} movies
   */
  setMovies(movies) {
    this.movies = movies;
    this.refresh();
  }

  /**
   * Update the innerHTML of list element
   */
  refresh() {
    this.el.innerHTML = "";
    this.movies.forEach((movie) => {
      //Check if movie is favorite
      movie.isFavorited = this.storage.getFavoriteStatus(movie.id);
      renderMovie(this.el, this.storage, movie);
    });
  }
}

export default ListUpdater;
