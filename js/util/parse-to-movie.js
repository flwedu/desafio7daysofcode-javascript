import Movie from '../model/Movie.js';

/**
 * This function is responsible for parse a response body data in a Movie object
 * @param {*} data
 * @returns {Movie} a Movie object
 */
const parseToMovie = (data) => {
  const image = `https://www.themoviedb.org/t/p/w300${data.poster_path}`;
  const year = String(data.release_date).slice(0, 4);

  return new Movie(
    data.id,
    image,
    data.title,
    data.vote_average,
    year,
    data.overview,
    false
  );
};

export default parseToMovie;
