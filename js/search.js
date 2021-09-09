const search = document.querySelector("#search");
const searchInput = search.querySelector("input");
//const bookmark = document.querySelector("#bookmark");
//const bookmarkForm = document.querySelector("#bookmark form");
//const bookmarkInput = document.querySelectorAll("#bookmark input");
//const bookmarkList = document.getElementById("bookmark-list");
//const bookmarkBtn = bookmarkList.querySelector("svg");

const BOOKMARKS = "bookmarks";
let bookmarks = [];

function found(event) {
  event.preventDefault();
  const url = searchInput.value;
  searchInput.value = "";
  const perfectUrl = `https://www.${url}.com`;
  window.open(perfectUrl, "_url");
}

//function addBookmark() {
//  const bookmarkObj = document.createElement("button");
// bookmarkObj.class = "hidden";
//bookmark.appendChild(bookmarkObj);
//bookmark.insertBefore(bookmarkObj, bookmarkBtn);
//}

search.addEventListener("submit", found);

if (savedUsername !== null) {
  searchInput.classList.remove(HIDDEN_CLASSNAME);
  bookmarkInput.classList.remove(HIDDEN_CLASSNAME);
  bookmarkButton.classList.remove(HIDDEN_CLASSNAME);
}
