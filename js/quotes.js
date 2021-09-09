const quotes = [
  {
    quote:
      "세상에 행복과 불행의 총량은 정해져 있는 걸까요? 그럼 제가 좀 슬프면 제가 사랑하는 사람들은 많이 웃었으면 그러면 참 좋겠어요",
    author: "RM",
  },
  {
    quote:
      "지금 적극적으로 실행되는 괜찮은 계획이 다음 주의 완벽한 계획보다 낫다.",
    author: "George S. Patton",
  },
  {
    quote:
      "​사랑을 받을 자격이 있다는 것은 결국 양껏 줄 수도 있는 사람이라는 것 아니려나",
    author: "RM",
  },
  {
    quote: "작년 봄에 만났던 당신이 그리워서 벚꽃이 마중하러 온 듯 피었어요.",
    author: "V",
  },
  {
    quote:
      "다른 누군가가 되어서 사랑받기보다는 있는 그대로의 나로서 미움받는 것이 낫다.",
    author: "Kurt Cobain",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author: "앙드레 말로",
  },
  {
    quote: "행복은 습관이다, 그것을 몸에 지니라",
    author: "허버드",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스다윈",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라",
    author: "제임스 딘",
  },
  {
    quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다",
    author: "동아프리카속담",
  },
  {
    quote:
      "자신의 부족한 점을 더 많이 부끄러워할 줄 아는 이는 더 존경받을 가치가 있는 사람이다.",
    author: "George Bernard Shaw",
  },
  {
    quote: "만유인력은 사랑에 빠진 사람을 책임지지 않는다.",
    author: "Albert Einstein",
  },
  {
    quote:
      "긴 하루 끝에 좋은 책이 기다리고 있다는 생각만으로 그날은 더 행복해진다.",
    author: "Kathleen Norris",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteBox = document.querySelector("#quote");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

if (savedUsername !== null) {
  quoteBox.classList.add("bottomQuote");
} else {
  quoteBox.classList.remove("bottomQuote");
}
