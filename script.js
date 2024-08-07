const button = document.querySelector("button");

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const numbers = [1, 2, 3, 4, 5];

button.addEventListener("click", () => {
  const rndInt = randomIntFromInterval(1, 5);

  console.log(rndInt);
});
