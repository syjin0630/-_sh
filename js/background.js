const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "6-2.png",
  "9.jpg",
  "10.jpg",
  "11.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.id = "bgimg";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
