import parseToMovie from "./util/parse-to-movie.js";
/**
 * This function create a service to request data to MovieDB API.
 * @param {string} apiKey
 */
const apiService = (apiKey) => {
  const api = `?api_key=${apiKey}`;
  const url = "https://api.themoviedb.org/3";

  return {
    getPopularMovies: async () => {
      const data = await fetch(`${url}/movie/popular/${api}`);
      const results = (await data.json()).results;
      const arr = results.map(parseToMovie);
      return arr;
    },

    /**
     * This function returns the data about the requested movie
     * @param {string | number} movieId
     * @returns
     */
    getMovie: async (movieId) => {
      const data = await fetch(`${url}/movie/${movieId}/${api}`);
      const movie = await data.json();
      return parseToMovie(movie);
    },

    /**
     * This function sends a text query to the API and returns a movie list
     * @param {string} query
     * @returns
     */
    searchMovie: async (query) => {
      query = `&query=${query}`;
      const data = await fetch(`${url}/search/movie${api}${query}`);
      const results = (await data.json()).results;
      const arr = results.map(parseToMovie);
      return arr;
    },
  };
};

export default apiService;
