const Engine =Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;
var engine,world,ground;
var particles,plinkos,divisions;
var divisionH;
function setup(){
  createCanvas(400,600);
engine = Engine.create();
world = engine.world;
particles = [];
plinkos =[];
divisions = [];
divisionH =200;

ground =new Ground(200,580,400,20);
}
function draw(){
  background(0,0,0);
Engine.update(engine);
 if(frameCount%30===0){
   particles.push(new Particle(random(20,400),50));
 }

for(var a = 30; a<400;a = a +50){
  plinkos.push(new Plinko(a,70));
}
for(var a = 15; a<400;a = a +50){
  plinkos.push(new Plinko(a,140));
}
for(var a = 30; a<400;a = a +50){
  plinkos.push(new Plinko(a,210));
}
for(var a = 15; a<400;a = a +50){
  plinkos.push(new Plinko(a,280));
}
for(var d = 2.5;d<400;d = d + 60){
  divisions.push(new Division(d,480,5,divisionH));
}

for(var l = 0; l<divisions.length;l++){
  divisions[l].display();
}
for(var c = 0;c<plinkos.length;c++){
  plinkos[c].display();
}
for(var y = 0;y<particles.length;y++){
  particles[y].display();
}
ground.display();



}
