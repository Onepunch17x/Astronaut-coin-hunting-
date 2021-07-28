var galaxy, galaxyImg;
var astronaut, astronautImg;
var obby1, obby1Img,obby1Group;
var floor;
var gameState = "Play";
var gameoverImg,gameover;
var Score = 0;
var COIN,coinGroup,COINIMG;
var restartButton,restartImg;

function preload() {

    galaxyImg = loadImage("galaxybackround.jpeg");

    obby1Img = loadImage("Star Clipart 1203.png");

    astronautImg = loadImage("clipart1220345.png");
    
     gameoverImg = loadImage("7-Lian-gameover.jpeg");

     COINIMG = loadImage("pngegg.png");

     restartImg = loadImage("button-transparent-png-22.png");
}

function setup() {
    createCanvas(600, 600);

    galaxy = createSprite(300, 300);
    galaxy.addImage(galaxyImg);

    astronaut = createSprite(300, 500);
    astronaut.addImage(astronautImg);
    astronaut.scale = 0.15;

    gameover = createSprite(300,300);
    gameover.addImage(gameoverImg);
    gameover.scale = 0.5

    restartButton= createSprite(300,500);
    restartButton.addImage(restartImg);
    restartButton.scale = 0.05;

obby1Group= new Group();
coinGroup= new Group();

}

function draw() {
    background(200);

  

  if(gameState==="Play"){

    restartButton.visible= false ; 
    gameover.visible= false;

    COINS();
    ob1();

    galaxy.velocityY = 1;
    if (galaxy.y > 600) {
        galaxy.y = 500;

       
    }

     if (keyDown("space")) {
        astronaut.velocityY = -2
    }
    astronaut.velocityY = astronaut.velocityY + 0.5;

    if (keyDown("d")) {
        astronaut.x = astronaut.x + 2;
    }

    if (keyDown("a")) {
        astronaut.x = astronaut.x - 2;
    }
  }

  if(gameState==="end"){
astronaut.velocityY= 0;
astronaut.x = 300;
astronaut.y= 300;

gameover.visible= true; 

restartButton.visible = true;

obby1Group.destroyEach();
coinGroup.destroyEach();

astronaut.visible = false; 

if(mousePressedOver(restartButton)){
    reset();
    astronaut.visible= true;
}


  }

  if (astronaut.y > 600) {
    gameState = "end"
}

if(astronaut.isTouching(obby1Group)){
    gameState = "end"
    astronaut.visible = false;
    obby1Group.destroyEach();
}

if(astronaut.collide(coinGroup)){
    Score = Score+10 ;
    coinGroup.destroyEach();
}



    drawSprites();
    
    textSize(20);
    text("Coins :"+Score,  0,50); 
 
}

function ob1() {
    if(frameCount%50===0){
        obby1=createSprite(100,50);
      
        obby1.x= Math.round(random(100,550));
        
        obby1.velocityY=2
       
        obby1.lifetime=200;
     obby1.scale=0.2;
      
      obby1Group.add(obby1);
      
        obby1.addImage(obby1Img);
      }
      
      }

      function COINS(){
          if(frameCount%240===0){

            COIN= createSprite(100,50);

            COIN.x= Math.round(random(0,600));

            COIN.velocityY=2;

            COIN.Lifetime=200;
            COIN.scale = 0.2;

            coinGroup.add(COIN);

            COIN.addImage(COINIMG);


          }
      }

      function reset(){
        gameState = "Play";
        gameover.visible = false;
        restartButton.visible = false;
        
        obby1Group.destroyEach();
        coinGroup.destroyEach();     
        
        score = 0;

        
        
      }