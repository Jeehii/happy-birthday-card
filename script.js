// 🎈 Balloon Generator
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 70%)`;
  balloon.style.left = `${Math.random() * 100}vw`;
  balloon.style.animationDuration = `${4 + Math.random() * 4}s`;
  document.querySelector(".balloons").appendChild(balloon);
  setTimeout(() => balloon.remove(), 8000);
}

setInterval(createBalloon, 300);

// 🎊 Confetti (using Canvas Confetti library)
const confettiScript = document.createElement("script");
confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
confettiScript.onload = () => {
  confetti();
  setTimeout(() => {
    document.querySelector('.message').classList.remove('hidden');
    document.querySelector('.message').style.display = 'block';
  }, 5000);
};
document.body.appendChild(confettiScript);
