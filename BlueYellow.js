class BlueYellow{
    constructor(x,y,w,h) {
      var options = {
          isStatic:true
      }
     
      this.w = w;
      this.h = h;
      this.x=x;
      this.y=y;
      this.random=random(0,255);
      this.color = color(this.random,this.random,random(0,255)) ;
     
    }
    display() {
        
        rectMode(CENTER);
        fill(this.color);
        rect(this.x,this.y,this.w,this.h);
        fill("black");
        textSize(30);
        stroke("black");
        text("BlueYellow",this.x-70,this.y-200);
    }
  
  };