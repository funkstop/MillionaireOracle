let flipped = false;

function flipCard() {
  const card = document.querySelector('.card');
  if (flipped) {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }
  flipped = !flipped;
}

  
  // Countdown Timer
  const endDate = new Date("2023-12-31T00:00:00").getTime();
  const timer = document.getElementById("timer");
  setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    timer.innerHTML = `${days} days left for our special offer!`;
  }, 1000);
  
  // Animated Text
  const textElement = document.getElementById("text");
  const textArray = ["Your destiny awaits...", "Unveil your fortune...", "Get ready to be amazed..."];
  let textIndex = 0;
  let charIndex = 0;
  
  function typeText() {
    if(charIndex < textArray[textIndex].length) {
      textElement.textContent += textArray[textIndex][charIndex];
      charIndex++;
      setTimeout(typeText, 200);
    }
  }
  
  typeText();
  
  