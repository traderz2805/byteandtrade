/* PARTICLES BACKGROUND */
particlesJS("particles", {
  particles: {
    number: { value: 60 },
    color: { value: "#00f0ff" },
    size: { value: 3 },
    move: { speed: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

/* LINKS */
const LINKS = {
  apps: "https://t.me/appgamesbt",
  pdfs: "https://t.me/pdfbt",
  trading: {
    candlestick: "https://youtu.be/9c5PDTo4VqM",
    support_resistance: "https://youtu.be/9c5PDTo4VqM",
    liquidity: "https://youtu.be/9c5PDTo4VqM",
    fvg: "https://youtu.be/9c5PDTo4VqM",
    fibonacci: "https://youtu.be/9c5PDTo4VqM",
    psychology: "https://youtu.be/9c5PDTo4VqM"
  }
};

let selectedLink = "";
let progressInterval;

/* OPEN LOCK */
function openLocked(type, subType = null) {
  selectedLink = subType ? LINKS[type][subType] : LINKS[type];

  document.getElementById("lockModal").style.display = "flex";

  const bar = document.getElementById("progressBar");
  const btn = document.getElementById("continueBtn");

  bar.style.width = "0%";
  btn.style.display = "none";

  let progress = 0;
  clearInterval(progressInterval);

  progressInterval = setInterval(() => {
    progress += 100 / 60;
    bar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(progressInterval);
      btn.style.display = "inline-block";
    }
  }, 1000);
}

/* UNLOCK */
function unlock() {
  document.getElementById("lockModal").style.display = "none";
  window.open(selectedLink, "_blank");
}

/* SCROLL TO TRADING */
function goToTrading() {
  document.getElementById("trading").scrollIntoView({
    behavior: "smooth"
  });
}
