class Rope {
    constructor(bodyA,pointB) {
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:1.2,
          length:250
          
      }
      this.rope =Constraint.create(options);
      this.pointB = pointB;
    
      
      World.add(world, this.rope);
    }
    display(){
      var pos =this.rope.bodyA.position;
      var angle = this.pointB;
      push();
      //rectMode(CENTER);
      fill(255);
      strokeWeight(3)
      stroke("cyan")
      line(pos.x,pos.y,angle.x,angle.y)
      pop();
    }
  };
  