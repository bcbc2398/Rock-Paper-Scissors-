function computerPlay() {
    const choices = ["rock", "scissors", "paper"];
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
  }
  
  console.log(computerPlay());
  
  let playerScore = 0;
  let computerScore = 0;
  
  document.getElementById("rock").addEventListener("click", function () {
    document.getElementById("div").textContent += playRound(
      "rock",
      computerPlay()
    );
    document.getElementById("yourScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
  });
  document.getElementById("paper").addEventListener("click", function () {
    document.getElementById("div").textContent += playRound(
      "paper",
      computerPlay()
    );
    document.getElementById("yourScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
  });
  document.getElementById("scissors").addEventListener("click", function () {
    document.getElementById("div").textContent += playRound(
      "scissors",
      computerPlay()
    );
    document.getElementById("yourScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
  });
  // document.getElementById("paper").addEventListener("click", play("paper"));
  // document.getElementById("scissors").addEventListener("click", play("scissors"));
  
  // function play(player) {
  //   const result = playRound(player, computerPlay);
  //   document.getElementById("div").innerText = "hello";
  // }
  
  //Compare computer choice with players choice
  function playRound(playerSelection, computerSelection) {
    if (
      playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors"
    ) {
      playerScore++;
      return "You win! Rock beats Scissors.";
    } else if (
      playerSelection.toLowerCase() === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore++;
      return "You lose! Scissors beat paper.";
    } else if (playerSelection.toLowerCase() === computerSelection) {
      return "It's a draw";
    } else if (
      playerSelection.toLowerCase() === "rock" &&
      computerSelection === "paper"
    ) {
      computerScore++;
      return "You lose! Paper beats rock.";
    } else if (
      playerSelection.toLowerCase() === "paper" &&
      computerSelection === "rock"
    ) {
      playerScore++;
      return "You win! Paper beats rock.";
    } else if (
      playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "rock"
    ) {
      computerScore++;
      return "You lose! Rock beats scissors.";
    } else if (
      playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
      return "You win! Scissors beat papers.";
    }
  }