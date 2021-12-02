const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//자주 사용하는 string은 변수로 만들어서 오타가 나도 바로 찾을 수 있도록!!

function onLoginSubmit(info) {
  info.preventDefault();
  //preventDefault는 브라우저의 기본기능을 막는 함수
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginBtn.classList.add(HIDDEN_CLASSNAME);
  loginInput.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  alert(
    "이름을 클릭하면 이름을 바꿀 수 있습니다!  (안 될 경우 새로고침을 한 번 해주세요.)"
  );
  location.reload();
}

function paintGreetings(username) {
  //greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  // ``(벡틱)사용하기 ''(따옴표)아님, ""(쌍 따옴표) 아님
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function rename() {
  alert("유저네임을 바꾸시겠습니까?");
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginBtn.classList.remove(HIDDEN_CLASSNAME);
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername !== null) {
  paintGreetings(savedUsername);
  greeting.addEventListener("click", rename);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginBtn.classList.remove(HIDDEN_CLASSNAME);
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
