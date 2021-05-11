var canvas, backgroundImage;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var gameState = 0;
var playerCount=0;
var score=0;
var database;

var form, player, game;
var allPlayers;
var circle1,circle2,circle3,circle4,circle1Img,circle2Img,circle3Img,circle4Img;
var circles;

function preload(){
  //circle1Img=loadImage("../images/blue circle.png");
  //circle2Img=loadImage("../images/green circle.png");
  //circle3Img=loadImage("../images/red circle.png");
  //circle4Img=loadImage("../images/yellow circle.png");
}

function setup(){
    canvas = createCanvas(displayWidth-200,displayHeight-300);
   
    engine = Engine.create();
    world = engine.world;

    console.log("setup");
    database = firebase.database();
    form=new Form();
    game=new Game();
    game.start();
    game.getState();
  }
  
  
  function draw(){
 background("red");
  form.display();
  Engine.update(engine);
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
  //if(gameState===2){
    //game.end();
  //}

  //text("Score:"+score,300,300)
console.log(gameState);
  
  }