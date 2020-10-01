class Particle {
    constructor(x,y){
        var options = {
             
             restitution:0.3
            

        }
        this.body = Bodies.circle(x,y,10,options);
        
        
         this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
            
        push ();
        fill (this.color);
        translate(pos.x,pos.y);
         angleMode(RADIANS);
         rotate (angle);
         ellipseMode(RADIUS);
         ellipse(0,0,10);
         pop ();
    }
}