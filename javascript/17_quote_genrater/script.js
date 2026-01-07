let quotes = [
    "Believe in yourself.",
    "Consistency beats motivation.",
    "Hard work never lies.",
    "Stay focused and never quit.",
    "Discipline is the key to success."
  ];

  document.getElementById("btn").onclick = random;

  function random() {
    let index = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[index];
  }