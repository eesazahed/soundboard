const button = document.querySelector("button");
let currentAudio = null;

const randomInt = () => Math.floor(Math.random() * 10 + 1);

button.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(`./assets/sounds/${randomInt()}.mp3`);
  currentAudio.play();
});
