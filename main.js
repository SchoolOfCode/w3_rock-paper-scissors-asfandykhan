let w = 0;
let l = 0;
let d = 0;
let gp = 0;

function getWinner(p1Move, p2Move) {
  switch (p1Move) {
    case "rock":
      switch (p2Move) {
        case "rock":
          return 0;
        case "scissors":
          return 1;
        case "paper":
          return -1;
      }
    case "scissors":
      switch (p2Move) {
        case "rock":
          return -1;
        case "scissors":
          return 0;
        case "paper":
          return 1;
      }
    case "paper":
      switch (p2Move) {
        case "rock":
          return 1;
        case "scissors":
          return -1;
        case "paper":
          return 0;
      }
  }
}

function cpumove() {
  let randomNumber = Math.floor(Math.random() * 3);
  let moves = ["rock", "paper", "scissors"];
  return moves[randomNumber];
}

function giveResult() {
  document.getElementById("gp").innerHTML = `you have played ${gp} games`;

  document.getElementById("w").innerHTML = `you have ${w} Wins`;

  document.getElementById("d").innerHTML = `you have ${d} Draws`;

  document.getElementById("l").innerHTML = `you have: ${l} Losses`;
}

function mainBody() {
  p2move = cpumove();
  let res = getWinner(p1move, p2move);
  gp++;

  if (res === 1) {
    w++;
  } else if (res === 0) {
    d++;
  } else if (res === -1) {
    l++;
  }

  giveResult();
}

function callRock() {
  p1move = "rock";
  mainBody();
}

function callPaper() {
  p1move = "paper";
  mainBody();
}

function callScissors() {
  p1move = "scissors";
  mainBody();
}
