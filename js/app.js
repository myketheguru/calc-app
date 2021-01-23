// For the Navigation control
const navPanel = document.querySelector("#navigation-panel");

const menuBtn = document.querySelector("#menu");

const menuCloseBtn = document.querySelector("#close-panel");

menuBtn.addEventListener("click", () => {
  navPanel.classList.add("move-in");
});

menuCloseBtn.addEventListener("click", () => {
  navPanel.classList.remove("move-in");
  navPanel.classList.add("move-out");
});

// Show History
const historyContainer = document.querySelector("#history-panel");
const historyBox = document.querySelector(".history");
const historyDisplayBtn = document.querySelector(".history-btn");
const historyPanelCloseBtn = document.querySelector(".close-history");

historyDisplayBtn.addEventListener("click", () => {
  historyContainer.classList.add("move-in");
});

historyPanelCloseBtn.addEventListener("click", () => {
  historyContainer.classList.remove("move-in");
  historyContainer.classList.add("move-out");
});

historyBox.innerHTML = calculationHistory
  .map((memory) => {
    return `<p class="history-item">${memory}</p>`;
  })
  .join("");

//   Switch mode
const modeBtn = document.querySelector(".mode");
const skin = document.querySelector("#skin");

const switchSkin = () => {
  if (skin.href.match("dark.css")) {
    skin.href = "./css/theme/light.css";
  } else {
    skin.href = "./css/theme/dark.css";
  }
};
modeBtn.addEventListener("click", () => {
  switchSkin();
  navPanel.classList.remove("move-in");
  navPanel.classList.add("move-out");
});

// Launch and unmount Pad
const launch = document.querySelector("#launch");
const closeLaunch = document.querySelector("header .close");
const app = document.querySelector("#calc-app");

launch.addEventListener("click", () => {
  app.classList.add("launch-in");
});

closeLaunch.addEventListener("click", () => {
  clearScreen();
  app.classList.remove("launch-in");
  app.classList.add("launch-out");
  setTimeout(function () {
    app.classList.remove("launch-out");
  }, 500);
});
