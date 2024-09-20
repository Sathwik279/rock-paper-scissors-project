 //let computerMove = ""; //a global variable
 let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    loses: 0,
    ties: 0,
  };

  UpdateScoreElement();

  function playGame(playerMove) {
    const computerMove = PickComputerMove();
    let result = "";
    if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "You lose.";
      } else if (computerMove === "scissors") {
        result = "You win.";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You win.";
      } else if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "scissors") {
        result = "You lose.";
      }
    } else if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You lose.";
      } else if (computerMove === "paper") {
        result = "You win.";
      } else if (computerMove === "scissors") {
        result = "Tie.";
      }
    }
    if (result === "You win.") {
      score.wins += 1;
    } else if (result === "You lose.") {
      score.loses += 1;
    } else if (result === "Tie.") {
      score.ties += 1;
    }
    localStorage.setItem("score", JSON.stringify(score));

    UpdateScoreElement();

    document.querySelector(".js-result").innerHTML = result;

    document.querySelector(".js-moves").innerHTML = `you 
  <img src="${playerMove}-emoji.png" class='move-icon'>
  computer <img src="${computerMove}-emoji.png" class='move-icon'>`;

    /* alert(
      `you picked ${playerMove} computer picked ${computerMove} and ${result}
        wins:${score.wins}, loses:${score.loses},ties:${score.ties}`
    );*/
  }

  function UpdateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = ` wins:${score.wins}, loses:${score.loses},ties:${score.ties}`;
  }

  function PickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }

    return computerMove;
  }