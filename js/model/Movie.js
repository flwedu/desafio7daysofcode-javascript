class Movie {
  /**
   * This class represents a movie data
   * @param {number} id
   * @param {string} image
   * @param {string} title
   * @param {string} rating
   * @param {string} year
   * @param {string} description
   * @param {boolean} isFavorited
   */
  constructor(id, image, title, rating, year, description, isFavorited) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.rating = rating;
    this.year = year;
    this.description = description;
    this.isFavorited = isFavorited;
  }
}

export default Movie;
