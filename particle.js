class Particle {
 constructor(x,y,r) {
   var options = {
       friction:0.4
   }
   this.r = r;
   this.a=random(0,255);
   this.b=random(0,255);
   this.c=random(0,255);
   this.body = Bodies.circle(x,y,this.r,options);
   this.color = color(this.a,this.b,this.c);
   console.log(this.a);
   console.log(this.b);
   console.log(this.c);
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
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);

     pop();
     if ((this.body.position.x>150 && this.body.position.x<250)&& (this.body.position.y>450 && this.body.position.y<500)) {
      if(((this.c>this.b) && (this.c>this.a) && (this.b>=this.a))||((this.a===this.b) && (this.c<this.a) && (this.c<this.b))){
      score=score+1;  
      }else{
        b++;
      }
      this.body.position.x=0;
      this.body.position.y=0;               
  }
      else if ((this.body.position.x>550 && this.body.position.x<650)&& (this.body.position.y>450 && this.body.position.y<500)) {
      
      if(((this.a>this.b) && (this.a>this.c) && (this.b>=this.c))||((this.b>this.c) && (this.b>this.a) && (this.a>=this.c))){
        score = score + 1;
      }else{
        r++;
      }
      this.body.position.x=0;
      this.body.position.y=0;
      }
      else if ((this.body.position.x>950 && this.body.position.x<1050)&& (this.body.position.y>450 && this.body.position.y<500)) {
        if(this.a===this.b && this.b===this.c && this.c=== this.a){
        score = score + 1;
        }else{
          c++;
        }
        this.body.position.x=0;
        this.body.position.y=0;
      }
      fill(0);
      stroke(0);
      textSize(20);
      if(b>=5) {
        text(player +" has Blue-yellow Colour Blindness.",400,250);
        text(player +" has identified "+score+" colour shades correctly",400,300);
        text("Press reset to play again",400,350);
      }else  if(r>=5) {
        text(player +" has Red-green Colour Blindness",400,250);
        text(player +" has identified "+score+" colour shades correctly",400,300);
        text("Press reset to play again",400,350);
      }else if(c>=5) {
        text(player +" has complete Colour Blindness",400,250);
        text(player +" has identified "+score+" colour shades correctly",400,300);
        text("Press reset to play again",400,350);
      }  
 }

}