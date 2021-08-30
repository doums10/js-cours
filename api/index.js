const quote = document.querySelector(".quote-text");
const author = document.querySelector(".author");
const pic = document.getElementById("pic");
const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = data.content;
      author.innerHTML = `- ` + data.author;
    });
  fetch("https://picsum.photos/1600/1000").then((res) => {
    pic.innerHTML = ` <img src=${res.url} /> `;
  });
};
quote.addEventListener("click", () => getQuote());
