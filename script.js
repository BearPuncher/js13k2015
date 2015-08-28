var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var actualWidth = ctx.canvas.width;
var actualHeight = ctx.canvas.height;
var gameSpeed = 0;

startgame();

function startgame() {
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  var ONE_FRAME_TIME = 1000 / 60 ;
  var mainloop = function() {
      updateGame();
      drawGame();
  };
  setInterval( mainloop, ONE_FRAME_TIME );
}

function updateGame() {
  //blocker.update(gameSpeed);
  GameController.update();
}

function drawGame() {
  ctx.clearRect(0, 0, c.width, c.height);
  drawHUD();
  player.draw();
  //blocker.draw();
  GameController.draw();
}

function drawHUD() {
  ctx.rect(0,0,actualWidth,actualHeight);
  ctx.stroke();
  ctx.fillStyle = "#000000"; 
  ctx.font = "24px Helvetica";
  ctx.fillText("Speed Up - <",actualWidth-350,200);
  ctx.fillText("Slow Down - >",actualWidth-350,230);
  ctx.fillText("Reverse Gravity - space bar",actualWidth-350,260)
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
  }
}

    