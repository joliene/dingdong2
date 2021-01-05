
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1,box1,ball1;
var ball3,ball4,ball5,ball6,ball7;
var ball8,ball9,ball10,ball11,ball12;
var ball13,ball14,ball15,ball16;
var ground2,ball17,ball18,ball19,ball20,ball21,ball22,ball23,ball24,ball25;
var can1,can2,can3,can4,can5,can6,can7,can8,can9,rope1,ball26;
function setup() {
	createCanvas(1370, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(750,500,300,15);
	ground2 = new Ground(1100,300,200,15);
	ball1 = new Ball(100,400,50,50);
	box1 = new	Box4(750,468,30,50);
	box2 = new	Box4(720,468,30,50);
	box3 = new	Box4(780,468,30,50);
	box4 = new	Box4(810,468,30,50);
	box5 = new	Box4(840,468,30,50);
	box6 = new	Box4(690,468,30,50);
	box7 = new	Box4(660,468,30,50);
	box17 = new	Box4(630,468,30,50);
	box18 = new	Box4(870,468,30,50);
	box8 = new	Box3(690,418,30,50);
	box9 = new	Box3(720,418,30,50);
	box10 = new	Box3(750,418,30,50);
	box11 = new	Box3(780,418,30,50);
	box12 = new	Box3(810,418,30,50);
	box19 = new	Box3(840,418,30,50);
	box20 = new	Box3(660,418,30,50);
	box13 = new	Box2(720,368,30,50);
	box14 = new	Box2(750,368,30,50);
	box15 = new	Box2(780,368,30,50);
	box21 = new	Box2(810,368,30,50);
	box22 = new	Box2(690,368,30,50);
	box16 = new	Box1(750,318,30,50);
	box23 = new	Box1(780,318,30,50);
	box24 = new	Box1(720,318,30,50);
	box25 = new	Box4(750,268,30,50);
	box26 = new	Ball(400,100,15,15);
	
	can1 = new Box4(1050,260,30,50);
	can2 = new Box4(1080,260,30,50);
	can3 = new Box4(1100,260,30,50);
	can4 = new Box4(1130,260,30,50);
	can5 = new Box4(1150,260,30,50);
	can6 = new Box3(1080,210,30,50);
	can7 = new Box3(1100,210,30,50);
	can8 = new Box3(1130,210,30,50);
	can9 = new Box2(1100,160,30,50);
	
	rope1 = new Rope(ball1.body,{x:129,y:100});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  ground2.display();
  ball1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
 // box26.display();
  mouseDragged();
  can1.display();
  can2.display();
  can3.display();
  can4.display();
  can5.display();
  can6.display();
  can7.display();
  can8.display();
  can9.display();
  strokeWeight(3);
  stroke("lightgreen");
  line(ball1.body.position.x,ball1.body.position.y,box26.body.position.x,box26.body.position.y);
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
	//Matter.Body.setStatic(ball1.body,false)
}

function mouseReleased(){
	rope1.fly();
	}