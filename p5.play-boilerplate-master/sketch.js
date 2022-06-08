var girl;
var bee, beeGroup, butterfly,butterflyGroup;
var backgroundImg;
var invisibleGround;
var edge;
var score=0
var scoreSound, loseLifeSound
var life=3
var gameState=1


function preload(){
  backgroundImg=loadImage("Normal Background.jpeg");
  girlImg=loadImage('girl1.png');
  beeImg=loadImage('Bee.jpg');
  ButterflyImg=loadImage('Butterfly.jpeg');
}






function setup() {
  createCanvas(600,400);
  girl=createSprite(350,390,35,35);
  girl.addImage(girlImg);
  girl.scale=0.2;


  invisibleGround=createSprite(300,390,600,16);
  invisibleGround.visible=false;

  edge=createEdgeSprites();

  butterflyGroup= new Group();
  beeGroup= new Group();
  
  
}

function draw() {
  background(backgroundImg);  
  
  if(gameState===1){
  if(keyDown("space")){
    girl.y=girl.y-5;

  }
  girl.y=girl.y+2;

  girl.collide(edge);

  textSize(25)
  fill(0)
  text("Score: "+score,450,20);
  text("life: "+life,450,50);
}
  
  if(butterflyGroup.isTouching(girl)){
    butterflyGroup.destroyEach();
    score=score+5;

  }
  
  if(beeGroup.isTouching(girl)){
    beeGroup.destroyEach();
    life=life-1;
       

  }
  if(life===0){
    textSize(50)
    fill(0)
    text('Game Over',200,180)
    gameState=0
    beeGroup.destroyEach();
    butterflyGroup.destroyEach();
    beeGroup.setVelocityXEach(0);
    butterflyGroup.setVelocityXEach(0);
  }

 

  spawnButterfly();
  spawnBee();

  
  
  drawSprites();


  
  
}

function spawnButterfly(){
  if(frameCount % 120 === 0){
    var butterfly=createSprite(0,200,35,35);
    butterfly.y = Math.round(random(100,350));
    butterfly.addImage(ButterflyImg);
    butterfly.scale=0.05;
    butterfly.velocityX=3;
    butterflyGroup.add(butterfly);
    butterfly.lifetime=500;
    butterfly.depth=girl.depth;
    girl.depth=+1
    }
  }

  function spawnBee(){
  if(frameCount % 120 === 0){
    var bee=createSprite(0,200,35,35);
    bee.y = Math.round(random(100,350));
    bee.addImage(beeImg);
    bee.scale=0.05;
    bee.velocityX=3;
    beeGroup.add(bee);
    bee.lifetime=500;
    bee.depth=girl.depth;
    girl.depth=+1
    }
    
    
  }