import Movie from '../model/Movie.js';
import StorageService from '../storage-service.js';

/**
 * This function returns the img src to heart element based on the movie.isFavorited attribute
 * @param {boolean} status
 */
function getImgSrcForHeart(status) {
  return status ? './static/heart-on.svg' : './static/heart-off.svg';
}

/**
 * This function append a child with generated HTML with the movie in content.
 * @param {HTMLElement} htmlElReference
 * @param {StorageService} storageService
 * @param {Movie} movie
 * @returns
 */
const renderMovie = (htmlElReference, storageService, movie) => {
  const card = document.createElement('div');
  card.className = 'card shadow rounded grid';
  card.innerHTML = `
<div class="left align-center">
    <img
    class="full-rounded"
    src=${movie.image}
    alt="Imagem do poster do filme"
    />
</div>
<div class="info flex flex-col text-center">
    <h2>${movie.title} (${movie.year})</h2>
    <div class="flex flex-row info-buttons">
    <span class="flex flex-row" id="rating"><img
        id="rating-img"
        src="./static/star.svg"
        alt="Estrela representando o rating do filme"
    />${movie.rating}</span>
    <span class="flex flex-row" id="heart"><img
        id="heart-img"
        src=${getImgSrcForHeart(movie.isFavorited)}
        alt="Coração representando se o filme está nos favoritos"
    />Favoritar</span>
    </div>
</div>
<div class="description">
    <p>
    ${movie.description}
    </p>
</div>
`;
  // click on the heart (favorite/unfavorite) button)
  const heart = card.querySelector('#heart');
  heart.addEventListener('click', () => {
    movie.isFavorited = !movie.isFavorited;
    storageService.saveOrRemoveId(movie.id, movie.isFavorited);
    heart.querySelector('img').src = getImgSrcForHeart(movie.isFavorited);
  });
  htmlElReference.appendChild(card);
};

export default renderMovie;
