
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ground;
var stand1;
var slingshot;
var boy
var ball
var ballimg
var boyimg
// function preload(){

// //ballimg = loadImage("D3.png")
// //boyimg =  loadImage("D5.png")

// }

function setup(){
    createCanvas(1000,400);
engine = Engine.create();
world = engine.world;



stand1 = new Stand(500,300,1000,10);

// ball = Bodies.rectangle(200,300,50,50)
ball= new Ball (100,100,50,50)
//ball= Bodies.circle(160,550,20)
// boy=createSprite(160,550,20,30);
// boy.addImage(boyimg)
// boy.scale=0.125
//World.add(world,boy)
boy= new Boy(160,550,20,30)
//level 1
robot1 = new Robot(280,275,30,40);
robot2 = new Robot(310,275,30,40);
robot3 = new Robot(340,275,30,40);
robot4 = new Robot(370,275,30,40);
robot5 = new Robot(400,275,30,40);
robot6 = new Robot(430,275,30,40);
robot7 = new Robot(460,275,30,40);
robot8 = new Robot(490,275,30,40);
//level 2
robot9  = new Robot(310,235,30,40);
robot10 = new Robot(340,235,30,40);
robot11 = new Robot(370,235,30,40);
robot12 = new Robot(400,235,30,40);
robot13 = new Robot(430,235,30,40);
robot14 = new Robot(460,235,30,40);
//level 3
robot15 = new Robot(340,195,30,40);
robot16 = new Robot(370,195,30,40);
robot17 = new Robot(400,195,30,40);
robot18 = new Robot(430,195,30,40);
//level 4
robot19 = new Robot(370,155,30,40);
robot20 = new Robot(400,155,30,40);
//level 5
robot21 = new Robot(385,115,30,40);
ground = new Ground(500,300,1000,100);
// ball=createSprite(160,550,20,30);
// ball.addImage(ballimg)
// ball.scale=0.125
// World.add(world,ball);

slingshot = new Slingshot(ball.body,{x:200,y:200});

Engine.run(engine);

}

function draw(){

background("white")

//ellipse(ball.position.x,ball.position.y,20,20)

stand1.display();
ball.display()
robot1.display();
robot2.display();
robot3.display();
robot4.display();
robot5.display();
robot6.display();
robot7.display();
robot8.display();
robot9.display();
robot10.display();
robot11.display();
robot12.display();
robot13.display();
robot14.display();
robot15.display();
robot16.display();
robot17.display();
robot18.display();
robot19.display();
robot20.display();
robot21.display();
//ball.display()
ground.display();
slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(ball.body)
    }
}



