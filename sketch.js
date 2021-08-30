const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var engine, world;

function preload(){

}

function setup() {
  var canvas = createCanvas(1800,1400);
  engine = Engine.create();
  world = engine.world;
 

 

  snowbg = new Snowbg();
  snow1 = new Snow(500,500,50,50);
  snow2 = new Snow(900,350,50,50);
  snow3 = new Snow(800,200,50,50);
  snow4 = new Snow(1200,300,50,50);
  snow5 = new Snow(300,600,50,50);
  snow6 = new Snow(1300,100,50,50);
  snow7 = new Snow(1500,550,50,50);
 
}

function draw() {
  
  Engine.update(engine);

  //background("black");  

  snowbg.display();

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  
  
  drawSprites();
}