import parseToMovie from "./util/parse-to-movie.js";
/**
 * This function create a service to request data to MovieDB API.
 * @param {string} apiKey
 */
const apiService = (apiKey) => {
  const api = `?api_key=${apiKey}`;
  const url = "https://api.themoviedb.org/3/movie";

  return {
    getPopularMovies: async () => {
      const data = await fetch(`${url}/popular/${api}`);
      const results = await data.json().results;
      const arr = results.map(parseToMovie);
      return arr;
    },

    /**
     * This function returns the data about the requested movie
     * @param {string | number} movieId
     * @returns
     */
    getMovie: async (movieId) => {
      const data = await fetch(`${url}/${movieId}/${api}`);
      const movie = await data.json();
      return parseToMovie(movie);
    },
  };
};

export default apiService;
