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
   console.log(this.a);
   console.log(this.b);
   console.log(this.c);
   World.add(world,this.body);
   this.Visiblity=255;
 }
 display() {
     var pos = this.body.position;
     var angle = this.body.angle;

     push();
     translate(pos.x,pos.y);
     rotate(angle);
     noStroke();
     fill(this.color);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);

     pop();
     if ((this.body.position.x>150 && this.body.position.x<250)&& (this.body.position.y>450 && this.body.position.y<500)) {
      if(this.a===this.b && this.c===random(0,255)){
      score=score+1;  
      }else{
        count=count+1;
      }
      this.body.position.x=0;
      this.body.position.y=0;
                     
  }
      else if ((this.body.position.x>550 && this.body.position.x<650)&& (this.body.position.y>450 && this.body.position.y<500)) {
      
      if(this.a===random(0,255) && this.b===random(0,255) && this.c===0){
        score = score + 1;
      }else{
        count=count+1;
      }
        this.body.position.x=0;
      this.body.position.y=0;
       
      }
      else if ((this.body.position.x>950 && this.body.position.x<1050)&& (this.body.position.y>450 && this.body.position.y<500)) {
        if(this.a===this.b && this.b===this.c && this.c=== this.a){
        score = score + 1;
        }else{
          count=count+1;
        }
        this.body.position.x=0;
        this.body.position.y=0;
      }

 }

}