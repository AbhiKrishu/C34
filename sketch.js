const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine
var world
var ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20
var ball
var rope
function setup(){
    var Canvas=createCanvas(1000,1000)
    engine=Engine.create()
    world=engine.world
    ground=new Ground(500,700,1000,40)
    box1=new Box(800,600,50,50)
    box2=new Box(800,550,50,50)
    box3=new Box(800,500,50,50)
    box4=new Box(800,450,50,50)
    box5=new Box(800,400,50,50)
    box6=new Box(800,350,50,50)
    box7=new Box(800,300,50,50)
    box8=new Box(800,250,50,50)
    box9=new Box(800,200,50,50)
    box10=new Box(800,150,50,50)
    ball=new Ball(300,300,50,50)
    rope=new Rope(ball.body,{x:650,y:300})
    
    
    

}
function draw(){
    background("black")
    Engine.update(engine)
    ground.display();
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
    ball.display();
    rope.display();

}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}