
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground_image
var score
var invisibleGround
var score =0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 ground_image=loadImage("jungle3.jpg")
}



function setup() {
   
  
  monkey = createSprite(80,305,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(100000,250,900,10);
  ground.velocityX = -3;
  ground.x = ground.width/2;
  ground.addImage(ground_image)
  ground.scale = 1
  
  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  
  
  FoodGroup = new Group()
  obstacleGroup = new Group()
  console.log(ground.X)
}


function draw() {
  background(255)
  score =Math.ceil(frameCount/frameRate())
  
  
if (ground.x < 0){
      ground.x = ground.width/2;
  }
if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    if(obstacleGroup.isTouching(monkey)){ 
        monkey.scale=0.08;
      score=score-2;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(invisibleGround)
 
   spawnFoodGroup();
    spawnobstacleGroup();

  
    if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  
    if(obstacleGroup.isTouching(monkey)){ 
        monkey.scale=0.08;
      score=score-2;
    }
  
 drawSprites(); 
      monkey.depth=monkey.depth+1
      
      stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 200,50);
}
function spawnFoodGroup() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(550,440,30,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;   
    banana.lifetime = 200;
    //add each cloud to the group
    FoodGroup.add(banana);
  }
  
}
 
 function spawnobstacleGroup() {  
  if (frameCount % 360 === 0) {
    var obstacle = createSprite(400,330,30,20);   
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -2;   
    obstacle.lifetime = 200;
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
   
 }



