class RedGreen {
    constructor(x,y,w,h) {
      var options = {
          isStatic:true
      }
      this.x=x;
      this.y=y;
      this.w = w;
      this.h = h;
      this.color = color(random(0,255),random(0,255),0) ;
      
    }
    display() {
        
        rectMode(CENTER);
        fill(this.color);
        rect(this.x,this.y,this.w,this.h);
        fill("black");
        stroke("black");
        textSize(30);
        text("RedGreen",this.x-70,this.y-200);
    }
  
  };