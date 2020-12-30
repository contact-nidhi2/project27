class Bob{
    constructor(x,y){
       var options ={
            sStatic: false,
            restitution :0.4,
            friction :0.5,
            density :1.2
        }
        this.radius = 50;
    this.body=Bodies.circle(x,y,this.radius/2,options);
    World.add(world,this.body)
	
   
    }
    display(){
		var pos =this.body.position;
		var angle =this.body.angle;
		push();
		translate(pos.x,pos.y);
	  //rotate(angle);
		fill("purple")
		ellipse(0,0,this.radius,this.radius);
		pop();
    }
}
