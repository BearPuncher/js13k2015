var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var actualWidth = ctx.canvas.width;
var actualHeight = ctx.canvas.height;
var gameSpeed = 0;
var stepsSpentCollided = 0;

startgame();

function startgame() {
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  var ONE_FRAME_TIME = 1000 / 60 ;
  gameSetup();
  var mainloop = function() {
      updateGame();
      drawGame();
  };
  setInterval( mainloop, ONE_FRAME_TIME );
}

function gameSetup() {
  player
  GameController.blockers.push(
    new CeilBlocker(0),
    new Blocker(150),
    new Blocker(300),
    new CeilBlocker(450),
    new CeilBlocker(600));
}

function updateGame() {
  GameController.update();
}

function drawGame() {
  ctx.clearRect(0, 0, c.width, c.height);
  drawHUD();
  player.draw();
  GameController.draw();
}

function drawHUD() {
  ctx.rect(0,0,actualWidth,actualHeight);
  ctx.stroke();
  ctx.fillStyle = "#000000"; 
  ctx.font = "24px Helvetica";
  ctx.fillText("Speed Up - <",actualWidth-350,200);
  ctx.fillText("Slow Down - >",actualWidth-350,230);
  ctx.fillText("Change Position - space bar",actualWidth-350,260);
  ctx.fillStyle = "#990000";
  ctx.fillText("Steps spent colliding " + stepsSpentCollided, actualWidth-350,290);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,actualWidth,actualHeight/2);
}

window.addEventListener("keyup", dealWithKeyboardUp, false);
window.addEventListener("keydown", dealWithKeyboardDown, false);

function dealWithKeyboardUp(e) {
    if (e.keyCode == "32") {
        // Flip gravity
        player.reverse();
    }
}

function dealWithKeyboardDown(e) {
  if (e.keyCode == "37") {
    gameSpeed++;
  }
  if (e.keyCode == "39") {
    gameSpeed--;
    if (gameSpeed < 0) {
      gameSpeed = 0;
    }
  }
}

function collides(a, b) {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}