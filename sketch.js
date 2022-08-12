const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var jogador1, jogador1Img, jogador2, jogador2Img;
var fundo;
var plateia;
var placarJogador1 = 0
var placarJogador2 = 0
var cesta;
var bola1J1,bola2J1, bolaImg;
var estadoJogo = "Start"

function preload(){
fundo = loadImage("Imagens/quadraBasquete.jpg")
jogador2Img = loadImage("Imagens/Jogador2.png")
bolaImg = loadImage("Imagens/bola-de-basquete.png")

}

function setup(){
engine = Engine.create();
world = engine.world;
Engine.run(engine);    
createCanvas(windowWidth,windowHeight)
jogador1 = createSprite(width/2+140,height/2,50,10);
jogador1.shapeColor = "yellow"
jogador2 = createSprite(width/2-300,height/2+100,50,10);
jogador2.addImage("parado",jogador2Img)
jogador2.scale = 0.4
cesta=new dustbin(250,height/2)
var options ={isStatic: true}
bola1J1=Bodies.circle(500,height/2+250,10, options)
	World.add(world,bola1J1)
}

function draw(){
background(fundo);

if(estadoJogo === "Start"){
    textAlign(CENTER)
    textSize(35)
    fill("white")
    text("Prepare-se para o jogo começar!",width/2,height/2+30)

    

    //for(var i = 5;i <= 1;i--){
        textSize(150)
        text("3",width/2,height/2+200)
    //}
    
    image(bolaImg,bola1J1.position.x,bola1J1.position.y,40,40)

//estadoJogo = "Jogando"    

}

//if(estadoJogo === "Jogando"){
    if(keyIsDown(93)){//tecla w
        jogador2.velocityY=-10
        jogador2+=0.9
    }
//}



drawSprites();

}

function keyPressed(){
    if (keyCode === UP_ARROW) {
          console.log("tecla")		
          Matter.Body.setStatic(bola1J1,false)
          Matter.Body.applyForce(bola1J1,bola1J1.position,{x:-100,y:-100});
      }
  }
