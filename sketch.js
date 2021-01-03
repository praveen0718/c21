/*var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(400,200,80,30);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";


}

function draw() {
  background(255,255,255);  
  
  movingRect.y = World.mouseY
  movingRect.x = World.mouseX
  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2
    ) {
   
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
 
  }

  else{

   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";



  }
  drawSprites();
}*/
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  
}

function draw() {
  background(0,0,0);  

   bounceOff(movingRect,fixedRect) ;
   
  
  
  drawSprites();
}

