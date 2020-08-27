const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const Events = Matter.Events; 

var world,engine,ground;
var particles;
var division1,division2,division3;
var divitionHight = 300;
var form,game,player;
var gameState = 0;
var score,mConstraint;
var r=0;
var b=0;
var c=0;

function setup() {
  createCanvas(displayWidth,displayHeight-200);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  score = 0;
  game= new Game();
  game.start();
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = { mouse: canvasmouse } 
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}
function draw() {
  background("lightBlue"); 
  Engine.update(engine);
  ground.display();
  
  if(gameState === 1) {
    game.play();
    rect(650,100,450,30);
    fill("yellow");
    textSize(30);
    text("PRESS HERE TO DROP BALL",450,110);
    if(particles!=null){
    particles.display();
    }
    textSize(20);
    fill("black");
    stroke("black");
    text("Player:"+player,1000,50);
    text("Score:"+score,1000,75);
    text("Red-green color blindness:"+r,1000,100);
    text("Blue-yellow color blindness:"+b,1000,125);
    text("Complete color blindness:"+c,1000,150);

  }
  drawSprites();
}

function mouseClicked(){
  if((mouseX>600 && mouseX<700)&& (mouseY>70 && mouseY<130)){
    particles= new Particle(mouseX,mouseY,50);
  }
}