
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj4,bobObj5;
var roof, rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}


function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	roof = new Roof(300,100,300,20);

	bobObj1 = new Bob(300,300);
	
	bobObj2 = new Bob(350,300);

	bobObj3 = new Bob(400,300);
	
	bobObj4 = new Bob(450,300);
	bobObj5 = new Bob(500,300);




	rope1 = new Rope(bobObj1.body,roof.body,-100)	
	rope2 = new Rope(bobObj2.body,roof.body,-50)
	rope3 = new Rope(bobObj3.body,roof.body,0)
	
	rope4 = new Rope(bobObj4.body,roof.body,50)

	rope5 = new Rope(bobObj5.body,roof.body,100)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}


function keyPressed(){
	if(keyCode=UP_ARROW){
		Matter.Body.applyForce(bobObj1.body, bobObj2.body.position , {x:-50,y:-50})
	}
}
