class Plinko {
    constructor(x,y){
        var options = {
             isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
         angleMode(RADIANS);
         rotate (angle);
         ellipseMode(RADIUS);
         ellipse(0,0,10);
         pop ();
    }
}