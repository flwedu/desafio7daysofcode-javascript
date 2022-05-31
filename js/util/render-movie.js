import Movie from "../model/Movie.js";
import StorageService from "../storage-service.js";
/**
 * This function append a child with generated HTML with the movie in content.
 * @param {HTMLElement} htmlEl
 * @param {StorageService} storage
 * @param {Movie} movie
 * @returns
 */
const renderMovie = (htmlEl, storage, movie) => {
  const card = document.createElement("div");
  card.className = "card shadow rounded grid";
  card.innerHTML = `
<div class="left">
    <img
    class="full-rounded"
    src=${movie.image}
    alt="Imagem do poster do filme"
    />
</div>
<div class="info">
    <h2>${movie.title} (${movie.year})</h2>
    <span id="rating"><img
        id="rating-img"
        src="./static/star.svg"
        alt="Estrela representando o rating do filme"
    />${movie.rating}</span>
    <span id="heart"><img
        id="heart-img"
        src=${getImgSrcForHeart(movie.isFavorited)}
        alt="Coração representando se o filme está nos favoritos"
    />Favoritar</span>
</div>
<div class="description">
    <p>
    ${movie.description}
    </p>
</div>
`;
  // click on the heart (favorite/unfavorite) button)
  const heart = card.querySelector("#heart");
  heart.addEventListener("click", (event) => {
    movie.isFavorited = !movie.isFavorited;
    storage.saveOrRemoveId(movie.id, movie.isFavorited);
    heart.querySelector("img").src = getImgSrcForHeart(movie.isFavorited);
  });
  htmlEl.appendChild(card);
};

/**
 * This function returns the img src to heart element based on the movie.isFavorited attribute
 * @param {boolean} status
 */
function getImgSrcForHeart(status) {
  return status ? "./static/heart-on.svg" : "./static/heart-off.svg";
}

export default renderMovie;
