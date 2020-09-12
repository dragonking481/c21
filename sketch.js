var fixrect,movingrect;





function setup() {
  createCanvas(1200,800);
  fixrect=createSprite(400, 200, 50, 50);
  fixrect.shapeColor="blue";
  movingrect=createSprite(400,800,40,50);
  movingrect.shapeColor="blue";
 // movingrect.velocityY=-5
  //fixrect.velocityY=5

  gameobj1=createSprite(300,300,100,50);
  gameobj2=createSprite(600,300,40,100);
}


function draw() {
  background(0);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  //bounceOff(fixrect,movingrect);

  if(isTouching(gameobj2,movingrect)){
    gameobj2.shapeColor = "purple";
    movingrect.shapeColor = "purple";
  }
  else{
    gameobj2.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  drawSprites();
}

