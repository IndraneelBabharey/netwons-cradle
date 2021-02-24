class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
       
    
    }
    this.offsetX = offsetX
    this.offsetY = offsetY
    this.chain=Constraint.create(options)
    World.add(world,this.chain)
    
    
    
    }
    
    display(){
    
    var PointA = this.chain.bodyA.position
    var PointB = this.chain.bodyB.position
    strokeWeight(3)
    line(PointA.x,PointA.y,PointB.x+this.offsetX,PointB.y)
    
    }
    }