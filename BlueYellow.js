class BlueYellow{
	constructor(x,y,w,h) {
		this.x=x;
		this.y=y;
		this.dustbinWidth=w;
		this.dustbinHeight=h;
		this.wallThickness=40;
		this.angle=0;	
		this.random=random(0,255);
		this.color = color(this.random,this.random,random(0,255)) ;
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);

	}
	display() {
		var posBottom=this.bottomBody.position;
		var posLeft=this.leftWallBody.position;
		var posRight=this.rightWallBody.position;

		

		push();
		translate(posLeft.x, posLeft.y);
		rectMode(CENTER);
		angleMode(RADIANS);
		fill(this.color);
		stroke(255);
		rotate(this.angle);
		rect(0,0,this.wallThickness, this.dustbinHeight);
		pop();

		push();
		translate(posRight.x, posRight.y);
		rectMode(CENTER);
		stroke(255);
		angleMode(RADIANS);
		fill(this.color);
		rotate(-1*this.angle);
		rect(0,0,this.wallThickness, this.dustbinHeight);
		pop();

		push();
		translate(posBottom.x, posBottom.y);
		rectMode(CENTER);
		stroke(255);
		angleMode(RADIANS);
		fill(this.color);
		rect(0,0,this.dustbinWidth, this.wallThickness);
		pop();
			
	}
}