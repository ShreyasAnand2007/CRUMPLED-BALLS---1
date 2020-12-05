 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,binSide1,binSide2,binBase;

function preload(){
	
}

function setup() {
	 createCanvas(800, 700);
  
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 600, 10);

     ground = new Ground(400, 680, 800, 20);
	 binSide1 = new Dustbin(550, 610, 20, 100);
     binBase = new Dustbin(635, 660, 150, 20);
     binSide2 = new Dustbin(720, 610, 20, 100);
	
	 Engine.run(engine);  
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();
  binSide1.display();
  binSide2.display();
  binBase.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position,{x:15, y: -15})
	}

  }
