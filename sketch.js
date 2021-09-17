var sea = createSprite(20,20,20,20)
var sea = addAnimation("ship-1.png")
function preload(){
seaImg =loadImage("sea.png")
shipImg1 = loadAnimation(ship-1.png,ship-2.png,ship-3.png,ship-4.png)
}

function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaImg)
}

function draw() {
  background("blue");
  background.velocityX = 2
  if(sea.x<0){
   sea.x  =sea.width/2
 
}