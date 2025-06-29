const words = [
  { en: "apple", zh: "蘋果" },
  { en: "banana", zh: "香蕉" },
  { en: "cherry", zh: "櫻桃" },
  { en: "dog", zh: "狗" },
  { en: "elephant", zh: "大象" }
];

const container = document.getElementById("word-container");

words.forEach(word => {
  const card = document.createElement("div");
  card.className = "word-card";
  card.innerText = word.en;
  card.onclick = () => {
    card.innerText = `${word.en}\n(${word.zh})`;
  };
  container.appendChild(card);
});
