const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, ground1, log1, log2, log3, log4, pig1, pig2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,500,50,50);
    box2 = new Box(600,500,50,50);
    ground1 = new Ground(600,550,1200,20)
    log1 = new Logs(700,450,250,PI/2)
    pig1 = new Pig(700,500,22)
    box3 = new Box(800,400,50,50);
    box4 = new Box(600,400,50,50);
    log2 = new Logs(700,350,250,PI/2)
    pig2 = new Pig(700,400,22)
    box5 = new Box(700,300,50,50);
    log3 = new Logs(650,250,120,PI/4)
    log4 = new Logs(750,250,120,-PI/4)
}

function draw(){
    background(0);
    Engine.update(engine);

    strokeWeight(5)
    stroke("blue")
    box1.display();
    box2.display();
    ground1.display();
    log1.display();
    pig1.display()
    box3.display();
    box4.display();
    log2.display();
    pig2.display()
    box5.display()
    log3.display()
    log4.display()
    
   
}