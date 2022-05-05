//================ Task 1 ==============================
const arr = [];
// Create a function (rollDice)
const random = () => {
  return Math.trunc(Math.random() * 6) + 1;
};
const rollDice = () => {
  // (use a random number from 1-6 to represent a dice)
  //   const roll = Math.trunc(Math.random() * 6) + 1;
  // Roll Two "dice" one for the player and one for the computer
  // Use one variables for the (player) and one for the (computer)
  let player1Score = 0;
  let computerScore = 0;

  player1Score = random();
  console.log(player1Score);
  arr.push(player1Score);

  computerScore = random();
  console.log(computerScore);
  arr.push(computerScore);

  // If the player's dice roll is higher than the computer dice roll,
  // Use a ternary to check for the winner
  arr.push(player1Score < computerScore ? "COMPUTER WINS" : "PLAYER WINS");

  //   if (player1Score > computerScore) {
  //     // console.log("PLAYER WINS")
  //     // console.log("player1 wins");
  //     arr.push("Player 1 wins");
  //   } else if (computerScore > player1Score) {
  //     // otherwise, log ("COMPUTER WINS")
  //     // console.log("computer wins");
  //     arr.push("Computer wins");
  //   } else {
  //     // console.log("it's a tie");
  //     arr.push("It's a tie");
  //   }
  // FINALLY: return all three variables using an array
  return arr;
};

console.log(arr);

// console.log(rollDice());

// ----- After testing it, remove the console.log()
// leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
// return [VALUE1, VALUE2, VALUE3]

// ============ Task 2 ==============================
// Let's update our UI (User Interface)
// Create a function (displayScore)
const displayScore = (arr) => {
  //declare elements
  const body = document.querySelector("body");
  const div = document.createElement("div");

  // append elements
  // Create a new a div displaying:
  // Append the new div to the parent div on the HTML.
  body.appendChild(div);
  div.classList.add("score");
  // Computer Score: , Player Score:  & the Winner:
  // so there is a running record of game data.
  div.textContent = `Computer Score: ${arr[1]}, Player Score: ${arr[0]} & the winner: ${arr[2]}`;
  arr.pop();
  arr.pop();
  arr.pop();
};

// console.log(displayScore());
// console.log(displayScore());

// Create a Reset Function (resetGame)
const resetGame = () => {
  const scores = document.querySelectorAll(".score");
  scores.forEach((score) => {
    score.remove();
  });
};
// REMOVE the div with the game score, leaving just the parent div
// creating a clean slate for a new set of games :)

// ==== Final Step =====================
// Create a new function (playGame):
const playGame = () => {
  // Call the rollDice and the displayScore function inside this function

  displayScore(rollDice());
};

// ========= Don't forget to add your events listeners
// Attach the (playGame) function to the play game button
const playGameBtn = document.getElementById("play-game");
playGameBtn.addEventListener("click", playGame);
// Attach the (resetGame) function to the reset button
const resetBtn = document.getElementById("reset");
reset.addEventListener("click", resetGame);

// ===== Now let's host this game in GITHUB PAGES and style it !!!
