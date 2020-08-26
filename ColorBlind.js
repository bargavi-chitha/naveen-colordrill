class ColorBlind {
  constructor(x,y,w,h) {
    var options = {
        isStatic:true
    }
    this.x=x;
    this.y=y;
    this.w = w;
    this.h = h;
    this.random=random(0,255);
    this.color = color(this.random,this.random,this.random) ;
    
  }
  display() {
      
      rectMode(CENTER);
      fill(this.color);
      rect(this.x,this.y,this.w,this.h);
      fill("black");
      stroke("black");
      textSize(30);
      text("ColorBlind",this.x-70,this.y-200);
  }

};