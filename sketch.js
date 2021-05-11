var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var passedFinish;
var obstacles;
var s,i;
var task;

var form, player, game;

 var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var ground;

//Ac bot
var startBg;
var morningBg;
var noonBg;
var eveningBg;
var radio;
var title2;  
var input2 ;
var submitTaskBtn;
var checkBox;


function preload(){
    
f2 = loadImage("images/f1.png");
ground=loadImage("images/ground.png");
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  bronze_img = loadImage("images/bronze.png");
  silver_img = loadImage("images/silver.png");
  gold_img = loadImage("images/gold.png");
  
  
  //Ac bot
  startBg=loadImage("startBg.jpg");
morningBg=loadImage("bg.png");
noonBg=loadImage("bg2.png");
eveningBg=loadImage("bg3.png");



}

function setup(){
  canvas = createCanvas(window.innerWidth ,window.innerHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacles=createGroup();




  xSet = false;
  game = new Game();
  game.getState();
  game.start();
    for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  //car1.debug="true";
  f1.addImage("f1",f2);
  obstacles.add(f1);



// c

  
 }
}


function draw(){
  

  
   //background(val);
  
   //start the game
 
  //start the game
  if (playerCount === 4 && finishedPlayers === 0) {
    game.update(1);
  }

  //start the game for real
  if (gameState === 1) {
    game.play();
  }

  //end the game
  if (finishedPlayers === 4) {
    game.update(2);
    //gameState = 2;
  }

  //display ranking
  if (gameState === 2 && finishedPlayers === 4) {
    game.displayRanks();
  }
}
function keyPressed() {
  if (keyCode === 13 && gameState !== 1 && passedFinish === false) {
    form.enter();
    console.log("hai");
    passedFinish = true;
  }
}
