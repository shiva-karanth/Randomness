const jokeText = document.getElementById("joke");
const btn = document.getElementById("generate-joke");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let = getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((items) => {
      jokeText.innerText = `${items.joke}`;
      console.log(items.joke);
      console.log(items.category);
    });
};
btn.addEventListener("click", getJoke);

// getJoke();