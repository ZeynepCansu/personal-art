var width, height;
var xDir, yDir, ballXPos, ballYPos, score, racketX, racketY;
var racketWidth = 140;
var racketHeight = 170;
var ballRadius, backimage;
var racket;
var seconds = 0;
var font;
var canvas;
var kruschev, laikaWin, laikaIntro;
var gameStart = 0;

function setup() {
  width = windowWidth;
  height = windowHeight;
  canvas =  createCanvas(width, height);
  canvas.parent('#laika');
  backimage = loadImage('nebula.PNG');
  racket = loadImage('laika-head.png');
  kruschev = loadImage('krush.jpg');
  laikaWin = loadImage('laika-win.jpg');
  laikaIntro = loadImage('laika-intro.jpg');
  ballXPos = 10;
  ballYPos = 400;
  xDir = 15;
  yDir = 0;
  score = 0;
  racketY = height/2;
  racketX = width - racketWidth - width/35;
  ballRadius = 10;
  frameRate(100);
  font = loadFont('NotoSerifJP-Regular.otf');
  imageMode(CORNER);
 
}

function draw() {
  if (gameStart === 0) {
  backimage.resize(width, height);
  image(backimage, 0, 0);
  background(255, 50);
  textFont(font);
  stroke(255, 0, 0);
  strokeWeight(1);
  fill(255, 255, 255);
  textSize(25);
  text("Laika was a Soviet space dog who became", width/3, height/8);
  text("the first animal to orbit the Earth.", width/4+150, height/5.5);
  textSize(35);
  fill(255, 30, 10);
  stroke(0);
  strokeWeight(0.5);
  text("She'll take on Khrushchev in space!", width/4+50, height/3);
  image(laikaIntro, width/3+50, height/2-50, width/5+50, height/3);
  stroke(255, 0, 0);
  strokeWeight(1);
  fill(255, 255, 255);
  textSize(25);
  text("Press space bar to start", width/3+100, height-height/13);
}


if (gameStart === 1) {
  background(255, 200, 0);
  backimage.resize(width, height);
  image(backimage, 0, 0);
  stroke(255, 255, 255);
  strokeWeight(3);
  line(width/2, width/15, width/2, height);
  textSize(35);
  textFont(font);
  stroke(200, 50, 50);
  strokeWeight(1);
  fill(255, 255, 255);
  text("Khrushchev's Score:", width/8, height/15);
  textSize(40);
  text(score, width/5, height/7);


  image(racket, racketX, racketY, racketWidth, racketHeight);
  racketY = mouseY;
  if(racketY > height - racketHeight) {
    racketY = height - racketHeight;
  }
 

stroke(200, 20, 20);
var milli = millis()-millis()+1;
seconds += milli/100;

if(seconds > 10) {
text(Math.ceil(seconds), (width/2)-20, height/12); }
else {
  text(Math.ceil(seconds), (width/2)-10, height/12);
}



if(seconds == 10 && score == 0) {
 
  text("Keep it up!", width/2-80, height/2); 
}

if(seconds == 30 && score == 0) {
  
  text("Go comrade!", width/2-80, height/2); 
}

if(seconds == 60 && score == 0) {

  text("Reaching for the stars!", width/2-130, height/2); 
}

if(score == 1 && seconds <= seconds + 2) {

  text("No biggie!", width/2-80, height/2); 
}

if(score == 5) {

  text("Careful  now!", width/2-90, height/2); 
}

if(score == 10) {

  text("Don't let him win!", width/2-125, height/2); 
}

if(seconds > 90 && score < 15) {
  image(backimage, 0, 0);
  textSize(60);
  text("Laika beats Khrushchev!", width/3-100, height/5); 
  image(laikaWin, width/3+100, height/2-130, width/6, height/3);
  textSize(30);
  text("Refresh page to play again", width/3+50, 4*height/5); 
  score = 0;
  seconds = 0;
  noLoop();
}

if(score == 15) {
  image(backimage, 0, 0);
  textSize(60);
  text("Ouch, try again.", width/3, height/5); 
  image(kruschev, width/3+100, height/2-120, width/5, height/3.5);
  textSize(30);
  text("Refresh page to play again", width/3+100, 4*height/5); 
  score = 0;
  seconds = 0;
  noLoop();
}

fill(255);
stroke(80);
strokeWeight(3.5);

ellipse(ballXPos, ballYPos, 40);

  ballXPos = ballXPos + xDir;
  ballYPos = ballYPos + yDir;
  
  
  if(ballXPos > width) {
    score += 1;
    ballXPos = 110;
    ballYPos = int(random(100, 700));
    xDir = 15;
  }
  
  if(ballXPos + ballRadius > racketX && ballYPos + ballRadius >= racketY && ballYPos + ballRadius <= racketY + racketHeight && ballYPos >= racketHeight/2 + racketY)  {
    xDir = -20;
    yDir = -5;
  }
  
 if(ballXPos + ballRadius > racketX && ballYPos + ballRadius >= racketY && ballYPos + ballRadius <= racketY + racketHeight && ballYPos <= racketHeight + racketY)  {
    xDir = -20;
    yDir = 5;
  }
  
  
 if(ballXPos < ballRadius) {
   xDir = 25;
 }
 
  if(ballYPos < ballRadius) {
   yDir = int(random(10, 25));
 }
 
  if(ballYPos > height - ballRadius) {
   yDir = int(random(-10, -25));
 }
 
 }

}

function keyPressed() {
  if (keyCode === 32 && gameStart === 0) {
    gameStart = 1;
  } else {
    gameStart = 0;
  }
}
