
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(50,640,50);
	ground1 = new ground(400,650,800,20);
	dustbin1 = new dustbin(650,630,200,20);
	dustbin2 = new dustbin(550,580,20,100);
	dustbin3 = new dustbin(750,580,20,100);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display()
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-95})
	}
}

