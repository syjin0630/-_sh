const search = document.querySelector("#search");
const searchInput = search.querySelector("input");
const google = document.querySelector("#google");
const googleInput = google.querySelector("input");
const naver = document.querySelector("#naver");
const naverInput = naver.querySelector("input");
const youtube = document.querySelector("#youtube");
const youtubeInput = youtube.querySelector("input");
const papago = document.querySelector("#papago");
const papagoInput = papago.querySelector("input");

const BOOKMARKS = "bookmarks";
let bookmarks = [];

function found(event) {
  event.preventDefault();
  const searchUrl = searchInput.value;
  searchInput.value = "";
  const searchPerfectUrl = `https://${searchUrl}.com`;
  window.location.href = searchPerfectUrl;
}
function googleFound(event) {
  event.preventDefault();
  const googleUrl = googleInput.value;
  googleInput.value = "";
  const googlePerfectUrl = `https://www.google.com/search?q=${googleUrl}`;
  window.location.href = googlePerfectUrl;
}
function naverFound(event) {
  event.preventDefault();
  const naverUrl = naverInput.value;
  naverInput.value = "";
  const naverPerfectUrl = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${naverUrl}`;
  window.location.href = naverPerfectUrl;
}
function youtubeFound(event) {
  event.preventDefault();
  const youtubeUrl = youtubeInput.value;
  youtubeInput.value = "";
  const youtubePerfectUrl = `https://www.youtube.com/results?search_query=${youtubeUrl}`;
  window.location.href = youtubePerfectUrl;
}
function papagoFound(event) {
  event.preventDefault();
  const papagoText = papagoInput.value;
  papagoInput.value = "";
  const papagoUrl = `https://papago.naver.com/?sk=en&tk=ko&hn=0&st=${papagoText}`;
  window.location.href = papagoUrl;
}

search.addEventListener("submit", found);
google.addEventListener("submit", googleFound);
naver.addEventListener("submit", naverFound);
youtube.addEventListener("submit", youtubeFound);
papago.addEventListener("submit", papagoFound);
