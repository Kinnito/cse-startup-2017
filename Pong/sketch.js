var score;
var ball_x, ball_y;
var paddle_y;
var paddle_x_left, paddle_x_right;
var gameObjectColor;
var x_direction; // -1 for going towards left, +1 for going towards right
var y_direction;

function setup() {
  createCanvas(600,300);
  gameObjectColor = [0, 0, 0];
  score = 0;
  count = 0;
  paddle_x_left = 0;
  paddle_x_right = 580;
  paddle_y = 90;
  ball_x = 300;
  ball_y = 140;
}

function draw() {
  background(255,255,255);
  
  fill(gameObjectColor);
  rect(paddle_x_left, paddle_y, 20, 100);
  rect(paddle_x_right, paddle_y, 20, 100);
  ellipse(ball_x, ball_y, 30, 30);
  
  changeBallDirection();
  movePaddle();
}

function changeBallDirection() {
  if (score < 1) {
    x_direction = 1;
    y_direction = 0;
  }
  if (ball_x + 10 == paddle_x_right && ball_y - 90 <= paddle_y && ball_y >= paddle_y) {
    score += 1;
    x_direction = -1;
    y_direction = random(5);
  }
  if (ball_x - 30 == paddle_x_left && ball_y - 90 <= paddle_y && ball_y >= paddle_y) {
    score += 1;
    x_direction = 1;
    y_direction = random(5);
  }
  if (ball_y > 300 || ball_y < 0) {
    y_direction *= -1;
  }
  moveBall();
  text("Number of Points: " + score, 10, 30);
}

function moveBall() {
  ball_x += x_direction;
  ball_y += y_direction;
}


function movePaddle() {
  if (keyIsDown(DOWN_ARROW) && paddle_y < 200) {
    paddle_y += 1;
  }
  if (keyIsDown(UP_ARROW) && paddle_y > 0) {
    paddle_y -= 1;
  }
}