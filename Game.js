class Game{
constructor() {}
    start(){
        if(gameState===0){
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        division1=new BlueYellow(200,height-20,200,150);
        division2=new RedGreen(600,height-20,200,150);
        division3=new ColorBlind(1000,height-20,200,150);
        division1.display();
        division2.display();
        division3.display();
    }
}