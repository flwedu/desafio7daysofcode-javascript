import Movie from './model/Movie.js';
import parseToMovie from './util/parse-to-movie.js';

class ApiService {
  /**
   * This function create a service to request data to MovieDB API.
   * @param {string} apiKey
   */
  constructor(apiKey) {
    this.api = `?api_key=${apiKey}`;
    this.url = 'https://api.themoviedb.org/3';
  }

  /**
   * This function returns a list with all popular movies in the database
   * @returns {Movie[]} list of movies
   */
  async getPopularMovies() {
    const data = await fetch(`${this.url}/movie/popular/${this.api}`);
    const { results } = await data.json();
    const arr = results.map(parseToMovie);
    return arr;
  }

  /**
   * This function returns the data about the requested movie
   * @param {string | number} movieId
   * @returns {Movie} movie data
   */
  async getMovie(movieId) {
    const data = await fetch(`${this.url}/movie/${movieId}/${this.api}`);
    const movie = await data.json();
    return parseToMovie(movie);
  }

  /**
   * This function sends a text query to the API and returns a movie list
   * @param {string} query
   * @returns {Movie[]} list of movies
   */
  async searchMovie(query) {
    const $query = `&query=${query}`;
    const data = await fetch(`${this.url}/search/movie${this.api}${$query}`);
    const { results } = await data.json();
    const arr = results.map(parseToMovie);
    return arr;
  }
}

export default ApiService;
