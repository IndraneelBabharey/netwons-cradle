
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,600,40);

  bob1 = new Bob(320,500)
	bob2 = new Bob(360,500)
	bob3 = new Bob(400,500)
	bob4 = new Bob(440,500)
	bob5 = new Bob(480,500)
	
	chain1 = new Chain(bob1.body,roof.body,-80,0)
	chain2 = new Chain(bob2.body,roof.body,-40,0)
	chain3 = new Chain(bob3.body,roof.body,0,0)
	chain4 = new Chain(bob4.body,roof.body,40,0)
	chain5 = new Chain(bob5.body,roof.body,80,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine)
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    //Matter.Body.applyForce(bob1.body,{isStatic:false})
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}


