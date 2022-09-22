
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var basketball;
var floor;
var travedireita;
var traveesquerda;
var arena;

function preload() {
arena = loadImage("arena.jpg");


}



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  var basketballoptions = {
  density:1.2,
  restitution:0.3
}

 floor = new ground(400,400,800,50);
 travedireita = new ground(590,250,20,80);
 traveesquerda = new ground(700,250,20,80);
 
 basketball = Bodies.circle(200,300,40,basketballoptions);
 World.add(world,basketball);
 Engine.run(engine);







}


function draw() 
{
  background(arena);
  Engine.update(engine);
  rectMode(CENTER);

  floor.display();
  travedireita.display();
  traveesquerda.display();

  ellipse(basketball.position.x,basketball.position.y,20,20)
  Engine.update(engine)

}
function keyPressed() {
 if(keyCode === UP_ARROW) {
  Body.applyForce(basketball,{x:0,y:0},{x:0,y:-70});


 }

}
