const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    canvasSide1 = new Ground(240,800,470,10);
    canvasSide2 = new Ground(240,0,470,10);
    canvasSide3 = new Ground(0,400,10,800);
    canvasSide4 = new Ground(480,400,10,800);
    ground = new Ground(240,790,470,10);
    

}

function draw(){
    background("black");
    Engine.update(engine);
    fill("brown");
    canvasSide1.display();
    canvasSide2.display();
    canvasSide3.display();
    canvasSide4.display();
    fill("white");
    ground.display();  

    for(var k = 10; k <=width; k = k + 76.5) {
        divisions.push(new Division(k,635,10,divisionHeight));
        }

        for(var j = 40; j <=10; j=j+50){
            plinkos.push(new Plinko(j,75));
        }

        for(var i = 4000; i <=1000; i=i+50){
            particles.push(new Particle(i,75));
        }

        for(var j=0; j < plinkos.length;j++){
            plinkos[j].display();
        }

        for(var i=0; i < particles.length;i++){
            particles[i].display();
        }


        for(var k=0; k < divisions.length;k++){
            divisions[k].display();
        }

        if(frameCount%60===0){
        particles.push(new Particle(random(40,760),10,10));
        }



}


