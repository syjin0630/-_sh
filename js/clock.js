const clock = document.querySelector("h2#clock");
const dateText = document.querySelector("h5#date");
const ap = document.querySelector("span#ap");

function getClock() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (hours >= 12) {
    hours = String(date.getHours() - 12).padStart(2, "0");
    ap.innerHTML = "PM";
  } else if (hours == 0) {
    hours = 12;
  } else if (hours < 12) {
    ap.innerHTML = "AM";
  }

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dateNumber = String(date.getDate()).padStart(2, "0");
  let day = date.getDay();

  if (day === 1) {
    day = "MON";
  } else if (day === 2) {
    day = "TUE";
  } else if (day === 3) {
    day = "WED";
  } else if (day === 4) {
    day = "THU";
  } else if (day === 5) {
    day = "FRI";
  } else if (day === 6) {
    day = "SAT";
  } else if (day === 0) {
    day = "SUN";
  }

  dateText.innerHTML = `${year}.${month}.${dateNumber}.${day}`;
}

getClock();
getDate();
setInterval(getDate, 86400000);
setInterval(getClock, 1000); //1초마다 함수실행
//setTimeout(sayHello, 5000); //5초후에 함수실행
//if (savedUsername !== null) {
// clock.classList.remove(HIDDEN_CLASSNAME);
// date.classList.remove(HIDDEN_CLASSNAME);
//}
