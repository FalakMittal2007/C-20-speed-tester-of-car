var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(800,400);
 car=createSprite(50,200,50,50);
 car.shapeColor=color("blue");
 wall=createSprite(500,200,60,100);
 wall.shapeColor=color("grey");
speed=random(55,90);
weight=random(400,1500);
}

function draw() {
  background(0);  
  textSize(25);
  fill("purple")
  textFont("georgia")
  text("Green=Average     Yellow=Average      Red=Lethal",125,50);
  car.velocityX=speed;
 if(wall.x-car.x<(car.width+wall.width)/2)
 {
 car.velocityX=0;
 var deformation=0.5*weight*speed*speed/22509;

if(deformation>180){
  car.shapeColor=color(255,0,0);
  }
  
  if(deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0); 
  }
  
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
}
 drawSprites();
}