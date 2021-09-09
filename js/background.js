const images = ["1.jpg", "2.jpg", "4.jpg", "6-2.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.id = "bgimg";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
