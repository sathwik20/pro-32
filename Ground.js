class Ground
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,			
		    friction:0.4	
		}
		
		this.body=Bodies.rectangle(x,y,this.width,this.height,options);
		this.width= width
		this.height=height
 		World.add(world, this.body);

	}
	display(){		
			
			fill("brown")
			rectMode(CENTER)
			rect(this.body.position.x,this.body.position.y,this.width,this.heigt);
	}

}