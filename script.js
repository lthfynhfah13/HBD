function startConfetti() {
  confetti({
    particleCount: 400,
    spread: 100,
    origin: { y: Math.random() },
  });

  setInterval(() => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: Math.random() },
    });
  }, 500);
}

function playSong() {
  const audio = document.getElementById("birthdaySong");
  audio.play();
}

  