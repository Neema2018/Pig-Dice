// business logic
var player1 = player1;
var player2 = player2;

var rollDice = function () {
  return Math.floor(6 * Math.random()) + 1;
}

function player() {
  this.roll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
};


// roll
player.prototype.rollOne = function () {
  if (this.roll === 1) {
    this.turnScore = 0;
    alert("O u c h!! no score, you rolled a 1!");
  } else {
    this.turnScore += this.roll;
  }
}
// pause
player.prototype.pause = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  alert("Pass To The Next Player ");
  if (this.totalScore >= 100) {
    alert("Woo-Hoo! You Win");
  }
}

// user interface
$(document).ready(function () {
  player1 = new player();
  player2 = new player();
  $("button#play1").click(function () {
    player1.roll = rollDice();
    $("#diceroll1").text(player1.roll)
    player1.rollOne();
    $("#turnscore1").text(player1.turnScore);
  });

  $("button#play1-pause").click(function () {
    player1.pause();
    $("#totalscore1").text(player1.totalScore);
  })

  $("button#play2").click(function () {
    player2.roll = rollDice();
    $("#diceroll2").text(player2.roll);
    player2.rollOne();
    $("#turnscore2").text(player2.turnScore);
  });

  $("button#play2-pause").click(function () {
    player2.pause();
    $("#totalscore2").text(player2.totalScore);
  })
});