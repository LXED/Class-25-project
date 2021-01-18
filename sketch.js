
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,PaperObj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	PaperObj = new trash(100,200,50,50);
	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(230);
 
  if(keyDown("UP_ARROW")){

    Matter.Body.applyForce(PaperObj.body,PaperObj.body.position,{x:65,y:-65});
    
       }
  

 
  PaperObj.display();
  groundObject.display();
  dustbinObj.display();  

}

