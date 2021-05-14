var database;
var backgroundimg;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruitimg1, fruitimg2, fruitimg3, fruitimg4, fruitimg5;
var playerimg;
var score1,score2;

function preload(){
  backgroundimg = loadImage("images/jungle.jpg");
  playerimg = loadImage("images/basket2.png");
  fruitimg1 = loadImage("images/apple2.png");
  fruitimg2 = loadImage("images/banana2.png");
  fruitimg3 = loadImage("images/melon2.png");
  fruitimg4 = loadImage("images/orange2.png");
  fruitimg5 = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundimg)
  
   if (playerCount === 2) {
     game.update(1)
   }
   if (gameState === 1) {

     clear()
     game.play()
   }
   if (gameState === 2) {
    
     game.end()
   }
}