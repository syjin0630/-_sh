const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(info) {
  info.preventDefault();
  /*preventDefault는 브라우저의 기본기능을 막는 함수*/
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username} nice to meet you!`;
  /* ``(벡틱)사용하기 ''(따옴표)아님, ""(쌍 따옴표) 아님 */
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
