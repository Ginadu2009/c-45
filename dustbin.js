class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=100;
		this.dustbinHeight=213;
		this.wallThickness=20;

		this.bottomBody=Matter.Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Matter.Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-50, this.wallThickness, 120, {isStatic:true})
		this.rightWallBody=Matter.Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-50, this.wallThickness, 120, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			
			rect(0,0,this.wallThickness, 120);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, 120);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			//image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}