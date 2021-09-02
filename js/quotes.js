const quotes = [
  {
    quote:
      "세상에 행복과 불행의 총량은 정해져 있는 걸까요? 그럼 제가 좀 슬프면 제가 사랑하는 사람들은 많이 웃었으면 그러면 참 좋겠어요",
    author: "RM",
  },
  {
    quote: "니 멋대로 살어 어차피 니 거야 애쓰지 좀 말어 져도 괜찮아",
    author: "BTS",
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
    quote: "멈춰서도 괜찮아 아무 이유도 모르는 채 달릴 필요 없어",
    author: "BTS, 낙원",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author: "앙드레 말로",
  },
  {
    quote: "행복은 습관이다,그것을 몸에 지니라",
    author: "허버드",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스다윈",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
    author: "제임스 딘",
  },
  {
    quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다",
    author: "동아프리카속담",
  },
  {
    quote: "I do believe in fairies, I do, I do",
    author: "Peter Pan",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
