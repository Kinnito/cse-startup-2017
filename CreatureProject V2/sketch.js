//issa creature project :^)
var whites = [];
var bodyColor = [20, 50, 90];
var legColor = [120, 300, 20];
var headColor = [20, 80, 0];
var antennaColor = [0, 0, 0]; 


function setup() {
  createCanvas(660, 420);
  background(255);
}


function antenna(x1, y1, x2, y2, x3, y3) {
  fill(antennaColor);
  triangle(x1, y1, x2, y2, x3, y3);
}

function head(x, y, w, h) {
  fill(headColor);
  rect(x, y, w, h);
}

function setEyes(x, y, w, h) {
  eyeColor = color(20, 50, 100);
  fill(eyeColor);
  ellipse(x, y, w, h);
  whites = color(255,255,255);
  if (mouseIsPressed) {
    whites = color(20, 50, 100);
  }
  fill(whites);
  ellipse(x, y, 10, 10);
}

function armLink(x, y) {
  c = color(30, 50, 50);
  fill(c);
  rect(x, y, 30, 30);
}

function mainArm(x, y) {
  c = color(100, 50, 20);
  fill(c);
  rect(x, y, 60, 60);
}

function rightHand() {
  c = color(0, 0, 0);
  fill(c);
  arc(615, 150, 30, 120, radians(90), radians(270));
}

function leftHand() {
  c = color(234,80,100);
  fill(c);
  triangle(30, 150, 60, 120, 60, 180);
}

function body(x, y, w, h) {
  fill(bodyColor);
  rect(x, y, w, h);
}

function legs(x1, y1, x2, y2, x3, y3, x4, y4) {
  fill(legColor);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

function feet(x, y, w, h) {
  fill(legColor);
  ellipse(x, y, w, h);
}


function hill(x,y,w,h) {
  fill(color(0,255,0));
  arc(x+(w/2), y, w, h, PI, 0, PIE);
}

function drawCloudCircles(x, y) {
  c = color(255, 255, 255);
  fill(c);
  noStroke();
  ellipse(x, y, 50, 50);
  
}

function drawCloud() {
  drawCloudCircles(300, 50);
  drawCloudCircles(310, 60);
  drawCloudCircles(350, 30);
  drawCloudCircles(320, 30);
  drawCloudCircles(350, 70);
  
  drawCloudCircles(200, 30);
  drawCloudCircles(210, 10);
  drawCloudCircles(250, 20);
  drawCloudCircles(220, 50);
  drawCloudCircles(250, 30);
}



function keyPressed() {
  if (keyCode == ENTER) {
    bodyColor = color(random(255), random(255), random(255));
    legColor = color(random(255), random(255), random(255));
    headColor = color(random(255), random(255), random(255));
    antennaColor = color(random(255), random(255), random(255));
  }
}


function draw() {
  background(200);
  stroke(0);
  hill(-100, 600, 400, 500);
  hill(100, 600, 700, 600);
  hill(0, 600, 600, 400);
  
  //drawsCloud
  drawCloud()
  
  translate(mouseX - 300, mouseY - 120);
  //main head
  noStroke();
  head(270, 90, 120, 120);
  
  //main head eyes - add +15 or +10 to the y and x value because you need to take the height or width depending on the size of the shape
  setEyes(310, 135, 20, 30);
  setEyes(340, 135, 20, 30);
  
  //head and antenna things
  antenna(330, 90, 300, 90, 300, 30);
  antenna(360, 90, 330, 90, 360, 30);
  
  
  //arm link rectangles that link the larger squares - left
  armLink(240, 135);
  armLink(150, 135);
  armLink(60, 135);
  
  //triangle
  leftHand();
  
  //arm link rectangles that link the larger squares - right
  armLink(390, 135);
  armLink(480, 135);
  armLink(570, 135);
  
  //body
  body(240, 210, 180, 60);
  
  //weird half-ish circle for the right hand
  rightHand();
  
  //weird main arm rectangles - left
  mainArm(180, 120);
  mainArm(90, 120);
  
  //weird main arm rectangles - right
  mainArm(420, 120);
  mainArm(510, 120);
  
  //legs
  legs(270, 270, 240, 270, 210, 300, 240, 300);
  legs(420, 270, 450, 300, 420, 300, 390, 270);
  
  //wheel feet
  feet(225, 315, 30, 30);
  feet(435, 315, 30, 30);
}
