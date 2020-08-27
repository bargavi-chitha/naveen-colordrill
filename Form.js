class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Start');
      this.title = createElement('h1');
      this.reset = createButton('reset');
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
    display(){
      this.title.html("Colour Blindness Simulator");
      this.title.position(displayWidth/2 - 150, 0);
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 200);
      this.button.style('background-color',color(239, 236, 129));
      this.button.style('font-size','20px');
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        gameState+=1;
        player = this.input.value();
      });
      this.reset.mousePressed(()=>{
        gameState=0; 
        game.start();
        score=0;
        r=0;
        b=0;
        c=0;
      });
    }
  }
  