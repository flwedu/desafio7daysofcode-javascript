import Movie from "./model/Movie.js";
import renderMovie from "./util/render-movie.js";

class ListUpdater {
  /**
   * This class is responsible for update the innerHTML of list element.
   * @param {HtmlElement} el reference to the list element
   */
  constructor(el) {
    this.el = el;
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
      renderMovie(this.el, movie);
    });
  }
}

export default ListUpdater;
