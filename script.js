const button = document.querySelector("#play");
const nowPlaying = document.querySelector("#now-playing");

let currentAudio = null;

const audios = {
  1: "mewing",
  2: "english or spanish",
  3: "erm what the sigma",
  4: "lets go gambling!",
  5: "nya ichi ni san",
  6: "oi oi... baka",
  7: "sigma trillionare grindset",
  8: "skibidi fortnite",
  9: "skibidi dop dop dop",
  10: "rizz",
  11: "FE!N",
  12: "waitwaitwait",
};

const randomInt = () =>
  Math.floor(Math.random() * Object.keys(audios).length + 1);

button.addEventListener("click", () => {
  if (nowPlaying.style.opacity !== 1) {
    nowPlaying.style.opacity = 1;
  }

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const randomId = randomInt();

  nowPlaying.innerText = audios[randomId];
  currentAudio = new Audio(`./assets/sounds/${randomId}.mp3`);
  currentAudio.play();
});
