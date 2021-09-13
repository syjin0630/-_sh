const search = document.querySelector("#search");
const searchInput = search.querySelector("input");
const google = document.querySelector("#google");
const googleInput = google.querySelector("input");
const naver = document.querySelector("#naver");
const naverInput = naver.querySelector("input");
//const bookmark = document.querySelector("#bookmark");
//const bookmarkForm = document.querySelector("#bookmark form");
//const bookmarkInput = document.querySelectorAll("#bookmark input");
//const bookmarkList = document.getElementById("bookmark-list");
//const bookmarkBtn = bookmarkList.querySelector("svg");

const BOOKMARKS = "bookmarks";
let bookmarks = [];

function found(event) {
  event.preventDefault();
  const searchUrl = searchInput.value;
  searchInput.value = "";
  const searchPerfectUrl = `https://${searchUrl}.com`;
  window.open(searchPerfectUrl, "_searchUrl");
}
function googleFound(event) {
  event.preventDefault();
  const googleUrl = googleInput.value;
  googleInput.value = "";
  const googlePerfectUrl = `https://www.google.com/search?q=${googleUrl}`;
  window.open(googlePerfectUrl, "_googleUrl");
}
function naverFound(event) {
  event.preventDefault();
  const naverUrl = naverInput.value;
  naverInput.value = "";
  const naverPerfectUrl = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${naverUrl}`;
  window.open(naverPerfectUrl, "_naverUrl");
}

//function addBookmark() {
//  const bookmarkObj = document.createElement("button");
// bookmarkObj.class = "hidden";
//bookmark.appendChild(bookmarkObj);
//bookmark.insertBefore(bookmarkObj, bookmarkBtn);
//}

search.addEventListener("submit", found);
google.addEventListener("submit", googleFound);
naver.addEventListener("submit", naverFound);

//if (savedUsername !== null) {
//  searchInput.classList.remove(HIDDEN_CLASSNAME);
// bookmarkInput.classList.remove(HIDDEN_CLASSNAME);
// bookmarkButton.classList.remove(HIDDEN_CLASSNAME);
//}
