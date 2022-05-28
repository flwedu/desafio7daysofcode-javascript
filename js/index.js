import list from "./mock.js";
const listEl = document.getElementById("list");

/**
 *
 * @param {{image: string; title: string; rating: number; year: number; description: string; isFavorited: boolean;}} movie
 * @returns
 */
function renderMovie(movie) {
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
  listEl.appendChild(card);
  return card;
}
list.forEach(renderMovie);
