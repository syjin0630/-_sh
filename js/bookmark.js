const bookmarkBtn = document.querySelector("#bookmark");
const bookmarkList = document.querySelector("#bookmark-list");
const searchBox = document.querySelector("#searchBox");

let urls = [];
const URL_KEY = "urls";

function localUrl() {
  const urlObj = {
    id: Date.now(),
    url: wantUrl,
    name: wantName,
  };
  urls.push(urlObj);
  paintBookmark(urlObj);
  localStorage.setItem(URL_KEY, JSON.stringify(urls));
}

function deleteUrl(event) {
  const li = event.target.parentElement;
  li.remove();
  urls = urls.filter((filterUrl) => filterUrl.id !== parseInt(li.id));
  localStorage.setItem(URL_KEY, JSON.stringify(urls));
}

function paintBookmark(newUrl) {
  const li = document.createElement("li");
  li.id = newUrl.id;
  const span = document.createElement("span");
  span.innerText = newUrl.name;
  const a = document.createElement("a");
  a.href = newUrl.url;
  a.target = "_blank";
  const btn = document.createElement("button");
  btn.innerHTML = "×";

  btn.addEventListener("click", deleteUrl);
  searchBox.appendChild(li);
  li.appendChild(a);
  a.appendChild(span);
  li.appendChild(btn);
  bookmarkList.appendChild(li);
}

function saveUrl(event) {
  event.preventDefault();
  const bookmarkForm = document.getElementById("bookmark-form");
  const bookmarkInput = document.getElementById("bookmark-input");

  if (bookmarkInput.placeholder === "Write url") {
    wantUrl = bookmarkInput.value;
    bookmarkInput.value = "";
    bookmarkInput.placeholder = "Write name";
  }
  if (bookmarkInput.placeholder === "Write name") {
    wantName = bookmarkInput.value;
    bookmarkInput.value = "";
    bookmarkForm.addEventListener("submit", localUrl);
  }

  if (bookmarkInput.placeholder === "Write name") {
    bookmarkForm.addEventListener("submit", inputRemove);
  }
}
function inputRemove() {
  const bookmarkForm = document.getElementById("bookmark-form");
  const bookmarkInput = document.getElementById("bookmark-input");
  bookmarkInput.remove();
  bookmarkForm.remove();
}
function inputPlus(event) {
  event.preventDefault();
  const bookmarkForm = document.createElement("form");
  bookmarkForm.id = "bookmark-form";
  const bookmarkInput = document.createElement("input");
  bookmarkInput.id = "bookmark-input";
  bookmarkInput.placeholder = "Write url";
  searchBox.appendChild(bookmarkForm);
  bookmarkForm.appendChild(bookmarkInput);
  searchBox.insertBefore(bookmarkForm, bookmarkList);

  bookmarkForm.addEventListener("submit", saveUrl);
}

bookmarkBtn.addEventListener("click", inputPlus);

const savedUrls = localStorage.getItem(URL_KEY);

if (savedUrls !== null) {
  const parsedUrls = JSON.parse(savedUrls);
  urls = parsedUrls;
  parsedUrls.forEach(paintBookmark);
}
