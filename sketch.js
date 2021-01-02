var bullet, wall, bulletImg;
var backgroundImg;
var speed, weight, thickness;

function preload(){
  bulletImg = loadImage("bullet.png");
  
  backgroundImg = loadImage("bg.png");
}

function setup() {
  createCanvas(1600,400);
speed = random(223,321)
weight = random(30,52)
thickness = random(22,83)

 bullet = createSprite(50, 270, 50, 50);
bullet.velocityX = speed;
bullet.addImage(bulletImg);
bullet.scale = 2.5;
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color((164, 164, 164));
wall.scale=3;

}

function draw() {
  background(backgroundImg);  

  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    if (damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true
  }
    return false;
}