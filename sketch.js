var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
 music = loadSound("musica.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,195,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,195,30);
    block2.shapeColor = "orange";
    
    block3 = createSprite(500,580,195,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,195,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 6;
    ball.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.bounceOff(block1);
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
        ball.bounceOff(block3);
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        ball.bounceOff(block4);
        ball.y = 25;
        ball.x = Math.round(random(25,575));
    }
    drawSprites();
}
