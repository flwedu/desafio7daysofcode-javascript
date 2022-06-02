import Movie from './model/Movie.js';
import StorageService from './storage-service.js';
import renderMovie from './util/render-movie.js';

class ListUpdater {
  /**
   * This class is responsible for update the innerHTML of list element.
   * @param {HtmlElement} htmlElReference reference to the list HTML element
   * @param {StorageService} storageService
   */
  constructor(htmlElReference, storageService) {
    this.htmlElReference = htmlElReference;
    this.storageService = storageService;
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
    this.htmlElReference.innerHTML = '';
    this.movies.forEach((movie) => {
      // Check if movie is favorite
      movie.isFavorited = this.storageService.getFavoriteStatus(movie.id);
      renderMovie(this.htmlElReference, this.storageService, movie);
    });
  }
}

export default ListUpdater;
