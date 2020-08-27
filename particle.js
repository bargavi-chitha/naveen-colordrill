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
   this.color = color(this.a,this.b,this.c);
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
     if ((this.body.position.x>150 && this.body.position.x<250)&& (this.body.position.y>450 && this.body.position.y<500)) {
      score=score+1;  
    
      World.remove(world,this.body);                           
  }
      else if ((this.body.position.x>550 && this.body.position.x<650)&& (this.body.position.y>450 && this.body.position.y<500)) {
        score = score + 1;
        World.remove(world,this.body); 
      }
      else if ((this.body.position.x>950 && this.body.position.x<1050)&& (this.body.position.y>450 && this.body.position.y<500)) {
        score = score + 1;
        World.remove(world,this.body); 
      }

 }

}