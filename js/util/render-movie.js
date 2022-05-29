import Movie from "../model/Movie.js";
/**
 * This function append a child with generated HTML with the movie in content.
 * @param {HTMLElement} htmlEl
 * @param {Movie} movie
 * @returns
 */
const renderMovie = (htmlEl, movie) => {
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
    <span><img
        id="rating"
        src="./static/star.svg"
        alt="Estrela representando o rating do filme"
    />${movie.rating}</span>
    <span><img
        id="heart"
        src="./static/heart-off.svg"
        alt="Coração representando se o filme está nos favoritos"
    />Favoritar</span>
</div>
<div class="description">
    <p>
    ${movie.description}
    </p>
</div>
`;
  htmlEl.appendChild(card);
};

export default renderMovie;
