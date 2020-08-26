class Particle {
 constructor(x,y,r) {
   var options = {
       friction:0.4
   }
   this.r = r;
   this.a=random(0,255);
   this.b=random(0,255);
   this.c=random(0,255);

   this.body = Bodies.circle(x,y,this.r,options)
   this.color = color(a,b,c);
   World.add(world,this.body);
 }
 display() {
     var pos = this.body.position;
     var angle = this.body.angle;

     push();
     translate(pos.x,pos.y);
     rotate(angle);
     noStroke();
     fill(this.color);
     console.log(this.color);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);

     pop();
 }
 score(){
if(a)

 }
};