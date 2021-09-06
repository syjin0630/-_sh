const search = document.querySelector("#search");
const searchInput = search.querySelector("input");

function found(event) {
  event.preventDefault();
  const url = searchInput.value;
  const perfectUrl = `https://www.${url}.com`;
  window.open(perfectUrl, "_url");
}
search.addEventListener("submit", found);
