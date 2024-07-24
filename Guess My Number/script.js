"use strict";

// document.querySelector(".scoreboard #results").textContent =
//   "✨Correct Number🎊";
// document.querySelector(".random-no-box").textContent = 10;
//   Math.floor(Math.random() * 20) + 1;
// document.querySelector("#scores span").textContent = 10;
// document.querySelector(".user-guess-box input").value = 10;

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;
document.querySelector(".user-guess-box button").addEventListener("click", function () {
  let guess = Number(document.querySelector("#user-guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector("#results").textContent = "No Number!🤦‍♂️";
  }

  //when we win
  else if (number === guess) {
    document.querySelector("#results").textContent = "Congrats , You Win 🎊🎯🏆";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".random-no-box").style.width = "24vw";
    document.querySelector(".random-no-box").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".hscore").textContent = highscore;
    }

    //when guess it too high
  } else if (guess > number && score >= 1) {
    document.querySelector("#results").textContent = "📈Too High";
    score--;
    document.querySelector(".score").textContent = score;
    if (score == 0) {
      document.querySelector("#results").textContent = "💥Alas, You Lost ";
      document.querySelector("body").style.backgroundColor = "#ca1c1c";
    }

    //when the guess is too low
  } else if (guess < number && score >= 1) {
    document.querySelector("#results").textContent = "📉Too Low";
    score--;
    document.querySelector(".score").textContent = score;
    if (score == 0) {
      document.querySelector("#results").textContent = "💥Alas, You Lost ";
      document.querySelector("body").style.backgroundColor = "#ca1c1c";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("#user-guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#1f1f1f";
  document.querySelector("#results").textContent = "Start Guessing...";
  document.querySelector(".random-no-box").style.width = "12vw";
  document.querySelector(".random-no-box").textContent = "?";
  console.log(number);
});
