class Bob{
    constructor(x,y){
var options = {
    // isStatic : true,
    restitution : 1,
    friction : 0,
    density : 0.8
   
}

  this.body = Bodies.circle(x, y, 20, options);
  this.radius = 20
  

  World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        ellipseMode(RADIUS);
       //circleMode(CENTER)
       
        circle(0, 0, this.radius);
        //image(this.image,0,0,this.radius*2,this.radius*2)
        pop();
      }





    }
