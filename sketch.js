const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball;
var gameState;
var score = 0;
let button;
var d = [];


function preload() {
  backgroundImg = loadImage("maxresdefault-back.jpg");
}



function setup() {
  canvas = createCanvas(displayWidth - 30, displayHeight-125);
  engine = Engine.create();
  world = engine.world;
 
  /*button = createButton("credits");
  button.position(displayWidth-500,50)
  button.mousePressed(credits);
*/
  
  button1 = createButton("⬆");
  button1.position(displayWidth-300,220);
  button1.mousePressed(goUp);

  button2 = createButton("⬇");
  button2.position(displayWidth-300,310);
  button2.mousePressed(goDown);

  button3 = createButton("⬅");
  button3.position(displayWidth-355,265);
  button3.mousePressed(goLeft);

  button4 = createButton("➡");
  button4.position(displayWidth-250,265);
  button4.mousePressed(goRight);

  button5 = createButton("Reset");
  button5.position(displayWidth-500,50);
  button5.mousePressed(reset);


nate = new player(100,200,10);
  ground = new box(displayWidth - 30, displayHeight-125,displayWidth + 5000,10);

  rightWall= new box(displayWidth - 30,500,10,8000);
  topWall= new box(400,1,10000,10);
  wall = new box(0,200,30,100000);



  for(var b = 200; b < 3000 ; b+= 30){
    d.push(new pointer(b,200,30,30,"white"));
   
}

for(var b = 200; b < 3000 ; b+= 30){
  d.push(new pointer(b,200,30,30,"violet"));
 
} 

for(var b = 200; b < 3000 ; b+= 30){
  d.push(new pointer(b,200,30,30,"red"));
 
} 
  
for(var b = 200; b < 3000 ; b+= 30){
  d.push(new pointer(b,200,30,30,"green"));
 
} 

for(var b = 200; b < 3000 ; b+= 30){
  d.push(new pointer(b,200,30,30,"blue"));
 
} 

for(var b = 200; b < 3000 ; b+= 30){
  d.push(new pointer(b,200,30,30,"purple"));
 
} 

  chain1 = new SlingShot(nate.body, {
    x : 100,
    y : 200  
  })
 
  Engine.run(engine);

}

function draw() {
  Engine.update(engine);
  background(backgroundImg);  
  chain1.display();
  
  for(var c = 0 ; c < d.length ; c++ ){
    d[c].display();
    console.log(d[c])

}

  
    nate.display();
  
  ground.display2();
  
  
 /* if(mouseIsPressed){
    credits();
  }*/
    
  

  /*if(mousePressed(creditButton)){
    noStroke();
    textSize(20)
    fill("black")
    text("Rules", 1,30);
    text("Rules of the game are quiet simple just create mayhem with the blue ball",1,85);
    text("Once launched from original position you can use arrow keys to move the ball",1,185);
    text("Once all the boxes are over you can refresh the page or just close the browser",1,120);
    text("Launch the blue ball the same you would do an angry bird",1,155);
    text("The name of the game is CubeBreaker",1,55);
  
  }*/




  drawSprites();



}

function mouseDragged(){
  Matter.Body.setPosition(nate.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW ){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:+0.5,y:0});

  }

  if(keyCode === LEFT_ARROW ){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:-0.5,y:0});

  }

  if(keyCode === UP_ARROW ){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:0,y:-0.5});

  }

  if(keyCode === DOWN_ARROW ){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:0,y:+0.5});

}

if(keyCode === 32){
  chain1.attach(nate.body);
   Matter.Body.setPosition(nate.body,{x:100, y:200});
}
}

function credits(){
  
    noStroke();
    textSize(20)
    fill("black")
    text("Rules", 1,30);
    text("Rules of the game are quiet simple just create mayhem with the blue ball",1,85);
    text("Once launched from original position you can use arrow keys to move the ball",1,185);
    text("Once all the boxes are over you can refresh the page or just close the browser",1,120);
    text("Launch the blue ball the same you would do an angry bird",1,155);
    text("The name of the game is CubeBreaker",1,55);
  }

  function goUp(){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:0,y:-0.2});

  }

  function goDown(){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:0,y:+0.2});

  }

  function goLeft(){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:-0.2,y:0});

  }

  function goRight(){
    Matter.Body.applyForce(nate.body,nate.body.position,{x:+0.2,y:0});

  }

  function reset(){
    chain1.attach(nate.body);
   Matter.Body.setPosition(nate.body,{x:100, y:200});
  }