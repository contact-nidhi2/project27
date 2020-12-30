class Rope{
    constructor(bodyA,bodyB,offset){
        
        this.offset =offset;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB :{x:this.offset,y:0},
        }
      this.rope = Constraint.create(options);
      World.add(world,this.rope); 
    }
    display(){
       var Apos=this.rope.bodyA.position;
       var Bpos=this.rope.bodyB.position;
       strokeWeight(4);
       stroke("black");
       line(Apos.x,Apos.y, Bpos.x+this.offset,Bpos.y)  
    }
}